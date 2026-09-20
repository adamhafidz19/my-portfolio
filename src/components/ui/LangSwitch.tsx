"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/dictionaries";

export function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const targetLocale: Locale = locale === "en" ? "ms" : "en";
  const targetPath =
    targetLocale === "ms"
      ? pathname === "/"
        ? "/ms/"
        : pathname.replace(/^\/en(?=\/|$)/, "/ms")
      : pathname.replace(/^\/ms(?=\/|$)/, "") || "/";

  return (
    <Link
      href={targetPath || `/${targetLocale}`}
      className="flex h-10 items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 text-xs font-bold uppercase tracking-widest text-zinc-700 transition hover:border-primary-600 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
      aria-label={label}
    >
      <Languages size={16} />
      {targetLocale}
    </Link>
  );
}
