import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FaqAccordion } from "@/components/faq-accordion";
import {
  BrushIcon,
  LayersIcon,
  ShieldIcon,
  SparklesIcon,
} from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Resin Bound Driveways in Bristol | ${siteConfig.name}`,
  description:
    "Premium resin bound driveways in Bristol by EssResinArt. Discover UV-stable, SUDS-compliant driveway, pathway, and patio surfaces designed for long-term performance.",
  alternates: {
    canonical: "/services/resin-bound-bristol",
  },
  openGraph: {
    title: `Resin Bound Driveways in Bristol | ${siteConfig.name}`,
    description:
      "Premium resin bound driveways in Bristol by EssResinArt. Discover UV-stable, SUDS-compliant driveway, pathway, and patio surfaces designed for long-term performance.",
    url: "/services/resin-bound-bristol",
  },
};

const featureCards = [
  {
    title: "SUDS Compliant",
    description:
      "Naturally filters water back into the ground, reducing puddles and helping your surface remain permeable.",
    Icon: LayersIcon,
  },
  {
    title: "Weed Resistant",
    description:
      "The seamless, bound surface prevents weed growth through the matrix, keeping a low-maintenance appearance.",
    Icon: ShieldIcon,
  },
  {
    title: "UV Stable",
    description:
      "Our high-grade aliphatic resin systems resist yellowing and hold their colour over the years.",
    Icon: SparklesIcon,
  },
  {
    title: "Durable",
    description:
      "Hard-wearing and crack-resistant, designed to withstand heavy domestic vehicle traffic for decades.",
    Icon: BrushIcon,
  },
] as const;

const serviceCards = [
  {
    title: "Resin Bound Driveways",
    description:
      "Premium resin bound driveways with smooth, seamless surface build-ups designed for kerb appeal and reliability.",
    image: "/images/resin-bound-driveway-cardiff.jpg",
    alt: "Resin bound driveway installed outside a residential property in Cardiff",
  },
  {
    title: "Resin Paths & Pathways",
    description:
      "Upgrade your curb appeal and return paths alike with a clean, flowing bound aggregate finish.",
    image: "/images/resin-patio.jpg",
    alt: "Resin patio and pathway surface with flowing bound aggregate finish",
  },
  {
    title: "Resin Driveway Repair",
    description:
      "Revive tired driveways and improve patchy or uneven surfaces with practical resurfacing guidance.",
    image: "/images/resin-bound-repair.jpg",
    alt: "Close-up of a resin bound surface repair in progress",
  },
] as const;

const processSteps = [
  {
    title: "Site Preparation & Substrate Check",
    description:
      "We meticulously assess and prepare the base to ensure proper adhesion and durability.",
  },
  {
    title: "Edge Precision Installation",
    description:
      "High-quality metal or brick edging is installed to define the resin and contain the finish.",
  },
  {
    title: "Precision Mixing",
    description:
      "The aggregate and high-grade UV-stable resin are mixed to exact ratios for balanced coverage and consistency.",
  },
  {
    title: "Hand-Trowelled Finish",
    description:
      "Our experienced team hand-trowels the final surface for a flawless, premium appearance.",
  },
] as const;

const recentJobs = [
  {
    title: "Clifton Contemporary",
    category: "Driveway Installation",
    description:
      "A seamless resin driveway between architecture and landscape.",
    image: "/images/resin-bound-patio-clifton.jpg",
    alt: "Resin bound driveway and patio installation in Clifton",
  },
  {
    title: "Redland Garden Path",
    category: "Landscape Access",
    description:
      "A clean route linking rear access and natural stone landscaping.",
    image: "/images/resin-driveway-Redland.jpg",
    alt: "Resin garden path installation in Redland",
  },
  {
    title: "Henleaze Family Drive",
    category: "Driveway Transformation",
    description:
      "Scaled for busy family use with a refined residential finish.",
    image: "/images/Henleaze-Resin-Bound.jpg",
    alt: "Resin bound family driveway installation in Henleaze",
  },
] as const;

const aggregateOptions = [
  {
    title: "Alpine",
    image: "/images/Alpine-Agregate.jpg",
    alt: "Alpine resin bound aggregate sample",
  },
  {
    title: "Jet Black",
    image: "/images/Jet-Black-Agregate.png",
    alt: "Jet Black resin bound aggregate sample",
  },
  {
    title: "Riverstone",
    image: "/images/Riverstone-Agregate.jpg",
    alt: "Riverstone resin bound aggregate sample",
  },
  {
    title: "Rose Quartz",
    image: "/images/Rose-Quartz-Agregate.jpg",
    alt: "Rose Quartz resin bound aggregate sample",
  },
] as const;

const resinBoundFaqs = [
  {
    question: "Can you install resin bound over existing driveway?",
    answer:
      "Sometimes, if the existing surface is structurally sound and suitable. If the base is failing, resurfacing will not fix the underlying issues, so we recommend repairs or a new base.",
  },
  {
    question: "Will weeds grow through a resin driveway?",
    answer:
      "A correctly installed system with proper base work greatly reduces weed growth. Most weeds people see come from wind-blown seeds settling on top rather than growing up from underneath.",
  },
  {
    question: "What affects the cost of a resin driveway in Bristol?",
    answer:
      "The main factors are driveway size in square metres, base condition, edging details, drainage requirements, and site access. We provide clear quotes that explain what is included.",
  },
] as const;

function PlaceholderImage({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.25rem] border border-[rgba(158,123,79,0.16)] bg-[linear-gradient(135deg,#f6efe7_0%,#eadcca_52%,#d9c1a1_100%)] ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.56),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.16),transparent_60%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative flex h-full items-end p-4">
        <span className="rounded-full bg-white/78 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--color-accent-strong)] backdrop-blur">
          {label}
        </span>
      </div>
    </div>
  );
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Resin Bound Driveways Bristol",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
  areaServed: siteConfig.serviceArea,
  serviceType: "Resin bound driveway installation",
  description:
    "Premium resin bound driveways, patios, and pathways installed in Bristol with UV-stable, permeable surface systems.",
  url: `${siteConfig.siteUrl}/services/resin-bound-bristol`,
};

export default function ResinBoundBristolPage() {
  return (
    <>
      <SiteHeader currentPath="/services" />
      <main id="main-content" className="bg-[var(--color-surface)]">
        <section className="relative isolate overflow-hidden border-b border-black/6">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,244,0.84)_0%,rgba(250,248,244,0.9)_100%)]" />
          <PlaceholderImage
            label="Hero placeholder"
            className="absolute inset-0 rounded-none border-0"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,244,239,0.96)_0%,rgba(248,244,239,0.88)_34%,rgba(248,244,239,0.24)_100%)]" />

          <div className="shell relative flex min-h-[34rem] items-center py-20">
            <div className="max-w-2xl space-y-6">
              <p className="eyebrow">Architectural surfacing in Bristol</p>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] sm:text-5xl md:text-6xl">
                Premium Resin Bound Driveways in Bristol
              </h1>
              <p className="max-w-xl text-pretty text-sm leading-7 text-[var(--color-muted)] md:text-base">
                We specialise in premium resin driveways, patios, and footpaths
                with a refined aesthetic, smooth detailing, and dependable
                outdoor durability.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="button-primary">
                  Get a Driveway Quote
                </Link>
                <Link href="/our-work" className="button-secondary">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-5">
              <p className="eyebrow">The essence of surface</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                Material excellence, built for modern exteriors.
              </h2>
              <p className="text-sm leading-7 text-[var(--color-muted)] md:text-base">
                Our resin bound systems are more than just a surface choice.
                They represent the pinnacle of modern exterior surfacing,
                combining natural aggregate with high-performance UV-stable
                resin.
              </p>
              <ul className="space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold text-[var(--color-accent)]">
                    +
                  </span>
                  SUDS Compliant and fully permeable
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold text-[var(--color-accent)]">
                    +
                  </span>
                  UV-stable aliphatic resin technology
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold text-[var(--color-accent)]">
                    +
                  </span>
                  Slip-resistant textured finishes
                </li>
              </ul>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:items-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-[rgba(158,123,79,0.16)] shadow-[var(--shadow-card)]">
                <Image
                  src="/images/resin-bound-agregate.png"
                  alt="Close-up of resin bound aggregate texture"
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-[rgba(158,123,79,0.16)] shadow-[var(--shadow-card)] md:-mt-8">
                <Image
                  src="/images/resin-bound-edge-detail.png"
                  alt="Edge detail of a resin bound driveway installation"
                  fill
                  sizes="(max-width: 767px) 100vw, 28vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-space border-y border-black/6 bg-[var(--color-surface-subtle)]">
          <div className="shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => (
              <article key={card.title} className="surface-card h-full p-6">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <card.Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {card.title}
                  </h2>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-space bg-[var(--color-surface)]">
          <div className="shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                Resin Bound Driveway Colours & Aggregate Options
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-muted)] md:text-base">
                <p>
                  Resin bound driveways can be tailored to match the style of
                  your home and the look you want outside. You can choose from
                  a wide range of colour blends, from light modern tones to
                  warmer natural stone looks, and we can help you pick an
                  option that stays practical for everyday use.
                </p>
                <p>
                  Design can also be customised with simple details such as
                  borders, contrast edges, or matching pathways, so the
                  driveway looks finished and consistent with the rest of the
                  exterior. The final finish is seamless and clean-looking, with
                  a natural texture from the aggregate that works well for daily
                  traffic.
                </p>
                <p>
                  If you have a specific style in mind, send a reference photo
                  and we&apos;ll suggest the closest match that suits your
                  driveway layout and conditions.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {aggregateOptions.map((option) => (
                <article key={option.title} className="space-y-3">
                  <div className="relative aspect-[1/1] overflow-hidden rounded-[1.1rem] border border-[rgba(158,123,79,0.16)] shadow-[var(--shadow-card)]">
                    <Image
                      src={option.image}
                      alt={option.alt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-ink)]">
                    {option.title}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="shell space-y-12">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                Our Resin Bound Services in Bristol
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
                From residential sanctuaries to high-traffic commercial
                environments, our surfaces deliver uncompromising performance.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {serviceCards.map((card) => (
                <article key={card.title} className="surface-card overflow-hidden">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-black/6 bg-[var(--color-surface-subtle)]">
          <div className="shell space-y-12">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">The essence of a perfect finish</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                Our Resin Bound Installation Process
              </h2>
            </div>

            <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step.title} className="surface-card flex h-full flex-col gap-5 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-space">
          <div className="shell space-y-12">
            <div className="flex items-end justify-between gap-6">
              <div className="space-y-4">
                <p className="eyebrow">Local excellence</p>
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                  Recent Jobs in Bristol
                </h2>
              </div>
              <Link
                href="/our-work"
                className="hidden text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] transition hover:text-[var(--color-ink)] md:inline-flex"
              >
                View all projects →
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {recentJobs.map((job) => (
                <article key={job.title} className="surface-card overflow-hidden">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={job.image}
                      alt={job.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {job.category}
                    </p>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                      {job.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">
                      {job.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--color-surface)]">
          <div className="shell space-y-14">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">Frequently Asked Questions</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                Common questions about resin bound driveways in Bristol.
              </h2>
            </div>

            <FaqAccordion items={resinBoundFaqs} />
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
