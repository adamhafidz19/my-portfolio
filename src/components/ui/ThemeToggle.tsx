"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => undefined;

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const dark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/60 text-zinc-700 transition hover:border-primary-600 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
      aria-label={label}
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
