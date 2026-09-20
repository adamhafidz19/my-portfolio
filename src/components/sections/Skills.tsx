import { Braces, CloudCog, Database, PanelsTopLeft, Workflow } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { resumeData } from "@/data/resumeData";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [PanelsTopLeft, Database, CloudCog, Braces, Workflow];

export function Skills({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="skills" className="border-y border-black/10 bg-white/35 dark:border-white/10 dark:bg-black/10">
      <div className="section-shell">
        <SectionHeading eyebrow="02 / Capabilities" title={dictionary.sections.skills} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {resumeData.skillGroups.map((skill, index) => {
            const Icon = icons[index];
            return (
              <article key={skill.group} className={`glass-panel group p-6 transition hover:-translate-y-1 hover:shadow-glow lg:col-span-2 ${index < 2 ? "lg:col-span-3" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-11 place-items-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-950/50"><Icon size={21} /></div>
                  {/* <span className="font-display text-3xl text-primary-600/20">0{index + 1}</span> */}
                </div>
                <h3 className="mt-6 text-lg font-bold text-zinc-950 dark:text-white">{skill.group}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{skill.description}</p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {skill.items.map((item) => (
                    <div key={item} className="flex min-h-10 items-center rounded-xl border border-black/[0.07] bg-white/60 px-3 font-mono text-[0.66rem] font-semibold text-zinc-700 dark:border-white/[0.07] dark:bg-white/[0.035] dark:text-zinc-300">
                      <span className="mr-2 size-1.5 shrink-0 rounded-full bg-primary-600" />{item}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
