export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 max-w-3xl sm:mb-16">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-balance font-display text-4xl leading-none tracking-[-0.025em] text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h2>
    </div>
  );
}
