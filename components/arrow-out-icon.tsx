export function ArrowOutIcon({
  className,
  size = 44,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect
        x="0.5"
        y="0.5"
        width="43"
        height="43"
        rx="13.5"
        stroke="currentColor"
        shapeRendering="crispEdges"
      />
      <path
        d="M21.723 29.6276L29.9857 21.5005C27.9136 19.4682 23.7951 15.4056 21.723 13.3734L20.6804 14.382C22.5451 16.2108 25.0103 18.646 27.1863 20.7822H13.7316V22.2169H27.1863L20.6805 28.607L21.7241 29.6266L21.723 29.6276Z"
        fill="currentColor"
      />
    </svg>
  );
}
