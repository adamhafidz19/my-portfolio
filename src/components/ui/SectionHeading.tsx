export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  const words = title.trim().split(/\s+/);

  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={index === 1 ? "text-primary-600" : undefined}
          >
            {index > 0 && " "}
            {word}
          </span>
        ))}
      </h2>
    </div>
  );
}
