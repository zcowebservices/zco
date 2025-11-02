"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Section from "@/components/Section"; 
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
        // adjust 10 to whatever offset you want
        setScrolled(window.scrollY > 4);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Header */}
            <header className={`sticky top-0 z-50 bg-white/70 backdrop-blur-md transition-all ${scrolled ? "shadow-sm border-slate-200" : ""}`}>
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo / name */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                >
                    <Image
                    className="rounded-full w-14 h-14 md:w-20 md:h-20"
                    alt="Zahari Tzigularov profile photo"
                    src="/zahari_tzigularov_profile_square.jpg"
                    width={80}
                    height={80} 
                    sizes="(min-width: 768px) 80px, 56px"
                    />
                    <span className="text-lg font-semibold tracking-tight md:text-xl">
                    Zahari Tzigularov
                    </span>
                </Link>

                {/* Mobile menu button */}
                <button
                    onClick={() => setOpen((p) => !p)}
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700"
                    aria-label="Toggle navigation"
                >
                    <span className="sr-only">Open menu</span>
                    <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    >
                    {open ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <>
                        <path d="M4 7h16" />
                        <path d="M4 12h16" />
                        <path d="M4 17h16" />
                        </>
                    )}
                    </svg>
                </button>

                
                {/* Desktop nav */}
                <nav className="hidden md:flex gap-6 text-base text-slate-600">
                    <a
                    href="#projects"
                    className="relative pb-1 hover:text-emerald-700 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                        after:h-[1px] after:w-0 after:bg-emerald-700 after:transition-all after:duration-200
                        hover:after:w-full"
                    >
                    Portfolio
                    </a>
                    <a
                    href="#about"
                    className="relative pb-1 hover:text-emerald-700 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                        after:h-[1px] after:w-0 after:bg-emerald-700 after:transition-all after:duration-200
                        hover:after:w-full"
                    >
                    About
                    </a>
                    <a
                    href="#contact"
                    className="relative pb-1 hover:text-emerald-700 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                        after:h-[1px] after:w-0 after:bg-emerald-700 after:transition-all after:duration-200
                        hover:after:w-full"
                    >
                    Contact / Free Consultation
                    </a>
                </nav>

                {/* Mobile nav panel */}
                <div
                    className={`
                        absolute left-0 top-full w-full md:hidden z-50 origin-top
                        transition-all duration-200
                        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
                    `}
                    >
                    <div className="bg-white/95 backdrop-blur border border-slate-200 rounded-md shadow-md">
                        <nav className="flex flex-col px-4 py-3 gap-2 text-slate-700">
                        <a href="#projects" onClick={() => setOpen(false)} className="py-2 border-b border-slate-100">
                            Projects
                        </a>
                        <a href="#about" onClick={() => setOpen(false)} className="py-2 border-b border-slate-100">
                            About
                        </a>
                        <a href="#contact" onClick={() => setOpen(false)} className="py-2">
                            Contact
                        </a>
                        </nav>
                    </div>
                </div>
            </div>
                

            </header>

        <main className="max-w-5xl mx-auto mt-2 px-4 space-y-16 pb-16">
            {/* Hero */}
            <Section>
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-emerald-700">
                Small Business Web Developer • Denver, CO
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Specializing in building fast, reliable websites and interfaces for small businesses.
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
                View Portfolio
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
            <Section id="projects" title="Project Highlights">
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
                    title="Example Live Client Site" 
                    desc="Small business client site generated with LAUNCHED."
                    tech="PHP · MySQL · JS · jQuery · React · OpenAI · Payment APIs · Social Auth APIs" 
                    href="https://magicepoxyworld.com/"
                />
            

                
            </div>
            </Section>

            {/* Experience */}
            <Section id="about" title="About Me">
            <div className="space-y-6">
               
                
                <p className="text-slate-700 mt-1">
                    I am a web developer specializing in websites and SEO for small businesses and creatives.  I have nearly two decades of experience building responsive, production-ready web applications.  So, whether you're just getting started or need to upgrade your online presence, I can help.
                </p>
                 <p className="text-slate-700 mt-1">
                    I specialize in HTML, CSS, PHP, MySQL, jQuery, JavaScript, React.js, Next.js, OpenAI integration, and latest SEO standards — and I offer free consultations and full project management.
                </p>
               
            </div>
            </Section>

            {/* Tech / Learning */}
            <Section title="Free Consultations">
            <p className="text-slate-700">
                I offer <span className="font-semibold">free consultations</span> — by phone or in person — to talk through your website or frontend project, review what you already have, and provide suggestions. No obligation, just straight answers and a clear next step.
            </p>
            </Section>

            {/* Contact */}
            <Section id="contact" title="Contact">
            <p className="text-slate-700 mb-2">
                Email:{" "}
                <a href="mailto:tzigularov@gmail.com" className="text-emerald-700 hover:text-emerald-900">
                zcowebservices@gmail.com
                </a>
            </p>
            <p className="text-slate-700 mb-2">
                Phone / SMS:{" "}
                <a href="tel:13037182293" className="text-emerald-700 hover:text-emerald-900">
                1-303-718-2293
                </a>
            </p>
            <p className="text-slate-700">Denver / Indian Hills, CO • Currently taking on new projects.</p>
            </Section>
        </main>
        </>
    );
}
