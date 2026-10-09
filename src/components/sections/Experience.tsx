import Image from "next/image";
import { Briefcase, Building2, MapPin } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience({ heading }: { heading: string }) {
  return (
    <div className="mt-10 pt-12">
      <div className="flex items-center justify-center">
        <SectionHeading title={heading} />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Central rail (desktop) */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-1/2 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-primary-500 to-transparent sm:block dark:via-primary-600"
        />
        {/* Left rail (mobile) */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-5 w-px bg-linear-to-b from-transparent via-primary-500 to-transparent sm:hidden dark:via-primary-600"
        />

        <ol className="flex flex-col gap-6 sm:gap-12">
          {resumeData.experience.map((item, index) => {
            const isEven = index % 2 === 0;
            // const isPresent = item.period.toLowerCase().includes("present");

            return (
              <li
                key={`${item.company}-${item.role}-${item.period}`}
                className={`group relative flex w-full items-start ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline node — desktop */}
                <div
                  aria-hidden="true"
                  className="absolute top-8 left-1/2 hidden h-8 w-8 -translate-x-1/2 items-center justify-center sm:flex"
                >
                  <div className="size-3 rounded-full bg-primary-600 ring-4 ring-white transition-all duration-300 group-hover:scale-125 group-hover:bg-primary-500 group-hover:ring-primary-600/20 dark:ring-[#0b080a] dark:group-hover:ring-primary-600/20" />
                </div>

                {/* Timeline node — mobile */}
                <div
                  aria-hidden="true"
                  className="absolute top-8 left-5 flex h-8 w-8 -translate-x-1/2 items-center justify-center sm:hidden"
                >
                  <div className="size-3 rounded-full bg-primary-600 ring-4 ring-white transition-all duration-300 group-hover:scale-125 group-hover:bg-primary-500 group-hover:ring-primary-600/20 dark:ring-[#0b080a] dark:group-hover:ring-primary-600/20" />
                </div>

                {/* Spacer (forces alternating layout on desktop) */}
                <div aria-hidden="true" className="hidden w-1/2 sm:block" />

                {/* Card column */}
                <div
                  className={`relative w-full pl-11 sm:w-1/2 sm:pl-0 ${
                    isEven ? "sm:pl-14" : "sm:pr-14"
                  }`}
                >
                  {/* Dotted connector — desktop */}
                  <div
                    aria-hidden="true"
                    className={`absolute -z-10 top-12 hidden w-14 -translate-y-1/2 border-t-2 border-dotted border-zinc-300 transition-colors duration-300 group-hover:border-primary-500/60 sm:block dark:border-zinc-700 ${
                      isEven ? "left-0" : "right-0"
                    }`}
                  />
                  {/* Dotted connector — mobile */}
                  <div
                    aria-hidden="true"
                    className="absolute -z-10 top-12 left-5 w-8 -translate-y-1/2 border-t-2 border-dotted border-zinc-300 transition-colors duration-300 group-hover:border-primary-500/60 sm:hidden dark:border-zinc-700"
                  />

                  <article className="glass-panel relative w-full p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-6">
                    <div className="flex sm:flex-col-reverse md:flex-row sm:items-center md:items-start justify-between gap-4 ">
                      <div className="min-w-0">
                        <div className="mb-1 flex flex-wrap items-center sm:justify-center md:justify-start gap-2 ">
                          <time className="flex font-mono sm:text-center md:text-left text-xs font-bold tracking-[0.22em] text-zinc-500 uppercase dark:text-zinc-400">
                            {item.period}
                          </time>
                          {/* {isPresent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-600/25 bg-primary-600/10 px-2 py-0.5 font-mono text-[0.6rem] font-bold tracking-widest text-primary-700 uppercase dark:text-primary-300">
                              <span className="size-1.5 rounded-full bg-primary-600" />
                              Present
                            </span>
                          )} */}
                        </div>
                        <h4 className="text-xl leading-tight font-bold text-zinc-950 sm:text-xl dark:text-white sm:text-center md:text-left">
                          {item.role}
                        </h4>
                        <p className="mt-1 text-sm font-semibold text-primary-600 dark:text-primary-400 sm:text-center md:text-left">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white p-1.5 shadow-sm sm:size-14 dark:border-white/10 dark:bg-zinc-900">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={`${item.company} logo`}
                            width={56}
                            height={56}
                            loading="lazy"
                            className="h-full w-full object-contain"
                            unoptimized
                          />
                        ) : (
                          <Building2 className="size-6 text-zinc-400" />
                        )}
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center justify-start gap-x-2 gap-y-1.5 font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase
                          size={13}
                          className="text-primary-600 shrink-0"
                        />
                        {item.type} · {item.setup}
                      </span>
                      {item.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin
                            size={13}
                            className="text-primary-600 shrink-0"
                          />
                          {item.location}
                        </span>
                      )}
                    </div>

                    {/* <p className="mt-3 text-sm leading-6 text-pretty text-zinc-600 dark:text-zinc-300">
                      {item.summary}
                    </p> */}

                    {/* <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div> */}

                    {/* {item.highlights.length > 0 && (
                      <details className="group/details mt-4 border-t border-black/10 pt-4 dark:border-white/10">
                        <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-zinc-700 transition-colors hover:text-primary-600 dark:text-zinc-300 dark:hover:text-primary-400 [&::-webkit-details-marker]:hidden">
                          <ChevronDown
                            size={16}
                            className="shrink-0 text-primary-600 transition-transform duration-300 group-open/details:rotate-180"
                          />
                          Key contributions ({item.highlights.length})
                        </summary>
                        <ul className="mt-3 space-y-2.5">
                          {item.highlights.map((point) => (
                            <li
                              key={point}
                              className="flex gap-2.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                            >
                              <Check
                                size={15}
                                className="mt-1 shrink-0 text-primary-600"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )} */}
                  </article>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
