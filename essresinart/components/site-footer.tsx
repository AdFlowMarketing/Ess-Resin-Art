import Image from "next/image";
import Link from "next/link";

import { navigationLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-black/8 bg-[var(--color-ink)] text-white"
    >
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/essresinart-logo.png"
              alt="EssResinArt logo"
              width={58}
              height={58}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-white/55">
                EssResinArt
              </p>
              <p className="text-2xl font-semibold tracking-[-0.04em]">
                Resin and microcement specialists in Bristol
              </p>
            </div>
          </Link>
          <p className="max-w-xl text-sm leading-7 text-white/72 md:text-base">
            Premium resin driveways, epoxy floors, and microcement interiors
            tailored for residential and commercial spaces across Bristol.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${siteConfig.email}`} className="button-secondary">
              {siteConfig.email}
            </a>
            <Link href="/services" className="button-secondary">
              View Services
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
              Navigation
            </h2>
            <ul className="space-y-3 text-sm text-white/72">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
              Service Area
            </h2>
            <div className="space-y-3 text-sm leading-7 text-white/72">
              <p>{siteConfig.serviceArea}</p>
              <p>Domestic renovations, commercial flooring, and bespoke surface finishes.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
