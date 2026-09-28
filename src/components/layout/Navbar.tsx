"use client";

import { FileText, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Dictionary, Locale } from "@/dictionaries";
import { resumeData } from "@/data/resumeData";
import { LangSwitch } from "@/components/ui/LangSwitch";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary;
  homeHref?: string;
};

export function Navbar({
  locale,
  dictionary,
  homeHref = `/${locale}`,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const links = [
    ["about", dictionary.navbar.about],
    ["skills", dictionary.navbar.skills],
    ["projects", dictionary.navbar.projects],
    ["contact", dictionary.navbar.contact],
  ];

  return (
    <header className="sticky top-0 z-40 border-b-2 border-black/5 bg-[#fbf9fa]/75 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b080a]/75">
      <nav
        className="content-shell flex h-18 items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link
          href={homeHref}
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="relative inline-flex size-10">
            {/* Neon glow */}
            <div className="absolute -inset-px rounded-xl bg-linear-to-br from-pink-400 via-fuchsia-900 to-primary-700 opacity-80" />

            {/* Bright neon border */}
            <div className="relative size-full rounded-xl bg-linear-to-br from-pink-300 via-fuchsia-900 to-primary-700 p-[1.5px] shadow-[0_0_10px_rgba(236,72,153,0.8),0_0_20px_rgba(217,70,239,0.45)]">
              <Image
                src="/logo.jpg"
                alt={`${resumeData.personal.name} logo`}
                width={40}
                height={40}
                priority
                unoptimized
                className="size-full rounded-[0.65rem] object-cover"
              />
            </div>
          </div>
          {/* <Image
            src="/logo.jpg"
            alt={`${resumeData.personal.name} logo`}
            width={40}
            height={40}
            priority
            unoptimized
            className="size-10 rounded-xl object-cover border border-primary-600/40 shadow-2xl"
          /> */}
          <span className="hidden sm:block">
            <span className="block text-lg font-bold tracking-tight">
              {resumeData.personal.name}
            </span>
            <span className="block font-mono text-xs uppercase tracking-widest text-zinc-500">
              Software engineer
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-12 lg:flex">
          {links.map(([id, label]) => (
            <Link
              key={id}
              href={`${homeHref}#${id}`}
              className="font-mono text-sm font-extrabold uppercase tracking-wider text-zinc-600 transition hover:text-primary-600 dark:text-zinc-300"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={resumeData.personal.resume}
            target="_blank"
            className="hidden h-10 items-center gap-1.5 rounded-xl bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-primary-600 sm:flex dark:bg-white dark:text-zinc-950 dark:hover:bg-primary-500 dark:hover:text-white"
          >
            <FileText size={16} /> {dictionary.ui.downloadResume}
          </a>
          <LangSwitch locale={locale} label={dictionary.ui.switchLanguage} />
          <ThemeToggle label={dictionary.ui.toggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/60 lg:hidden dark:border-white/10 dark:bg-white/5 transition hover:border-primary-600 hover:text-primary-600"
            aria-expanded={open}
            aria-label={open ? dictionary.navbar.close : dictionary.navbar.menu}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="content-shell border-t border-black/5 py-3 lg:hidden dark:border-white/10">
          {links.map(([id, label]) => (
            <Link
              key={id}
              href={`${homeHref}#${id}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm font-medium hover:bg-primary-100 hover:text-primary-700 dark:hover:bg-primary-950 dark:hover:text-primary-300"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
