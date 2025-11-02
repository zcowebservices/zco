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
    metadataBase: new URL("https://www.zcowebservices.com"), // <-- change this
    openGraph: {
        title: "Zahari Tzigularov - Small Business Web Developer",
        description: "I build fast, modern sites using PHP, MySQL, JavaScript, Next.js, React.",
        url: "https://www.zcowebservices.com",
        siteName: "Zahari Tzigularov Portfolio",
        images: [
        {
            url: "/og-zcowebservices.png",
            width: 1200,
            height: 675,
            alt: "Zahari Tzigularov - Small Business Web Developer",
        },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Zahari Tzigularov - Small Business Web Developer",
        description: "PHP, MySQL, JavaScript, Next.js, React.",
        images: ["/og-zcowebservices.png"],
    },
    
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth " >
      <body className="text-slate-700 antialiased  bg-[linear-gradient(135deg,rgba(51,65,85,1),rgba(51,65,85,.7)),url('/abstract-bg.jpg')] bg-cover bg-center bg-fixed">
        {children}
      </body>
    </html>
  );
}
