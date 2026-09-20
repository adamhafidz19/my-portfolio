import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/35 backdrop-blur-sm dark:border-white/10 dark:bg-black/10">
      <div className="content-shell flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-xl text-zinc-900 dark:text-white">{resumeData.personal.fullName}</p>
          <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-zinc-500">© {new Date().getFullYear()} · Built for the open web</p>
        </div>
        <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
          <a href={`mailto:${resumeData.personal.email}`} aria-label="Email" className="grid size-10 place-items-center rounded-full border border-black/10 transition hover:border-primary-600 hover:text-primary-600 dark:border-white/10"><Mail size={17} /></a>
          <a href={resumeData.personal.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded-full border border-black/10 transition hover:border-primary-600 hover:text-primary-600 dark:border-white/10">
            <Github size={17} />
          </a>
          <a href={resumeData.personal.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full border border-black/10 transition hover:border-primary-600 hover:text-primary-600 dark:border-white/10">
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
