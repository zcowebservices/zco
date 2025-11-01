// app/page.tsx
import Link from "next/link";
import Section from "@/components/section";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
        {/* Header */}
        <header className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold tracking-tight flex items-center gap-6">
                <Image className="rounded-full" alt="Zahari Tzigularov profile photo" src="/zahari_tzigularov_profile_square.jpg" width={80} height={80} />Zahari Tzigularov
            </Link>
            <nav className="flex gap-6 text-base text-slate-600">
                <a href="#projects" className="relative pb-1 hover:text-emerald-700 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5
               after:h-[1px] after:w-0 after:bg-emerald-700 after:transition-all after:duration-200
               hover:after:w-full">Projects</a>
                <a href="#experience" className="relative pb-1 hover:text-emerald-700 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5
               after:h-[1px] after:w-0 after:bg-emerald-700 after:transition-all after:duration-200
               hover:after:w-full">Experience</a>
                <a href="#contact" className="relative pb-1 hover:text-emerald-700 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5
               after:h-[1px] after:w-0 after:bg-emerald-700 after:transition-all after:duration-200
               hover:after:w-full">Contact</a>
            </nav>
        </header>

      <main className="max-w-5xl mx-auto px-4 space-y-16 pb-16">
        {/* Hero */}
        <Section>
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-emerald-700">
            Full-Stack Developer • Denver
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            I build fast, reliable web interfaces.
          </h1>
          <p className="mt-5 max-w-2xl text-slate-700 leading-relaxed">
            19+ years building production sites in PHP, JavaScript, React, and modern tooling.
            Currently working with Next.js, AI/LLM APIs, and cloud deployments to speed up content workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-emerald-700 border-1 border-emerald-700 text-white px-6 py-2 rounded-md font-medium transition duration-200 hover:scale-[1.01] hover:shadow-sm hover:shadow-slate-700/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-slate-500 px-6 py-2 rounded-md font-medium transition duration-200 hover:scale-[1.01] hover:shadow-sm hover:shadow-slate-700/30"
            >
              Contact
            </a>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Selected Projects">
          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard 
                title="Multi-Site Platform (BluDomain)" 
                desc="Responsive templates, full custom CMS, REST integration for creative businesses."
                tech="PHP · MySQL · JS · jQuery · Payment APIs · Social Auth APIs" 
                href="https://bludomain.com" 
            /> 

            <ProjectCard 
                title="Multi-Site Platform (SOCIA TAP)" 
                desc="Responsive templates, full custom CMS, REST integration for creative businesses."
                tech="PHP · MySQL · JS · jQuery · React · Node.js ·Payment APIs · Social Auth APIs" 
                href="https://sociatap.com" 
            />

            <ProjectCard 
                title="Multi-Site Platform (LAUNCHED)" 
                desc="Responsive AI-driven instantly-generated websites, full CMS, REST integration for creative businesses."
                tech="PHP · MySQL · JS · jQuery · React · OpenAI · Payment APIs · Social Auth APIs" 
                href="https://launched.site" 
            />

            <ProjectCard 
                title="Example Live Client Site" 
                desc="Small business client site generated with LAUNCHED."
                tech="PHP · MySQL · JS · jQuery · React · OpenAI · Payment APIs · Social Auth APIs" 
                href="https://malsimappliancerepair.co.uk/" 
            />

            <ProjectCard 
                title="Example Live Client Site" 
                desc="Link-In-Bio site generated with SOCIA TAP."
                tech="PHP · MySQL · JS · jQuery · React · Node.js · Payment APIs · Social Auth APIs" 
                href="https://sociatap.com/jessegolden/" 
            />

            <ProjectCard 
                title="Bank Reconciliation Automation (Walmart HQ)" 
                desc="Automated financial ops to improve accuracy and reduce manual effort."
                tech="Custom Accounting Software"
            />
           

            
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                Web Programmer - BluDomain <span className="text-slate-700 text-base">(2004 – Present)</span>
              </h3>
              <p className="text-slate-700 mt-1">
                Built and maintained production sites using PHP, MySQL, JS, jQuery, React.js, Node.js, HTML/CSS.
                Delivered full solutions for clients and improved performance/SEO.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Automatic Reconciliation Team Lead - Walmart HQ
              </h3>
              <p className="text-slate-700 mt-1">
                Lead a team of four accountants and worked closely with IT department to implement a new automated system for bank reconciliation, enhancing efficiency and accuracy in HQ financial operations.
              </p>
            </div>
          </div>
        </Section>

        {/* Tech / Learning */}
        <Section title="Current Focus">
          <p className="text-slate-700">
            Actively exploring Next.js App Router, server actions, AI/LLM integrations, Payload Headless CMS, and better DX for
            multi-tenant sites. Comfortable integrating REST/JSON APIs and collaborating with design/backend teams.
          </p>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="text-slate-700 mb-2">
            Email:{" "}
            <a href="mailto:tzigularov@gmail.com" className="text-emerald-700 hover:text-emerald-900">
              tzigularov@gmail.com
            </a>
          </p>
          <p className="text-slate-700 mb-2">
            Phone / SMS:{" "}
            <a href="tel:13037182293" className="text-emerald-700 hover:text-emerald-900">
              1-303-718-2293
            </a>
          </p>
          <p className="text-slate-700 mb-2">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/zahari-tzigularov/"
              className="text-emerald-700 hover:text-emerald-900"
            >
              /in/zahari-tzigularov/
            </a>
          </p>
          <p className="text-slate-700">Denver / Indian Hills, CO • Open to full-time or project work.</p>
        </Section>
      </main>
    </>
  );
}
