import { CaseStudyScreen } from "@/types/types";
import DeviceMockup from "./DeviceMockup";

type ScreenGalleryProps = {
  screens: CaseStudyScreen[];
  columns?: 2 | 3;
};

export default function ScreenGallery({
  screens,
  columns = 2,
}: ScreenGalleryProps) {
  if (screens.length === 0) return null;

  const gridClass =
    columns === 3
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      : "grid grid-cols-1 sm:grid-cols-2 gap-10";

  return (
    <div className={gridClass}>
      {screens.map((screen) => (
        <div key={screen.src} className="flex flex-col items-center gap-4">
          <DeviceMockup
            src={screen.src}
            alt={screen.alt}
            variant={screen.variant ?? "device"}
          />
          {screen.caption && (
            <p className="text-sm text-neutral-400 text-center">
              {screen.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
