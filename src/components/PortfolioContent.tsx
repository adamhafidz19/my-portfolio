import { ArrowDown, FileText } from "lucide-react";
import { About } from "@/components/sections/About";
import { Activity } from "@/components/sections/Activity";
import { Contact } from "@/components/sections/Contact";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Button } from "@/components/ui/Button";
import { resumeData } from "@/data/resumeData";
import type { Dictionary } from "@/dictionaries";

export function PortfolioContent({ dictionary }: { dictionary: Dictionary }) {
  return (
    <>
      <section className="content-shell flex min-h-[calc(100svh-4.5rem)] items-center py-16 sm:py-24">
        <div className="w-full">
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_21rem]">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-600/20 bg-primary-50/80 px-3.5 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-primary-700 backdrop-blur-sm dark:bg-primary-950/50 dark:text-primary-300">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-500 opacity-60" />
                  <span className="relative size-2 rounded-full bg-primary-600" />
                </span>
                {dictionary.ui.available}
              </div>
              <p className="eyebrow mb-5">Hello, I&apos;m {resumeData.personal.name}</p>
              <h1 className="max-w-5xl text-balance text-[clamp(3.7rem,10vw,8.8rem)] font-black leading-[0.82] tracking-[-0.065em] text-zinc-950 dark:text-white">
                Software <span className="font-display font-normal italic text-primary-600">Engineer</span>
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-600 sm:text-xl dark:text-zinc-300">
                {resumeData.personal.intro}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#projects">
                  {dictionary.navbar.projects}
                  <ArrowDown size={17} />
                </Button>
                <Button href={resumeData.personal.resume} target="_blank" variant="secondary">
                  <FileText size={17} />
                  {dictionary.ui.downloadResume}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About dictionary={dictionary} />
      <Skills dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      {/* <Activity dictionary={dictionary} /> */}
      <Contact dictionary={dictionary} />
    </>
  );
}
