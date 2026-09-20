import { ArrowDownRight, CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { resumeData } from "@/data/resumeData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Projects({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="03 / Selected work" title={dictionary.sections.projects} />
        <p className="mb-12 max-w-sm text-sm leading-6 text-zinc-500 sm:mb-16 dark:text-zinc-400">A selection of government platforms where I contributed across interfaces, APIs, design systems, and quality.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {resumeData.projects.map((project, index) => (
          <article key={project.title} className={`glass-panel group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-9 ${project.featured ? "min-h-[30rem]" : "min-h-[25rem]"}`}>
            <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary-600/[0.07] blur-2xl transition group-hover:bg-primary-600/[0.13]" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-5">
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary-600">{project.category}</p>
                <span className="font-display text-4xl text-primary-600/20">0{index + 1}</span>
              </div>
              <div className="mt-12">
                <h3 className="font-display text-4xl leading-none text-zinc-950 sm:text-5xl dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm font-medium text-primary-700 dark:text-primary-300">{project.fullName}</p>
                <p className="mt-6 max-w-xl text-pretty leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p>
              </div>
              <div className="mt-8 border-t border-black/10 pt-6 dark:border-white/10">
                <p className="mb-4 flex items-center gap-2 font-mono text-[0.61rem] font-bold uppercase tracking-wider text-zinc-500"><ArrowDownRight size={14} className="text-primary-600" />{dictionary.ui.projectContribution}</p>
                <ul className="space-y-3">
                  {project.contributions.map((contribution) => <li key={contribution} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"><CheckCircle2 size={15} className="mt-1 shrink-0 text-primary-600" />{contribution}</li>)}
                </ul>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
