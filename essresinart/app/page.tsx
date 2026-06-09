import Image from "next/image";
import Link from "next/link";

import { BenefitCard } from "@/components/benefit-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  benefits,
  processSteps,
  projectHighlights,
  serviceCards,
  siteConfig,
} from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  logo: `${siteConfig.siteUrl}/images/essresinart-logo.png`,
  description: siteConfig.description,
  areaServed: siteConfig.serviceArea,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bristol",
    addressCountry: "GB",
  },
  makesOffer: serviceCards.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
    },
  })),
};

export default function Home() {
  return (
    <>
      <SiteHeader currentPath="/" />
      <main id="main-content">
        <section className="relative isolate overflow-hidden border-b border-black/6 bg-[var(--color-surface)]">
          <Image
            src="/images/resin-flooring-hero.jpg"
            alt="Large seamless resin floor installed by EssResinArt"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,235,0.66)_0%,rgba(244,240,235,0.5)_28%,rgba(244,240,235,0.14)_58%,rgba(244,240,235,0.03)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_100%)]" />

          <div className="shell relative flex min-h-[34rem] items-center py-14 md:min-h-[40rem] md:py-16">
            <div className="max-w-3xl space-y-6">
              <p className="eyebrow text-[var(--color-ink)]">
                EssResinArt / Resin specialists in Bristol
              </p>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.07em] text-[var(--color-ink)] sm:text-5xl md:text-6xl">
                  Specialists in resin driveways, microcement, and epoxy flooring.
                </h1>
                <p className="max-w-2xl text-pretty text-base leading-8 text-[var(--color-muted)] md:text-lg">
                  We create premium surfaces for homes, studios, garages, and commercial spaces with a focus on durability, clean detailing, and design-led finishes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="button-primary">
                  Request a Free Quote
                </Link>
                <Link href="/our-work" className="button-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-space bg-[var(--color-surface)]">
          <div className="shell space-y-14">
            <SectionHeading
              eyebrow="Our Services in Bristol"
              title="High-performance resin and microcement surfaces for residential and commercial spaces."
              description="We install systems that look refined in finished interiors and perform reliably in hard-working everyday environments."
              align="center"
            />
            <div className="flex justify-center">
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black bg-black px-5 text-sm font-semibold !text-white transition hover:border-[var(--color-accent-strong)] hover:bg-[var(--color-accent-strong)] hover:!text-white"
              >
                See more
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space bg-[var(--color-surface-subtle)]">
          <div className="shell grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="About EssResinArt"
                title="Craft-led installation backed by practical performance."
                description="EssResinArt works across Bristol delivering resin flooring, resin bound surfacing, and bespoke microcement finishes. Every project is planned around the substrate, the intended use of the space, and the visual result you want to achieve."
              />
              <div className="space-y-4 text-sm leading-8 text-[var(--color-muted)] md:text-base">
                <p>
                  We work with homeowners, developers, and businesses looking for surfaces that feel contemporary, wear well, and elevate the character of the property.
                  Whether you need a refined bathroom finish, a resilient garage floor, or a driveway that improves first impressions from the street, we focus on preparation, specification, and a clean final finish.
                </p>
              </div>
            </div>

            <figure className="surface-card overflow-hidden p-4">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[calc(var(--radius-card)-0.5rem)]">
                <Image
                  src="/images/microcement-bathroom.jpg"
                  alt="Microcement bathroom installation by EssResinArt"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="section-space border-y border-black/6 bg-[var(--color-surface-subtle)]">
          <div className="shell space-y-14">
            <SectionHeading
              eyebrow="The Advantages of Resin Systems"
              title="Why clients choose resin and microcement for modern spaces."
              description="These finishes are popular because they combine durability with a visually calm, architectural look."
              align="center"
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => (
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

        <section id="projects" className="section-space bg-[var(--color-surface)]">
          <div className="shell space-y-14">
            <SectionHeading
              eyebrow="Our Work"
              title="Selected finishes across garages, interiors, and outdoor surfaces."
              description="A compact project gallery that reinforces the look and material range behind EssResinArt's offer."
              align="center"
            />

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="surface-card overflow-hidden p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(var(--radius-card)-0.5rem)]">
                  <Image
                    src={projectHighlights[0].image}
                    alt={projectHighlights[0].alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 px-2 pt-5">
                  <p className="eyebrow">Featured Project</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {projectHighlights[0].title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                    Clean, durable epoxy systems designed for high-traffic spaces where appearance and ongoing maintenance both matter.
                  </p>
                </div>
              </article>

              <div className="grid gap-6">
                {projectHighlights.slice(1).map((project) => (
                  <article key={project.title} className="surface-card grid gap-4 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                    <div className="relative aspect-[5/4] self-center overflow-hidden rounded-[calc(var(--radius-card)-0.5rem)]">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                      <p className="eyebrow">Surface Detail</p>
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-7 text-[var(--color-muted)]">
                        Premium finishes with a restrained contemporary palette, carefully specified to suit each environment.
                      </p>
                      <Link href="/our-work" className="button-secondary mt-2 w-fit">
                        View Our Work
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--color-surface)]">
          <div className="shell space-y-14">
            <SectionHeading
              eyebrow="How We Work"
              title="A straightforward process from specification to final finish."
              description="The systems may differ, but the principle stays the same: correct preparation, clear communication, and careful installation."
              align="center"
            />

            <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step.title} className="surface-card flex h-full flex-col gap-5 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)]">
                    0{index + 1}
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
                  <Link href="/services" className="button-secondary border-white/20 bg-white/8 text-white hover:bg-white hover:text-[var(--color-ink)]">
                    Explore Services
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
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
    </>
  );
}
