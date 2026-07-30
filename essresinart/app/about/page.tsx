import type { Metadata } from "next";
import Link from "next/link";

import {
  BrushIcon,
  LayersIcon,
} from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    "Learn more about EssResinArt, Bristol and Bath specialists in resin flooring, microcement finishes, and resin bound driveways for residential and commercial projects.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Learn more about EssResinArt, Bristol and Bath specialists in resin flooring, microcement finishes, and resin bound driveways for residential and commercial projects.",
    url: "/about",
  },
};

const specialisations = [
  {
    title: "Resin Floors",
    description:
      "Seamless, durable, and sophisticated. We install high-spec epoxy and PU resin systems for luxury residential homes, high-traffic garages, and commercial galleries.",
    bullets: ["Homes & Living Areas", "Designer Garages", "Retail & Commercial"],
    href: "/services/epoxy-resin-flooring",
  },
  {
    title: "Microcement",
    description:
      "The artisan's choice for concrete aesthetics. Hand-applied textures for floors, walls, and fully waterproof wet rooms or bespoke furniture.",
    bullets: ["Waterproof Bathrooms", "Internal Feature Walls", "Kitchen Worktops"],
    href: "/services",
  },
  {
    title: "Resin Bound",
    description:
      "Sustainable and striking outdoor surfaces. SUDS compliant, permeable driveways that combine natural stone beauty with modern engineering.",
    bullets: ["Permeable & Hard-wearing", "UV Stable (No yellowing)", "Wide Aggregate Choice"],
    href: "/services/resin-bound-bristol",
  },
] as const;

const approachItems = [
  {
    title: "Subfloor Assessment",
    description:
      "We utilise diamond grinding and moisture testing to ensure a perfect mechanical bond. Any repairs are handled in-house to guarantee structural integrity.",
    Icon: LayersIcon,
  },
  {
    title: "Bespoke Finish Selection",
    description:
      "Choose from various real-world finishes including matte, satin, or high-gloss. We integrate certified anti-slip additives tailored to your specific environment.",
    Icon: BrushIcon,
  },
] as const;

const journeySteps = [
  {
    number: "01",
    title: "Quick Consult",
    description:
      "Initial discussion on requirements and aesthetic goals.",
  },
  {
    number: "02",
    title: "Site Visit",
    description:
      "Technical survey of subfloor and precise measurements.",
  },
  {
    number: "03",
    title: "Fixed Quote",
    description:
      "A transparent, itemised proposal with no hidden costs.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Expert application with minimal disruption to your home.",
  },
  {
    number: "05",
    title: "Aftercare",
    description:
      "Full guidance on maintaining your new architectural surface.",
  },
] as const;

