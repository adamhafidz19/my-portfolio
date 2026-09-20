"use client";

import { FileText, Menu, X } from "lucide-react";
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

export function Navbar({ locale, dictionary, homeHref = `/${locale}` }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const links = [
    ["about", dictionary.navbar.about],
    ["skills", dictionary.navbar.skills],
    ["projects", dictionary.navbar.projects],
    ["activity", dictionary.navbar.activity],
    ["contact", dictionary.navbar.contact],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fbf9fa]/75 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b080a]/75">
      <nav className="content-shell flex h-[4.5rem] items-center justify-between" aria-label="Primary navigation">
        <Link href={homeHref} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-full bg-primary-600 font-mono text-xs font-bold text-white shadow-glow">
            {resumeData.personal.initials}
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold tracking-tight">{resumeData.personal.name}</span>
            <span className="block font-mono text-[0.58rem] uppercase tracking-widest text-zinc-500">Frontend engineer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([id, label]) => (
            <Link
              key={id}
              href={`${homeHref}#${id}`}
              className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-zinc-600 transition hover:text-primary-600 dark:text-zinc-300"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={resumeData.personal.resume} target="_blank" className="hidden h-10 items-center gap-2 rounded-full bg-zinc-950 px-4 text-xs font-bold text-white transition hover:bg-primary-600 sm:flex dark:bg-white dark:text-zinc-950 dark:hover:bg-primary-500 dark:hover:text-white">
            <FileText size={15} /> {dictionary.ui.downloadResume}
          </a>
          <LangSwitch locale={locale} label={dictionary.ui.switchLanguage} />
          <ThemeToggle label={dictionary.ui.toggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/60 lg:hidden dark:border-white/10 dark:bg-white/5"
            aria-expanded={open}
            aria-label={open ? dictionary.navbar.close : dictionary.navbar.menu}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
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
              className="block rounded-xl px-3 py-3 text-sm font-medium hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-950/40 dark:hover:text-primary-300"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
