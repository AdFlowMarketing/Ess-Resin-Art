import Image from "next/image";
import Link from "next/link";

type WorkProjectCardProps = {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  location: string;
  image: string;
  alt: string;
  description: string;
};

export function WorkProjectCard({
  id,
  title,
  category,
  categoryId,
  location,
  image,
  alt,
  description,
}: WorkProjectCardProps) {
  return (
    <article
      id={id}
      className="surface-card overflow-hidden"
    >
      <div className="relative aspect-[16/12]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <Link
            href={`/our-work#${categoryId}`}
            className="rounded-full border border-black/8 bg-[var(--color-surface-subtle)] px-3 py-1 font-medium transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
          >
            {category}
          </Link>
          <span>{location}</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
            {title}
          </h2>
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            {description}
          </p>
        </div>

        <Link href="/contact" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)] transition hover:text-[var(--color-ink)]">
          View Details
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
