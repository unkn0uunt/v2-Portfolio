import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Triumph Anya-Nga",
  description: "Get in touch with Triumph Anya-Nga about a web or mobile project.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
