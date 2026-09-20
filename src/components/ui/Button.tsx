import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-primary-600 text-white shadow-[0_12px_30px_rgba(194,24,91,0.22)] hover:-translate-y-0.5 hover:bg-primary-700"
      : "border border-black/15 bg-white/70 text-zinc-800 hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100";

  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold backdrop-blur-sm transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
