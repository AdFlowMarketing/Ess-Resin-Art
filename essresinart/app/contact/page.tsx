import type { Metadata } from "next";
import Link from "next/link";

import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  contactDetails,
  contactSteps,
  siteConfig,
  socialLinks,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Contact EssResinArt for resin driveways, epoxy flooring, and microcement installations in Bristol. Reach out by phone, email, WhatsApp, or social media.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Contact EssResinArt for resin driveways, epoxy flooring, and microcement installations in Bristol. Reach out by phone, email, WhatsApp, or social media.",
    url: "/contact",
  },
};

const detailIcons = [PhoneIcon, MailIcon, MapPinIcon, ClockIcon] as const;
const socialIcons = {
  WhatsApp: WhatsAppIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const;

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${siteConfig.name}`,
  url: `${siteConfig.siteUrl}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bristol",
      addressCountry: "GB",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader currentPath="/contact" />
      <main id="main-content" className="bg-[var(--color-surface)]">
        <section className="section-space border-b border-black/6">
          <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="eyebrow">Contact Us</p>
                <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] sm:text-5xl md:text-6xl">
                  Start your project.
                </h1>
                <p className="max-w-xl text-pretty text-sm leading-7 text-[var(--color-muted)] md:text-base">
                  Tell us about your resin flooring, microcement, or driveway project and we will help you choose the right surface system for the space.
                </p>
              </div>

              <div className="grid gap-4">
                {contactDetails.map((detail, index) => {
                  const Icon = detailIcons[index];

                  return (
                    <a
                      key={detail.title}
                      href={detail.href}
                      className="surface-card flex items-start gap-4 p-5 transition hover:border-[var(--color-accent)]"
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="space-y-1">
                        <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          {detail.title}
                        </span>
                        <span className="block text-lg font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                          {detail.value}
                        </span>
                        <span className="block text-sm leading-6 text-[var(--color-muted)]">
                          {detail.description}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="surface-card overflow-hidden p-6 md:p-8">
              <div className="space-y-3 border-b border-black/8 pb-5">
                <p className="eyebrow">Fastest Ways to Reach Us</p>
                <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  Get in touch today.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                  For the quickest response, send a few project photos on WhatsApp or email us your brief with dimensions, location, and the type of finish you are considering.
                </p>
              </div>

              <ContactForm
                email={siteConfig.email}
                whatsappNumber={siteConfig.whatsapp}
              />

              <div className="space-y-4 border-t border-black/8 pt-6">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  Socials
                </h3>
                <div className="grid gap-3 sm:grid-cols-3">
                  {socialLinks.map((social) => {
                    const Icon = socialIcons[social.label];

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="surface-card flex items-center gap-3 p-4 transition hover:border-[var(--color-accent)]"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-[var(--color-ink)]">
                            {social.label}
                          </span>
                          <span className="block text-xs text-[var(--color-muted)]">
                            {social.handle}
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space border-b border-black/6 bg-[var(--color-surface-subtle)]">
          <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="eyebrow">Find Us</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                Bristol-based installations with coverage across the surrounding area.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
                We work across Bristol and nearby locations on residential and commercial projects. If you are unsure whether we cover your area, send us the postcode and we will confirm availability.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.openstreetmap.org/?mlat=51.4545&mlon=-2.5879#map=12/51.4545/-2.5879"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  Open Full Map
                </a>
                <Link href="/our-work" className="button-secondary">
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="surface-card overflow-hidden p-3">
              <div className="overflow-hidden rounded-[calc(var(--radius-card)-0.5rem)]">
                <iframe
                  title="Map showing Bristol service area"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-2.7602%2C51.3812%2C-2.4156%2C51.5274&layer=mapnik&marker=51.4545%2C-2.5879"
                  className="h-[24rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="shell space-y-12">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
              <p className="eyebrow">What Happens Next?</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] md:text-4xl">
                A clear route from first message to finished surface.
              </h2>
            </div>

            <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {contactSteps.map((step, index) => (
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
            <div className="overflow-hidden rounded-[var(--radius-panel)] bg-[linear-gradient(135deg,#111110_0%,#2b241c_100%)] px-6 py-10 text-white shadow-[var(--shadow-card)] md:px-10 md:py-14">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <p className="eyebrow text-[var(--color-accent-soft)]">
                    Not sure which finish fits best?
                  </p>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                    Send a few photos and we will point you toward the right surface system.
                  </h2>
                  <p className="text-sm leading-7 text-white/75 md:text-base">
                    We can advise on epoxy resin flooring, resin bound driveways, microcement, and decorative wall finishes before you commit to a full specification.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary"
                  >
                    Send Photos on WhatsApp
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="button-secondary border-white/20 bg-white/8 text-white hover:bg-white hover:text-[var(--color-ink)]"
                  >
                    Email Your Brief
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
          __html: JSON.stringify(contactPageJsonLd),
        }}
      />
    </>
  );
}
