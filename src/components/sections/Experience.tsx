import { Check, Code2 } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { Tag } from "@/components/ui/Tag";

export function Experience({ heading }: { heading: string }) {
  return (
    <div className="mt-20 border-t border-black/10 pt-12 dark:border-white/10">
      <div className="mb-10 flex items-center justify-between gap-5">
        <h3 className="font-display text-3xl text-zinc-950 sm:text-4xl dark:text-white">{heading}</h3>
        <Code2 className="text-primary-600" size={24} />
      </div>
      <div className="space-y-5">
        {resumeData.experience.map((item, index) => (
          <article key={`${item.company}-${item.role}`} className="glass-panel group grid overflow-hidden lg:grid-cols-[15rem_1fr]">
            <div className="border-b border-black/10 bg-white/35 p-6 lg:border-b-0 lg:border-r lg:p-8 dark:border-white/10 dark:bg-white/[0.025]">
              <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.22em] text-primary-600">0{index + 1} / {item.type}</p>
              <h4 className="mt-6 text-xl font-bold text-zinc-950 dark:text-white">{item.company}</h4>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.role}</p>
              <p className="mt-6 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-zinc-500">{item.period}</p>
            </div>
            <div className="p-6 lg:p-8">
              <p className="max-w-3xl text-pretty text-lg leading-8 text-zinc-700 dark:text-zinc-200">{item.summary}</p>
              <ul className="mt-6 grid gap-3 xl:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    <Check size={16} className="mt-1 shrink-0 text-primary-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">{item.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
