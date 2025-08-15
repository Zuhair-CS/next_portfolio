import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio showcasing my skills, projects, and achievements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
