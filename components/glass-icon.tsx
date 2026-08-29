export function GlassIcon({
  src,
  alt = "",
  size = 44,
  inner = 36,
  rounded = 12,
  tone = "light",
  iconClassName = "",
}: {
  src: string;
  alt?: string;
  size?: number;
  inner?: number;
  rounded?: number;
  tone?: "light" | "dark";
  iconClassName?: string;
}) {
  const isDark = tone === "dark";

  return (
    <span
      className={`relative block shrink-0 border-2 ${
        isDark ? "border-[#2c2c2c]" : "border-surface-3"
      }`}
      style={{ width: size, height: size, borderRadius: rounded }}
    >
      <span
        className={`absolute inset-0 ${isDark ? "bg-[#1e1e1e]" : "bg-surface"}`}
        style={{ borderRadius: rounded - 2 }}
      />
      <span
        className={`absolute top-1/2 left-1/2 overflow-clip border ${
          isDark ? "border-[#2c2c2c]" : "border-surface-3"
        }`}
        style={{
          width: inner,
          height: inner,
          borderRadius: Math.max(rounded - 4, 4),
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={src}
          alt={alt}
          width={16}
          height={16}
          className={`absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 object-contain ${iconClassName}`}
        />
      </span>
    </span>
  );
}
