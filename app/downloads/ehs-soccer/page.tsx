import Link from "next/link";

   // app/downloads/project-name/page.tsx
   export const metadata = { title: "EHS Soccer | Z Co Web Services", robots: { index: false } };

   export default function Download() {
     return (
       <main className="max-w-2xl mx-auto px-4 py-24">
         <h1 className="text-3xl font-bold">EHS Soccer Seniors 2026</h1>
         <p className="mt-4 hidden">Prepared by Zahari Tzigularov, Z Co Web Services.</p>
         <a href="https://downloads.zcowebservices.com/EHS-Seniors-2026.zip"
            className="inline-block mt-6 bg-[var(--accent)] text-[var(--background)] px-6 py-2 rounded-md font-medium">
           Download (1.8 GB)
         </a>
         <Link
          href="/"
          className="border border-[var(--background)] bg-[var(--background)] px-6 py-2 rounded-md font-medium transition duration-200 hover:scale-[1.05] hover:shadow-md hover:shadow-slate-900/30"
        >
          Back to Home
        </Link>
       </main>
     );
   }