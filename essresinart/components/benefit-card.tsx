import {
  BrushIcon,
  LayersIcon,
  ShieldIcon,
  SparklesIcon,
} from "./icons";

const icons = [LayersIcon, ShieldIcon, BrushIcon, SparklesIcon];

type BenefitCardProps = {
  title: string;
  description: string;
  index: number;
};

export function BenefitCard({
  title,
  description,
  index,
}: BenefitCardProps) {
  const Icon = icons[index % icons.length];

  return (
    <article className="surface-card flex h-full flex-col gap-4 p-6">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-3 text-center">
        <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
          {title}
        </h3>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>
      </div>
    </article>
  );
}
