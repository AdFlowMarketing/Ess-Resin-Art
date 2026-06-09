type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="grid gap-4">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="surface-card group overflow-hidden px-6 py-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left marker:content-none">
            <span className="text-lg font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
              {faq.question}
            </span>
            <span className="shrink-0 text-2xl leading-none text-[var(--color-accent-strong)] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="pt-4 text-sm leading-7 text-[var(--color-muted)] md:text-base">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
