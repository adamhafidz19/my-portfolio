import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export function ContactRow({
  icon,
  label,
  value,
  href,
  external = false,
  delay,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  delay: number;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      style={{ animationDelay: `${delay}ms` }}
      className="group flex min-w-0 animate-contact-card-in items-center gap-3 rounded-2xl border border-transparent px-2 py-3 transition-all duration-200 hover:border-primary-500/20 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 sm:gap-4 sm:px-3 dark:hover:border-primary-400/15 dark:hover:bg-white/4"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary-600/15 bg-primary-50/80 text-primary-600 transition duration-200 group-hover:scale-105 group-hover:border-primary-500/40 group-hover:shadow-[0_0_20px_-6px_rgba(194,24,91,0.55)] dark:border-primary-300/20 dark:bg-primary-500/10 dark:text-primary-300">
        {icon}
      </span>

      <span className="min-w-0 flex-1 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        <span className="block text-xs text-zinc-500">{label}</span>
        <span className="mt-1 block break-all text-sm text-zinc-800 transition group-hover:text-primary-600 sm:text-[15px] dark:text-zinc-200 dark:group-hover:text-primary-300">
          {value}
        </span>
      </span>

      <ChevronRight
        size={17}
        className="shrink-0 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600 dark:text-zinc-600 dark:group-hover:text-primary-300"
      />
    </a>
  );
}
