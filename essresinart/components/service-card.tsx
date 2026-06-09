import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

export function ServiceCard({
  title,
  description,
  image,
  alt,
  href,
}: ServiceCardProps) {
  return (
    <article className="group relative isolate overflow-hidden rounded-[var(--radius-card)] border border-white/55 bg-[var(--color-surface-strong)] shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/5]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08)_15%,rgba(17,17,17,0.82)_100%)]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 text-white">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
          <p className="max-w-sm text-sm leading-6 text-white/82">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex w-fit items-center rounded-full border border-black bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)] hover:border-[var(--color-accent-strong)]"
        >
          {title}
        </Link>
      </div>
    </article>
  );
}
