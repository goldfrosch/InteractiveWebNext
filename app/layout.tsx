import type { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Interactive Web",
  description: "Interactive web experiments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
