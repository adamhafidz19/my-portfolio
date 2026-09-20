import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 font-mono text-[0.68rem] font-semibold text-zinc-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
      {children}
    </span>
  );
}
