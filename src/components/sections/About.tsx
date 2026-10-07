import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { resumeData } from "@/data/resumeData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Experience } from "./Experience";
import { Education } from "./Education";

const skills = Array.from(
  new Set(resumeData.skillGroups.flatMap(({ items }) => items)),
);
const skillRowMiddle = Math.ceil(skills.length / 2);
const skillRows = [
  skills.slice(0, skillRowMiddle),
  skills.slice(skillRowMiddle),
];

export function About({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="about" className="section-shell overflow-hidden">
      <SectionHeading
        eyebrow="01 / Profile"
        title={dictionary.sections.about}
      />
      <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* Image */}
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-130">
          <div className="absolute -inset-4 rounded-4xl bg-primary-500/10 blur-3xl" />

          <div className="relative -rotate-2 overflow-hidden rounded-4xl p-0.5 shadow-2xl transition-transform duration-500 hover:rotate-0">
            <div
              aria-hidden="true"
              className="absolute -inset-3/4 animate-border-spin bg-[conic-gradient(from_0deg,transparent_0deg,var(--color-primary-300)_70deg,var(--color-primary-600)_125deg,transparent_205deg)] motion-reduce:animate-none"
            />
            <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-zinc-100 dark:bg-zinc-900">
              <Image
                src="/images/about-me.jpeg"
                alt={resumeData.personal.name}
                width={700}
                height={850}
                sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) 28rem, 36vw"
                className="aspect-4/5 w-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0">
          <div className="space-y-4 text-base font-semibold leading-7 text-zinc-600 sm:space-y-5 sm:text-lg sm:leading-8 dark:text-zinc-300">
            {resumeData.personal.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="mb-5 text-lg font-bold text-zinc-950 dark:text-white">
              {dictionary.navbar.skills}
            </h3>

            <div className="relative overflow-hidden sm:space-y-3">
              {/* fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-(--background) to-transparent sm:w-16" />

              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-(--background) to-transparent sm:w-16" />

              {skillRows.map((row, index) => (
                <SkillMarquee
                  key={index}
                  skills={row}
                  direction={index === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Experience heading={dictionary.sections.experience} />
      <Education heading={dictionary.sections.education} />
    </section>
  );
}

function SkillMarquee({
  skills,
  direction,
}: {
  skills: readonly string[];
  direction: "left" | "right";
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max motion-reduce:transform-none motion-reduce:animate-none hover:[animation-play-state:paused] ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {[false, true].map((isDuplicate) => (
          <div
            key={String(isDuplicate)}
            aria-hidden={isDuplicate || undefined}
            className="flex shrink-0 gap-2 pr-2 sm:gap-3 sm:pr-3"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="whitespace-nowrap rounded-full border border-black/10 bg-black/4 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-primary-600 sm:px-4 sm:py-2 sm:text-sm dark:border-white/10 dark:bg-white/6 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
