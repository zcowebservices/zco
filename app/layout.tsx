// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Z Co Web Services | Zahari Tzigularov - Small Business Web Developer",
    description: "Specializing in building fast, reliable websites and interfaces for small businesses",
    icons: {
        icon: "/favicon.png",     // <-- the SVG you just created in /public
        shortcut: "/favicon.png",    // <-- optional, from earlier
    },
    
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
