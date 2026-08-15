import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BenefitCard } from "@/components/benefit-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { LayersIcon, ShieldIcon, SparklesIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  epoxyBenefits,
  epoxyEnvironments,
  epoxyFaqs,
  epoxyPreparationBenefits,
  epoxyRecentJobs,
  epoxySolutionsMatrix,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `Epoxy Resin Flooring | ${siteConfig.name}`,
  description:
    "EssResinArt installs epoxy resin flooring for garages, homes, studios, and commercial spaces across Bristol, combining durability with a seamless modern finish.",
  alternates: {
    canonical: "/services/epoxy-resin-flooring",
  },
  openGraph: {
    title: `Epoxy Resin Flooring | ${siteConfig.name}`,
    description:
      "EssResinArt installs epoxy resin flooring for garages, homes, studios, and commercial spaces across Bristol, combining durability with a seamless modern finish.",
    url: "/services/epoxy-resin-flooring",
    images: [
      {
        url: "/images/epoxy-warehouse-floor-paint-Bristol.jpg",
        width: 1200,
        height: 630,
        alt: "Epoxy resin flooring installed by EssResinArt",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Epoxy Resin Flooring",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
  areaServed: siteConfig.serviceArea,
  serviceType: "Epoxy resin flooring installation",
  description:
    "Seamless epoxy resin flooring for residential, commercial, and industrial environments across Bristol.",
  url: `${siteConfig.siteUrl}/services/epoxy-resin-flooring`,
};

const preparationIcons = [LayersIcon, ShieldIcon, SparklesIcon] as const;

export default function EpoxyResinFlooringPage() {
  return (
    <>
      <SiteHeader currentPath="/services" />
      <main id="main-content" className="bg-[var(--color-surface)]">
        <section className="relative isolate overflow-hidden border-b border-black/6">
          <Image
            src="/images/Epoxy-Resin-Floor-hero-mobile.jpg"
            alt="Seamless epoxy resin flooring by EssResinArt"
            fill
            priority
            sizes="100vw"
            className="object-cover md:hidden"
          />
          <Image
            src="/images/Epoxy-Resin-Floor-hero-desktop.jpg"
            alt="Seamless epoxy resin flooring by EssResinArt"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover md:block"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,247,243,0.9)_0%,rgba(250,247,243,0.78)_38%,rgba(250,247,243,0.38)_68%,rgba(250,247,243,0.14)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.08)_34%,transparent_62%)]" />

          <div className="shell relative flex min-h-[30rem] items-center py-20">
            <div className="max-w-2xl space-y-6">
              <p className="eyebrow">EssResinArt / Epoxy Flooring</p>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] sm:text-5xl md:text-6xl">
                Epoxy Resin Flooring Specialists
              </h1>
              <p className="max-w-xl text-pretty text-sm leading-7 text-[var(--color-muted)] md:text-base">
                Seamless, hard-wearing epoxy flooring for garages, utility rooms, studios, and commercial interiors across Bristol.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="button-primary">
                  Book Your Flooring Project
                </Link>
                <Link href="/our-work#garage-floor" className="button-secondary">
                  View Recent Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="space-y-5">
              <p className="eyebrow">Why choose epoxy?</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                Specialist Resin Flooring in Bristol
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-muted)] md:text-base">
                <p>
                  EssResinArt is a local company making resin floor coatings in Bristol and surrounding areas. Discover the strength, elegance, and versatility of epoxy resin flooring with EssResinArt. We design and install premium epoxy floors that combine stunning aesthetics with long-lasting durability and are perfect for homes, garages, offices, and industrial spaces.
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                  What is Resin Floor?
                </h2>
                <p className="text-sm leading-7 text-[var(--color-muted)] md:text-base">
                  A resin floor is a seamless, durable surface made by applying a high-performance resin coating over concrete or other prepared substrates. It creates a smooth, hard-wearing finish that is resistant to chemicals, moisture, stains, and heavy traffic. Resin flooring is widely used in commercial, industrial, and residential spaces thanks to its modern appearance, easy maintenance, and long-lasting performance.
                </p>
              </div>
            </div>

            <div className="surface-card relative overflow-hidden p-4">
              <div className="relative aspect-[1/1] overflow-hidden rounded-[calc(var(--radius-card)-0.5rem)]">
                <Image
                  src="/images/epoxy-resin-floor-bathroom-Bristol.jpg"
                  alt="Epoxy resin floor finish installed in a Bristol bathroom"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="surface-card absolute bottom-8 left-8 max-w-xs p-5">
                <p className="eyebrow">What clients value</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  Strong impact resistance, a seamless finish, and a cleaner day-to-day surface for high-use interiors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space border-y border-black/6 bg-[var(--color-surface-subtle)]">
          <div className="shell space-y-12">
            <div className="max-w-4xl space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                Why Proper Floor Preparation Matters
              </h2>
              <div className="max-w-4xl border-l-2 border-[var(--color-accent)] pl-5 text-sm leading-7 text-[var(--color-muted)] md:text-base">
                <p>
                  A long-lasting resin floor starts with proper concrete preparation. Before applying epoxy, polyurethane or MMA resin flooring, the existing concrete must be assessed, cleaned, repaired and mechanically prepared to create a strong bond between the substrate and the new resin system. We provide professional concrete floor preparation in Bristol for commercial, industrial and domestic resin flooring projects, including warehouses, factories, workshops, garages, kitchens, retail units and refurbishment sites.
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {epoxyPreparationBenefits.map((item, index) => {
                const Icon = preparationIcons[index];

                return (
                  <article key={item.title} className="surface-card flex h-full flex-col gap-5 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="rounded-[1.5rem] border border-black/8 bg-[color:var(--color-surface)] px-6 py-6 text-center text-sm font-semibold leading-7 text-[var(--color-ink)] shadow-[var(--shadow-soft)] md:px-8">
              Resin flooring is only as strong as the surface underneath it. That is why we assess the condition of every floor in Bristol and beyond before recommending any epoxy resin flooring, polyurethane flooring or industrial floor coating system.
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--color-surface)]">
          <div className="shell space-y-12">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                Flooring Solutions Matrix
              </h2>
              <div className="h-0.5 w-20 rounded-full bg-[var(--color-accent)]" />
            </div>

            <div className="overflow-hidden rounded-[var(--radius-card)] border border-black/8 bg-white shadow-[var(--shadow-soft)]">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-[var(--color-surface-subtle)]">
                    <tr>
                      <th className="px-5 py-4 text-sm font-semibold text-[var(--color-ink)]">
                        Flooring Issue
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold text-[var(--color-ink)]">
                        Recommended Solution
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold text-[var(--color-ink)]">
                        Ideal For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {epoxySolutionsMatrix.map((row) => (
                      <tr key={row.issue} className="border-t border-black/8">
                        <td className="px-5 py-4 text-sm leading-6 text-[var(--color-muted)]">
                          {row.issue}
                        </td>
                        <td className="px-5 py-4 text-sm leading-6 text-[var(--color-muted)]">
                          <span className="inline-flex items-center gap-2">
                            <span
                              aria-hidden="true"
                              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold text-[var(--color-accent)]"
                            >
                              +
                            </span>
                            {row.solution}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-sm leading-6 text-[var(--color-muted)]">
                          {row.idealFor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="shell space-y-14">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">Engineered for Every Environment</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                Epoxy flooring tailored to how each space performs.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {epoxyEnvironments.map((environment) => (
                <article key={environment.title} className="surface-card overflow-hidden">
                  <div className="relative aspect-[16/12]">
                    <Image
                      src={environment.image}
                      alt={environment.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                      {environment.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">
                      {environment.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--color-surface)]">
          <div className="shell space-y-14">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">Unrivalled Performance</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                Built for demanding environments without compromising on finish.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {epoxyBenefits.map((benefit, index) => (
                <BenefitCard
                  key={benefit.title}
                  index={index}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-t border-black/6 bg-[var(--color-surface-subtle)]">
          <div className="shell space-y-14">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">Recent Jobs in Bristol</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                Recent epoxy flooring projects across residential and commercial spaces.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {epoxyRecentJobs.map((job) => (
                <article key={job.title} className="surface-card overflow-hidden">
                  <div className="relative aspect-[16/12]">
                    <Image
                      src={job.image}
                      alt={job.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                        {job.title}
                      </h3>
                      <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {job.location}
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">
                      {job.description}
                    </p>
                    <Link href="/contact" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-accent-strong)] transition hover:text-[var(--color-ink)]">
                      Ask about a similar project
                      <span aria-hidden="true">→</span>
                    </Link>
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
                Common questions about epoxy resin flooring in Bristol.
              </h2>
            </div>

            <FaqAccordion items={epoxyFaqs} />
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
                  <Link href="/contact" className="button-primary">
                    Contact EssResinArt
                  </Link>
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
