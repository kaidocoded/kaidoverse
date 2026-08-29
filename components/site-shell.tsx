"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { ProjectViewToastProvider } from "@/components/project-view-toast";

type NavContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const NavContext = createContext<NavContextValue | null>(null);

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) {
    throw new Error("useNav must be used within SiteShell");
  }
  return ctx;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <ProjectViewToastProvider>
      <NavContext.Provider value={value}>{children}</NavContext.Provider>
    </ProjectViewToastProvider>
  );
}
