import Image from "next/image";
import { ArrowDown, FileText } from "lucide-react";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Button } from "@/components/ui/Button";
import { resumeData } from "@/data/resumeData";
import type { Dictionary } from "@/dictionaries";

export function PortfolioContent({ dictionary }: { dictionary: Dictionary }) {
  return (
    <>
      {/* <section className="content-shell flex min-h-[calc(100svh-4.5rem)] items-center py-16 sm:py-24"> */}
      <section className="content-shell flex items-center py-20 lg:py-24">
        <div className="w-full">
          {/* Main Hero Grid */}
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-1/2">
              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-600/20 bg-primary-50/80 px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-700 backdrop-blur-sm dark:bg-primary-950/50 dark:text-primary-300">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-500 opacity-60" />
                    <span className="relative size-2 rounded-full bg-primary-600" />
                  </span>
                  {/* {dictionary.ui.available} */}
                  Based in Kuala Lumpur, Malaysia
                </div>
                {/* <p className="eyebrow mb-5">
                  Hello, I&apos;m {resumeData.personal.name}
                </p> */}
                <h1 className="max-w-5xl text-balance text-[clamp(3.7rem,10vw,8.8rem)] font-black leading-[0.82] tracking-[-0.065em] text-zinc-950 dark:text-white">
                  Software{" "}
                  <span className="font-display font-semibold italic text-primary-600">
                    Engineer
                  </span>
                </h1>
                <p className="mt-8 max-w-2xl text-pretty font-medium text-lg leading-8 text-zinc-600 sm:text-xl dark:text-zinc-300">
                  {resumeData.personal.intro}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href="#projects">
                    {dictionary.navbar.projects}
                    <ArrowDown size={17} />
                  </Button>
                  <Button
                    href={resumeData.personal.resume}
                    target="_blank"
                    variant="secondary"
                  >
                    <FileText size={17} />
                    {dictionary.ui.downloadResume}
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex w-full justify-center lg:w-1/2">
              <div className="relative w-full max-w-md lg:ml-auto lg:max-w-lg">
                {/* Large soft magenta glow */}
                <div className="absolute -inset-6 rounded-[3rem] bg-linear-to-br from-primary-500/25 via-primary-500/20 to-pink-500/10 blur-3xl" />

                {/* Slight secondary glow closer to frame */}
                <div className="absolute -inset-2 0rounded-[2.6rem] bg-linear-to-br from-primary-400/30 via-primary-500/15 to-transparent blur-lg" />

                {/* Dark bezel */}
                <div className="relative aspect-2.5/3 w-full overflow-hidden rounded-4xl border-2 border-primary-400/50 bg-zinc-950 p-2 shadow-2xl">
                  {/* Inner screen */}
                  <div className="relative size-full overflow-hidden rounded-[1.6rem] border border-white/5 bg-zinc-900">
                    <Image
                      src="/images/profile-picture.jpeg"
                      alt={resumeData.personal.name}
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />

                    {/* Subtle glass / anti-glare overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-white/10" />

                    {/* Slight magenta reflection */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary-500/5 via-transparent to-primary-500/10" />
                  </div>

                  {/* Optional camera dot */}
                  <div className="absolute top-3 left-1/2 size-1.5 -translate-x-1/2 rounded-full border border-white/10 bg-black shadow-inner" />
                </div>
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
