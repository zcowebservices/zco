import Link from "next/link";

type ProjectCardProps = {
    title: string;
    desc: string;
    tech?: string;
    href?: string;
};


export default function  ProjectCard({title, desc, tech, href}:ProjectCardProps){
    const hasLink = Boolean(href);
    return (
        <article className={`relative bg-slate-700/50 p-5 ${hasLink ? "pb-14" : ""} rounded-xl border border-slate-700 cursor-pointer ease-out transition duration-200 hover:scale-[1.01] hover:shadow-md hover:shadow-slate-900/30`}>
            <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-base mt-2">{desc}</p>
                {tech ? (<p className="text-xs mt-3">{tech}</p>
                ) : null}
            </div>
            {hasLink ? (
            <Link
                href={href!} target="_blank"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1 text-sm text-slate-700 hover:text-emerald-700 bg-white rounded-lg px-2 py-1"
                >
                <span>View</span>
                <svg
                    className="w-7 h-7"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                    d="M11.25 4.5H15.5V8.75"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path
                    d="M8.75 11.25L15.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path
                    d="M11.5 9.5V14.5H4.5V7.5H9.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
            </Link>
        ) : null}
        </article>
    )
    
}