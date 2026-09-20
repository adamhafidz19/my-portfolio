import { Award, BadgeCheck, Cpu, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { resumeData } from "@/data/resumeData";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Cpu, ShieldCheck, Award, BadgeCheck];

export function Activity({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="activity" className="border-y border-black/10 bg-zinc-950 text-white dark:border-white/10 dark:bg-white/[0.035]">
      <div className="section-shell">
        <div className="[&_h2]:text-white">
          <SectionHeading eyebrow="04 / Milestones" title={dictionary.sections.activity} />
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {resumeData.credentials.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.title} className="bg-zinc-950 p-7 sm:p-9 dark:bg-[#110d0f]">
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-2xl bg-primary-600/15 text-primary-400"><Icon size={21} /></div>
                  <span className="font-display text-3xl text-white/20">{item.year}</span>
                </div>
                <p className="mt-8 font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary-400">{item.type}</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-primary-300">{item.organization}</p>
                <p className="mt-5 text-sm leading-6 text-zinc-400">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
