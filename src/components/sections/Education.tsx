import { Award, GraduationCap } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function Education({ heading }: { heading: string }) {
  return (
    <div className="mt-20 border-t border-black/10 pt-12 dark:border-white/10">
      <h3 className="mb-10 font-display text-3xl text-zinc-950 sm:text-4xl dark:text-white">{heading}</h3>
      <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        {resumeData.education.map((item, index) => (
          <article key={item.institution} className={`glass-panel relative overflow-hidden p-7 sm:p-8 ${index === 0 ? "shadow-glow" : ""}`}>
            <div className="absolute right-6 top-6 font-display text-5xl text-primary-600/10">0{index + 1}</div>
            <GraduationCap size={24} className="text-primary-600" />
            <p className="mt-8 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-primary-600">{item.period}</p>
            <h4 className="mt-3 max-w-xl text-xl font-bold leading-snug text-zinc-950 dark:text-white">{item.qualification}</h4>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{item.institution}</p>
            <div className="mt-6 inline-flex items-baseline gap-2 rounded-xl bg-primary-50 px-4 py-2 dark:bg-primary-950/40">
              <span className="font-display text-2xl text-primary-700 dark:text-primary-300">{item.cgpa}</span>
              <span className="font-mono text-[0.58rem] uppercase tracking-wider text-primary-600">CGPA</span>
            </div>
            {item.achievements.length > 0 && (
              <ul className="mt-6 space-y-3">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300"><Award size={16} className="mt-1 shrink-0 text-primary-600" />{achievement}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
