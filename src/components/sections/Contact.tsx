import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { resumeData } from "@/data/resumeData";
import { Button } from "@/components/ui/Button";

export function Contact({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="contact" className="section-shell">
      <div className="glass-panel relative overflow-hidden px-6 py-14 shadow-glow sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="absolute -right-24 -top-32 size-96 rounded-full bg-primary-600/10 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 size-64 rounded-full bg-primary-600/[0.06] blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_20rem] lg:items-end">
          <div>
            <p className="eyebrow mb-5">05 / Contact</p>
            <h2 className="max-w-3xl text-balance font-display text-5xl leading-[0.95] tracking-[-0.03em] text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">{dictionary.sections.contact}</h2>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">I&apos;m interested in frontend roles where accessible interfaces, sound engineering, and meaningful outcomes matter. Let&apos;s talk about what you&apos;re building.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={`mailto:${resumeData.personal.email}`}><Mail size={17} />{dictionary.ui.getInTouch}<ArrowUpRight size={17} /></Button>
              <Button href={resumeData.personal.resume} target="_blank" variant="secondary"><FileText size={17} />{dictionary.ui.downloadResume}</Button>
            </div>
          </div>
          <div className="space-y-3">
            <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/50 p-4 transition hover:border-primary-600 dark:border-white/10 dark:bg-white/[0.035]"><Mail size={18} className="shrink-0 text-primary-600" /><span className="min-w-0 break-all text-sm">{resumeData.personal.email}</span></a>
            <a href={`tel:${resumeData.personal.phoneHref}`} className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/50 p-4 transition hover:border-primary-600 dark:border-white/10 dark:bg-white/[0.035]"><Phone size={18} className="shrink-0 text-primary-600" /><span className="text-sm">{resumeData.personal.phone}</span></a>
            <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/[0.035]"><MapPin size={18} className="shrink-0 text-primary-600" /><span className="text-sm">{resumeData.personal.location}</span></div>
            <div className="flex gap-3 pt-2">
              <a href={resumeData.personal.socials.github} target="_blank" rel="noreferrer" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-black/10 text-xs font-bold transition hover:border-primary-600 hover:text-primary-600 dark:border-white/10"><Github size={16} />GitHub</a>
              <a href={resumeData.personal.socials.linkedin} target="_blank" rel="noreferrer" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-black/10 text-xs font-bold transition hover:border-primary-600 hover:text-primary-600 dark:border-white/10"><Linkedin size={16} />LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
