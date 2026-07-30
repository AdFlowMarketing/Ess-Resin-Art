import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Venetian Plaster in Bristol | ${siteConfig.name}`,
  description:
    "Bespoke Venetian plaster finishes in Bristol by EssResinArt. Discover polished decorative wall surfaces for feature rooms, kitchens, reception areas, and refined modern interiors.",
  alternates: {
    canonical: "/services/venetian-plaster",
  },
  openGraph: {
    title: `Venetian Plaster in Bristol | ${siteConfig.name}`,
    description:
      "Bespoke Venetian plaster finishes in Bristol by EssResinArt. Discover polished decorative wall surfaces for feature rooms, kitchens, reception areas, and refined modern interiors.",
    url: "/services/venetian-plaster",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Substrate Preparation",
    description:
      "Preparing the substrate surface is perfectly flat and stable, treated with specialist primers for optimal adhesion.",
  },
  {
    number: "02",
    title: "Base Coat Application",
    description:
      "The initial layer of plaster establishes the canvas, creating the foundation that influences the eventual finish.",
  },
  {
    number: "03",
    title: "Decorative Layering",
    description:
      "Multiple micro-layers are applied to build texture and depth, manipulating the plaster to create the desired movement.",
  },
  {
    number: "04",
    title: "Burnishing & Waxing",
    description:
      "The surface is compressed with a trowel for shine and sealed with natural waxes for protection and lustre.",
  },
] as const;

const finishCards = [
  {
    title: "Grasello",
    description:
      "A classic lime-based plaster offering a natural stone aesthetic with subtle movement.",
    image: "/images/grassello-stucco-wall-mineral-plasters-finishes.jpg",
    alt: "Grasello-style Venetian plaster finish with natural movement",
  },
  {
    title: "Marmorino Metallic",
    description:
      "The polished, luxury plaster finish with luminous depth and artisan reflectivity.",
    image: "/images/marmorino-metallic-bronze-stucco.jpg",
    alt: "Marmorino Metallic Venetian plaster finish in Bristol",
  },
  {
    title: "Polished Plaster",
    description:
      "Smooth, sophisticated decorative finishes with a contemporary sheen.",
    image: "/images/polished-plaster.jpg",
    alt: "Smooth polished plaster wall finish by EssResinArt",
  },
  {
    title: "Concrete Textured Stucco ",
    description:
      "Raw, architectural surfaces with handcrafted movement and tactile character.",
    image: "/images/concrete-stucco.jpeg",
    alt: "Textured Venetian plaster surface with artisan detailing",
  },
] as const;

const recentProjects = [
  {
    title: "Clifton Townhouse",
    category: "Marmorino feature walls",
    description:
      "A layered decorative wall treatment designed to soften and elevate a refined Bristol interior.",
    type: "image" as const,
    image: "/images/concrete-stiuk-wall-Bristol.jpeg",
    alt: "Venetian plaster feature wall in a Clifton townhouse",
  },
  {
    title: "Redland Modern Kitchen",
    category: "Stucco Veneziano gloss",
    description:
      "A smooth polished plaster finish selected for a light-reflective kitchen surface with quiet luxury.",
    type: "image" as const,
    image: "/images/stiuk-wall-Bristol.JPG",
    alt: "Polished Venetian plaster finish in a modern kitchen",
  },
  {
    title: "Harbourside Workspace",
    category: "Textured structural columns",
    description:
      "Decorative plasterwork specified to add depth and material warmth to a pared-back commercial interior.",
    type: "image" as const,
    image: "/images/grassello-stucco-wall-mineral-plasters-finishes.jpg",
    alt: "Textured Venetian plaster finish for a Bristol workspace interior",
  },
] as const;

function FinishSwatch({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="surface-card overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_15%,rgba(17,17,17,0.64)_100%)]" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
          {title}
        </h3>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>
      </div>
    </article>
  );
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Venetian Plaster Bristol",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
  areaServed: siteConfig.serviceArea,
  serviceType: "Venetian plaster installation",
  description:
    "Bespoke Venetian plaster finishes for walls, kitchens, feature rooms, and refined architectural interiors in Bristol.",
  url: `${siteConfig.siteUrl}/services/venetian-plaster`,
};

export default function VenetianPlasterPage() {
  return (
    <>
      <SiteHeader currentPath="/services" />
      <main id="main-content" className="bg-[var(--color-surface)]">
        <section className="relative isolate overflow-hidden border-b border-black/6">
          <Image
            src="/images/stiuk-wall-Bristol.JPG"
            alt="Venetian plaster wall finish by EssResinArt"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(40,35,30,0.72)_0%,rgba(40,35,30,0.54)_36%,rgba(40,35,30,0.18)_100%)]" />

          <div className="shell relative flex min-h-[34rem] items-center py-20">
            <div className="max-w-2xl space-y-6 text-white">
              <p className="eyebrow text-[var(--color-accent-soft)]">
                Surface artisan
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] sm:text-5xl md:text-6xl">
                Artisan Venetian Plaster Specialists in Bristol
              </h1>
              <p className="max-w-xl text-pretty text-sm leading-7 text-white/78 md:text-base">
                Bespoke, hand-applied decorative finishes that transform
                feature walls, kitchens, and refined architectural interiors.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="button-primary">
                  Request a Quote
                </Link>
                <Link
                  href="/our-work"
                  className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-[var(--color-ink)]"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="space-y-5">
              <p className="eyebrow">The material</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                Material Excellence
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-muted)] md:text-base">
                <p>
                  Venetian plaster is prized for its natural composition,
                  tactile depth, and ability to bring warmth and refinement to
                  contemporary interiors. Traditional lime-based blends create a
                  breathable decorative finish with subtle movement that feels
                  premium up close.
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                  What makes it special?
                </h2>
                <p className="text-sm leading-7 text-[var(--color-muted)] md:text-base">
                  From soft matte stone effects to polished reflective surfaces,
                  Venetian plaster offers a hand-finished look that standard
                  paint or cladding cannot replicate. It is ideal for feature
                  walls, kitchens, reception spaces, and interiors that need
                  material richness without visual clutter.
                </p>
              </div>
            </div>

            <div className="surface-card relative overflow-hidden p-4">
              <div className="relative aspect-[1/1] overflow-hidden rounded-[calc(var(--radius-card)-0.5rem)]">
                <Image
                  src="/images/grassello-stucco-wall-mineral-plasters-finishes.jpg"
                  alt="Close view of Venetian plaster wall finish in Bristol"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="surface-card absolute bottom-8 left-8 max-w-xs p-5">
                <p className="eyebrow">What clients value</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  Depth, movement, breathable lime-rich finishes, and a bespoke
                  surface character that feels architectural rather than purely
                  decorative.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-ink)] py-16 text-white">
          <div className="shell space-y-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-4">
                <p className="eyebrow text-[var(--color-accent-soft)]">
                  Artisanship
                </p>
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  The Art of the Finish
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                Our process is rooted in traditional techniques, refined for
                contemporary Bristol architecture. Each layer is applied by
                hand, ensuring a unique depth that machine finishes cannot
                replicate.
              </p>
            </div>

            <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="border-t border-white/12 pt-6 text-white/78"
                >
                  <p className="text-4xl font-semibold tracking-[-0.05em] text-white/24">
                    {step.number}
                  </p>
                  <div className="mt-4 space-y-3">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-7">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-space">
          <div className="shell space-y-12">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">Aesthetic catalogue</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                Explore Our Finishes
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {finishCards.map((finish) => (
                <FinishSwatch key={finish.title} {...finish} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-black/6 bg-[var(--color-surface-subtle)]">
          <div className="shell space-y-12">
            <div className="flex items-end justify-between gap-6">
              <div className="space-y-4">
                <p className="eyebrow">Portfolio</p>
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                  Recent Projects in Bristol
                </h2>
              </div>
              <Link
                href="/our-work"
                className="hidden text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] transition hover:text-[var(--color-ink)] md:inline-flex"
              >
                View full archive →
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {recentProjects.map((project) => (
                <article key={project.title} className="surface-card overflow-hidden">
                  <div className="relative aspect-[16/12] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] pb-10 md:pb-14">
          <div className="shell">
            <div className="overflow-hidden rounded-[var(--radius-panel)] bg-[linear-gradient(135deg,#1e1d1a_0%,#3e3428_100%)] px-6 py-10 text-white shadow-[var(--shadow-card)] md:px-10 md:py-14">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <p className="eyebrow text-[var(--color-accent-soft)]">
                    Ready to upgrade your floor?
                  </p>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                    Tell us about your space and we will recommend the right epoxy system.
                  </h2>
                  <p className="text-sm leading-7 text-white/75 md:text-base">
                    From residential garages to commercial units and industrial interiors, EssResinArt installs epoxy resin floors built for long-term performance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${siteConfig.email}`} className="button-primary">
                    Email EssResinArt
                  </a>
                  <Link
                    href="/contact"
                    className="button-secondary border-white/20 bg-white/8 text-white hover:bg-white hover:text-[var(--color-ink)]"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
    </>
  );
}
