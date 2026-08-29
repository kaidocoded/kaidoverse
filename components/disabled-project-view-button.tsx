"use client";

import { useProjectViewToast } from "@/components/project-view-toast";

export function DisabledProjectViewButton({
  tooltipId,
}: {
  tooltipId: string;
}) {
  const { showToast } = useProjectViewToast();

  const handleActivate = () => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      showToast();
    }
  };

  return (
    <span className="t-tt-wrap">
      <span
        role="button"
        tabIndex={0}
        aria-disabled="true"
        aria-describedby={tooltipId}
        onClick={handleActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleActivate();
          }
        }}
        className="t-tt-trigger inline-flex h-11 cursor-not-allowed items-center rounded-2xl border border-primary/40 px-5 text-[18px] font-medium text-primary/40 max-lg:cursor-pointer"
      >
        View
      </span>
      <span id={tooltipId} className="t-tt max-lg:hidden" role="tooltip">
        coming soon.
      </span>
    </span>
  );
}
