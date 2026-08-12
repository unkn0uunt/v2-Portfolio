import Image from "next/image";
import { ScreenVariant } from "@/types/types";

type DeviceMockupProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  variant?: ScreenVariant;
  className?: string;
};

const sizeClasses = {
  sm: "w-[160px] sm:w-[180px]",
  md: "w-[220px] sm:w-[240px]",
  lg: "w-[260px] sm:w-[280px]",
};

export default function DeviceMockup({
  src,
  alt,
  size = "md",
  variant = "device",
  className = "",
}: DeviceMockupProps) {
  // Marketing assets already include phone chrome — show flat, no extra bezel/island
  if (variant === "marketing") {
    return (
      <div className={`relative mx-auto ${sizeClasses[size]} ${className}`}>
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-2xl bg-neutral-950">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 180px, 280px"
            className="object-contain object-center"
          />
        </div>
      </div>
    );
  }

  // Raw screenshots — slim bezel only, no Dynamic Island
  return (
    <div className={`relative mx-auto ${sizeClasses[size]} ${className}`}>
      <div className="rounded-[1.75rem] border-[5px] border-neutral-700 bg-black p-1 shadow-xl shadow-black/40">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.35rem] bg-neutral-950">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 180px, 280px"
            className="object-contain object-top"
          />
        </div>
      </div>
    </div>
  );
}
