import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Triumph Anya-Nga",
  description: "Selected web and mobile projects by Triumph Anya-Nga.",
  alternates: { canonical: "/works" },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
