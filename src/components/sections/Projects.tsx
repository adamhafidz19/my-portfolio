"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import type { Dictionary } from "@/dictionaries";
import { resumeData } from "@/data/resumeData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";

export function Projects({ dictionary }: { dictionary: Dictionary }) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [activePage, setActivePage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(resumeData.projects.length / itemsPerView);
  const isFirst = activePage === 0;
  const isLast = activePage >= totalPages - 1;

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;

    if (clientWidth === 0) return;

    const currentPage = Math.min(
      Math.round(scrollLeft / clientWidth),
      Math.max(totalPages - 1, 0),
    );

    if (currentPage !== activePage) {
      setActivePage(currentPage);
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (!carouselRef.current) return;
    const clamped = Math.max(0, Math.min(pageIndex, totalPages - 1));
    const { clientWidth } = carouselRef.current;

    carouselRef.current.scrollTo({
      left: clamped * clientWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (!isLast) scrollToPage(activePage + 1);
  };

  const handlePrev = () => {
    if (!isFirst) scrollToPage(activePage - 1);
  };

  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col justify-between mb-8">
        <SectionHeading
          eyebrow="03 / Selected work"
          title={dictionary.sections.projects}
        />
        <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
          A showcase of my most notable work and core contributions
        </p>
      </div>

      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {resumeData.projects.map((project, index) => (
          <article
            key={index}
            className="group relative isolate flex flex-col snap-start shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-3xl bg-linear-to-b from-white via-primary-50/70 to-primary-100/60 transition-colors duration-300 dark:from-primary-500/15 dark:via-[#150f12] dark:to-[#150f12]"
          >
            <div className="pointer-events-none absolute inset-0 z-20 rounded-3xl ring-2 ring-inset ring-black/10 transition-all duration-300 group-hover:ring-primary-600/50 dark:ring-white/10 dark:group-hover:ring-primary-500/50" />

            <div className="p-3 pb-0 z-10">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800 mask-[linear-gradient(white,white)] transform-[translateZ(0)]">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />

                <div className="absolute inset-0 bg-linear-to-br from-zinc-200 via-primary-100/60 to-zinc-300 dark:from-zinc-700 dark:to-zinc-900" />

                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                )}

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent opacity-80 z-10" />

                <span className="absolute top-3 left-3 z-20 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 grow p-6 sm:p-7 relative z-10">
              <div className="font-display text-2xl font-bold leading-tight text-zinc-950 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-500">
                {project.title}
              </div>

              <p className="text-sm mb-3 text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-extrabold">
                {project.fullName}
              </p>

              <p
                className="mb-6 text-sm font-normal leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3 min-h-15"
                title={project.description}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                  >
                    <span className="mr-1.5 size-1.5 shrink-0 rounded-full bg-primary-600" />
                    {tech}
                  </span>
                ))}
              </div>

              {(project.github || project.liveUrl) && (
                <div className="mt-auto flex items-center justify-end gap-2.5 pt-6">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-black/10 bg-black/4 px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-transparent hover:bg-primary-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-primary-500 dark:hover:text-white"
                    >
                      <ExternalLink size={14} /> Live
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-black/10 bg-black/4 px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-transparent hover:bg-primary-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-primary-500 dark:hover:text-white"
                    >
                      <Github size={14} /> Code
                    </Link>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            aria-label="Previous projects"
            aria-disabled={isFirst}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-500 shadow-sm transition-colors hover:bg-primary-600 hover:text-white hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:bg-white disabled:hover:text-zinc-500 disabled:hover:border-black/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-primary-500 dark:hover:text-white dark:disabled:hover:bg-white/5 dark:disabled:hover:text-zinc-400 dark:disabled:hover:border-white/10"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                aria-label={`Go to page ${index + 1}`}
                aria-current={activePage === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                  activePage === index
                    ? "w-6 bg-primary-600 dark:bg-primary-500"
                    : "w-1.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isLast}
            aria-label="Next projects"
            aria-disabled={isLast}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-500 shadow-sm transition-colors hover:bg-primary-600 hover:text-white hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:bg-white disabled:hover:text-zinc-500 disabled:hover:border-black/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-primary-500 dark:hover:text-white dark:disabled:hover:bg-white/5 dark:disabled:hover:text-zinc-400 dark:disabled:hover:border-white/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