const areaPills = [
  "Bristol (BS)",
  "Bath (BA)",
  "Keynsham",
  "Portishead",
  "Clevedon",
  "Nailsea",
  "Weston-super-Mare",
  "Yate",
  "Chippenham",
] as const;

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${siteConfig.name}`,
  url: `${siteConfig.siteUrl}/about`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: "Bristol, Bath and surrounding areas",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine,
      addressCountry: "GB",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader currentPath="/about" />
      <main id="main-content" className="bg-[var(--color-surface)]">
        <section className="relative isolate overflow-hidden border-b border-black/6 bg-[#a8a5a2]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0.06)_100%)]" />
          <div className="shell relative flex min-h-[40rem] items-center py-16 md:min-h-[48rem]">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex rounded-md bg-white/12 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-white/88">
                Bristol &amp; Bath&apos;s Finest
              </div>
              <div className="space-y-5">
                <h1 className="text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl md:text-6xl">
                  Resin &amp; Microcement
                  <span className="block">Specialists in</span>
                  <span className="block italic font-normal text-white/90">
                    Bristol &amp; Bath
                  </span>
                </h1>
                <p className="max-w-lg text-sm leading-7 text-white/82 md:text-base">
                  Local specialist installers of architectural seamless surfaces. From luxury resin flooring and artisan microcement to high-performance resin-bound driveways, we bring precision and permanence to every project.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-black/90"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/18 bg-white/14 px-5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/22"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--color-surface)]">
          <div className="shell space-y-14">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">Our Specialisations</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                High-End Surface Systems
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {specialisations.map((item) => (
                <article
                  key={item.title}
                  className="surface-card flex min-h-[23rem] flex-col justify-end p-6 md:p-7"
                >
                  <div className="flex h-full flex-1 flex-col gap-3">
                    <h3 className="min-h-[3.25rem] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                    <p className="min-h-[7.5rem] text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                    <ul className="space-y-2.5 text-sm leading-6 text-[var(--color-muted)]">
                      {item.bullets.map((bullet) => (
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
                    <div className="pt-2">
                      <Link href={item.href} className="button-secondary w-fit">
                        Explore Service
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--color-surface-subtle)]">
          <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="eyebrow">Our Architectural Approach</p>
                <h2 className="max-w-lg text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] md:text-5xl">
                  Greatness is Built on Meticulous Foundation
                </h2>
                <p className="max-w-lg text-sm leading-7 text-[var(--color-muted)] md:text-base">
                  A premium finish is only as good as what lies beneath. Unlike standard contractors, we treat every floor as an engineering project.
                </p>
              </div>

              <div className="space-y-6">
                {approachItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                      <item.Icon className="h-5 w-5" />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[36rem]">
              <div className="surface-card min-h-[25rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.72)_100%)] shadow-[0_30px_80px_rgba(31,24,18,0.08)] md:min-h-[32rem]" />
              <div className="surface-card absolute bottom-5 right-5 max-w-[12rem] bg-white px-5 py-4 shadow-[0_22px_50px_rgba(31,24,18,0.12)]">
                <p className="text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                  15+
                </p>
                <p className="mt-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Years of cumulative technical expertise
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--color-surface)]">
          <div className="shell space-y-14">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">The Journey</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-5xl">
                From Vision to Installation
              </h2>
            </div>

            <ol className="grid gap-8 md:grid-cols-5">
              {journeySteps.map((step) => {
                const isActive = step.number === "04";

                return (
                  <li key={step.number} className="flex flex-col items-center text-center">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full border text-sm font-semibold ${
                        isActive
                          ? "border-black bg-black text-white"
                          : "border-black/70 bg-transparent text-[var(--color-ink)]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-base font-semibold text-[var(--color-ink)]">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-6 text-[var(--color-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="bg-[var(--color-ink)] py-16 text-white">
          <div className="shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div className="space-y-5">
              <h2 className="max-w-xs text-balance text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
                Areas We Cover
              </h2>
              <p className="max-w-sm text-sm leading-7 text-white/72 md:text-base">
                Specialist installation across the South West&apos;s most prestigious postcodes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {areaPills.map((area) => (
                <span
                  key={area}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/12 bg-white/8 px-4 text-sm font-medium text-white/88"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] pb-10 pt-12 md:pb-14 md:pt-14">
          <div className="shell">
            <div className="overflow-hidden rounded-[var(--radius-panel)] bg-[linear-gradient(135deg,#111110_0%,#2b241c_100%)] px-6 py-10 text-white shadow-[var(--shadow-card)] md:px-10 md:py-14">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <p className="eyebrow text-[var(--color-accent-soft)]">
                    Ready to transform your space?
                  </p>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                    Contact us for a professional consultation and a tailored quote.
                  </h2>
                  <p className="text-sm leading-7 text-white/75 md:text-base">
                    From seamless resin floors to artisan microcement and durable resin bound surfaces, we will recommend the right system for your project.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="button-primary">
                    Request an Estimate
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary border-white/20 bg-white/8 text-white hover:bg-white hover:text-[var(--color-ink)]"
                  >
                    Message on WhatsApp
                  </a>
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
          __html: JSON.stringify(aboutPageJsonLd),
        }}
      />
    </>
  );
}
