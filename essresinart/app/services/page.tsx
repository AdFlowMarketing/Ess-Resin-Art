import type { Metadata } from "next";
import Link from "next/link";

import { ServiceDetailCard } from "@/components/service-detail-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { detailedServices, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description:
    "Explore EssResinArt services including epoxy resin flooring, industrial resin flooring, resin bound driveways, microcement, Venetian plaster, and decorative wall finishes across Bristol.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description:
      "Explore EssResinArt services including epoxy resin flooring, industrial resin flooring, resin bound driveways, microcement, Venetian plaster, and decorative wall finishes across Bristol.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader currentPath="/services" />
      <main id="main-content" className="bg-[var(--color-surface)]">
        <section className="section-space border-b border-black/6 bg-[var(--color-surface-strong)]">
          <div className="shell">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">Services</p>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] sm:text-5xl md:text-6xl">
                Premium Surface Finishes for Residential and Commercial Projects in Bristol
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-7 text-[var(--color-muted)] md:text-base">
                Explore epoxy resin flooring, resin bound driveways, Venetian plaster, microcement, industrial resin flooring, and decorative wall finishes tailored to homes and commercial spaces across Bristol.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space pt-10 md:pt-14">
          <div className="shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {detailedServices.map((service) => (
              <ServiceDetailCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="bg-[var(--color-surface)] pb-10 md:pb-14">
          <div className="shell">
            <div className="overflow-hidden rounded-[var(--radius-panel)] bg-[linear-gradient(135deg,#1e1d1a_0%,#3e3428_100%)] px-6 py-10 text-white shadow-[var(--shadow-card)] md:px-10 md:py-14">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <p className="eyebrow text-[var(--color-accent-soft)]">
                    Ready to plan your surface?
                  </p>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                    Tell us about your project and we will recommend the right finish.
                  </h2>
                  <p className="text-sm leading-7 text-white/75 md:text-base">
                    From resin bound driveways to epoxy floors and microcement interiors, EssResinArt delivers tailored specifications for Bristol properties.
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
    </>
  );
}
