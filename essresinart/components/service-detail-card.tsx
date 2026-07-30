import Image from "next/image";
import Link from "next/link";

type ServiceDetailCardProps = {
  title: string;
  image: string;
  alt: string;
  description: string;
  bullets: readonly string[];
  href?: string;
};

export function ServiceDetailCard({
  title,
  image,
  alt,
  description,
  bullets,
  href,
}: ServiceDetailCardProps) {
  return (
    <article className="surface-card flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/9]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <h2 className="text-[1.4rem] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
          {title}
        </h2>

        <p className="text-[0.98rem] leading-7 text-[var(--color-muted)]">
          {description}
        </p>

        <ul className="space-y-3 text-[0.96rem] leading-6 text-[var(--color-muted)]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold text-[var(--color-accent)]"
              >
                +
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-2">
          {href ? (
            <Link href={href} className="button-secondary w-fit">
              Explore Service
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
