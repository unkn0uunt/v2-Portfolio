import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  showWordmark?: boolean;
  /** Light tile + navy mark (for dark backgrounds) */
  inverted?: boolean;
};

/** UNKNW0WNT mark — U stem into target circle. */
export default function LogoMark({
  className,
  showWordmark = false,
  inverted = false,
}: LogoMarkProps) {
  const tile = inverted ? "#f8fafc" : "#0f172a";
  const ink = inverted ? "#0f172a" : "#f8fafc";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        width="40"
        height="40"
        className="h-full w-auto shrink-0"
        aria-hidden
      >
        <rect width="64" height="64" rx="16" fill={tile} />
        <path
          d="M18 18v18.5c0 6.35 4.55 10.5 10.8 10.5h1.2c2.35 0 4.35-.55 5.95-1.55"
          fill="none"
          stroke={ink}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="42"
          cy="33"
          r="9.5"
          fill="none"
          stroke={ink}
          strokeWidth="5.5"
        />
        <circle cx="42" cy="33" r="3.2" fill={ink} />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            "font-display text-sm font-semibold tracking-[0.18em] uppercase",
            inverted ? "text-slate-100" : "text-slate-900"
          )}
        >
          UNKNW0WNT
        </span>
      )}
    </span>
  );
}
