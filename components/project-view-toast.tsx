"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const DISMISS_MS = 3000;
const CLOSE_MS = 250;

type ProjectViewToastContextValue = {
  showToast: () => void;
};

const ProjectViewToastContext =
  createContext<ProjectViewToastContextValue | null>(null);

export function useProjectViewToast() {
  const ctx = useContext(ProjectViewToastContext);
  if (!ctx) {
    throw new Error(
      "useProjectViewToast must be used within ProjectViewToastProvider",
    );
  }
  return ctx;
}

export function ProjectViewToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);
  const unmountTimerRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    if (unmountTimerRef.current) window.clearTimeout(unmountTimerRef.current);
    hideTimerRef.current = null;
    unmountTimerRef.current = null;
  }, []);

  const showToast = useCallback(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) return;

    clearTimers();
    setActive(true);
    setVisible(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });

    hideTimerRef.current = window.setTimeout(() => {
      setVisible(false);
      unmountTimerRef.current = window.setTimeout(() => {
        setActive(false);
      }, CLOSE_MS);
    }, DISMISS_MS);
  }, [clearTimers]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  return (
    <ProjectViewToastContext.Provider value={{ showToast }}>
      {children}
      {active ? (
        <div
          className={`project-view-toast t-toast pointer-events-none lg:hidden ${visible ? "is-open" : ""}`}
          role="status"
          aria-live="polite"
        >
          <span className="whitespace-nowrap text-[14px] font-medium leading-[1.1] text-white">
            Project index coming soon
          </span>
        </div>
      ) : null}
    </ProjectViewToastContext.Provider>
  );
}
