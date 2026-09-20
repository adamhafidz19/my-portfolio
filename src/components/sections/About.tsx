import { Blocks, Gauge, Landmark } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { resumeData } from "@/data/resumeData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Experience } from "./Experience";
import { Education } from "./Education";

const principles = [
  { icon: Landmark, title: "Public impact", copy: "Digital services designed for clarity, inclusion, and real public needs." },
  { icon: Blocks, title: "System thinking", copy: "Reusable interfaces aligned with design standards and business requirements." },
  { icon: Gauge, title: "Built to perform", copy: "Maintainable frontend foundations with accessibility and reliability in mind." },
];

export function About({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow="01 / Profile" title={dictionary.sections.about} />
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <p className="font-display text-3xl leading-tight text-zinc-950 sm:text-4xl dark:text-white">
          From <span className="italic text-primary-600">computational physics</span> to public digital products, I bring analytical depth to frontend craft.
        </p>
        <div className="space-y-5 text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-300">
          {resumeData.personal.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 md:grid-cols-3 dark:border-white/10 dark:bg-white/10">
        {principles.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="bg-[var(--surface-strong)] p-6 sm:p-7">
            <Icon size={21} className="text-primary-600" />
            <h3 className="mt-5 font-bold text-zinc-950 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{copy}</p>
          </article>
        ))}
      </div>
      <Experience heading={dictionary.sections.experience} />
      <Education heading={dictionary.sections.education} />
    </section>
  );
}
