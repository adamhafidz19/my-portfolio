"use client";

import Image from "next/image";
import { useState } from "react";
import {
  GraduationCap,
  ChevronDown,
  Building2,
  CalendarDays,
} from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { SectionHeading } from "../ui/SectionHeading";

type EducationItem = {
  logo?: string;
  institution: string;
  qualification: string;
  period: string;
  cgpa: string;
  details: readonly string[];
};

function EducationCard({ item }: { item: EducationItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = item.details && item.details.length > 0;

  return (
    <article className="relative mt-12 flex flex-col rounded-3xl border-2 border-black/10 bg-linear-to-r from-white via-primary-50/70 to-primary-100/60 p-6 shadow-lg transition-colors duration-300 hover:border-primary-600/30 hover:shadow-glow md:mt-0 dark:border-white/10 dark:from-primary-500/15 dark:via-[#150f12] dark:to-[#150f12] dark:hover:border-primary-500/30">
      {/* 
        Mobile Logo: Absolute, overlapping top-center. 
        Hidden on desktop (md:hidden)
      */}
      <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full md:rounded-2xl border-4 border-black/10 bg-white shadow-sm md:hidden dark:border-white/10 dark:bg-zinc-900">
        {item.logo ? (
          <Image
            src={item.logo}
            alt={`${item.institution} logo`}
            width={80}
            height={80}
            className="h-full w-full object-contain p-2"
          />
        ) : (
          <Building2 className="h-8 w-8 text-zinc-400" />
        )}
      </div>

      {/* Top Section Layout (Text + Desktop Logo) */}
      <div className="flex flex-col items-center pt-8 md:flex-row md:items-start md:justify-between md:gap-6 md:pt-0">
        {/* Text & Badges */}
        <div className="flex-1 text-center md:text-left w-full min-w-0">
          <h3
            className="truncate text-lg font-bold leading-snug tracking-tight text-zinc-950 dark:text-white"
            title={item.institution}
          >
            {item.institution}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {item.qualification}
          </p>

          {/* Badges Container */}
          <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
            {/* Standard/Dark Badge for Duration */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              <CalendarDays className="h-3.5 w-3.5 opacity-70" />
              {item.period}
            </div>

            {/* Primary/Colored Badge for Score */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary-600/25 bg-primary-600/10 px-3 py-1.5 text-xs font-medium text-primary-700 dark:border-primary-500/30 dark:bg-primary-500/10 dark:text-primary-300">
              <GraduationCap className="h-3.5 w-3.5" />
              {item.cgpa}
            </div>
          </div>
        </div>

        {/* 
          Desktop Logo: Inline, top-right. 
          Hidden on mobile (hidden md:flex)
        */}
        <div className="hidden h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white shadow md:flex dark:border-white/10 dark:bg-zinc-900">
          {item.logo ? (
            <Image
              src={item.logo}
              alt={`${item.institution} logo`}
              width={64}
              height={64}
              className="h-full w-full object-contain p-1.5"
            />
          ) : (
            <Building2 className="h-6 w-6 text-zinc-400" />
          )}
        </div>
      </div>

      <div className="mt-0 md:mt-auto">
        <hr className="my-6 border-black/10 dark:border-white/10" />

        {/* Action Bar / Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {hasDetails ? `${item.details.length} Details` : "No Details"}
          </span>

          <div className="flex gap-2">
            <button className="flex h-10 w-10"></button>

            {hasDetails && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-zinc-500 transition-colors hover:bg-black/10 hover:text-zinc-900 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <ChevronDown
                  className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
            )}
          </div>
        </div>

        {/* Expandable Details Description */}
        {hasDetails && (
          <div
            className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <ul className="space-y-3.5 text-sm leading-relaxed text-zinc-600 text-left dark:text-zinc-300">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* Glowing green dot style matching the screenshot */}
                    <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600 shadow-[0_0_8px_rgba(194,24,91,0.4)] dark:bg-primary-500" />
                    <span className="flex-1">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function Education({ heading }: { heading: string }) {
  return (
    <div className="mt-10 pt-12">
      <div className="flex items-center justify-center">
        <SectionHeading title={heading} />
      </div>

      <div className="grid grid-cols-1 items-start gap-y-16 gap-x-6 lg:grid-cols-2 md:gap-y-6 lg:gap-x-8">
        {resumeData.education.map((item, index) => (
          <EducationCard key={`${item.institution}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}
