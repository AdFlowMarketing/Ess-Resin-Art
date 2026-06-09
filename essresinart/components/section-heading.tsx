type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const containerAlignment = align === "center" ? "mx-auto" : "";
  const descriptionAlignment = align === "center" ? "mx-auto" : "";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${containerAlignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p
            className={`max-w-xl text-pretty text-sm leading-7 text-[var(--color-muted)] md:text-base ${descriptionAlignment}`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
