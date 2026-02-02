import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontask",
  description: "웹 개발자를 위한 프로젝트 데이터 구상 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
