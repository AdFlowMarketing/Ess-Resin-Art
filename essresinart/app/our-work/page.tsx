import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkProjectCard } from "@/components/work-project-card";
import { siteConfig, workProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our Work | ${siteConfig.name}`,
  description:
    "Browse recent EssResinArt work including microcement bathrooms, epoxy resin floors, resin bound driveways, and decorative surface finishes.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: `Our Work | ${siteConfig.name}`,
    description:
      "Browse recent EssResinArt work including microcement bathrooms, epoxy resin floors, resin bound driveways, and decorative surface finishes.",
    url: "/our-work",
  },
};

export default function OurWorkPage() {
  return (
    <>
      <SiteHeader currentPath="/our-work" />
      <main id="main-content" className="bg-[var(--color-surface)]">
        <section className="section-space border-b border-black/6">
          <div className="shell">
            <div className="max-w-3xl space-y-5">
              <p className="eyebrow">Selected Projects</p>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] sm:text-5xl md:text-6xl">
                Our Work
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-7 text-[var(--color-muted)] md:text-base">
                A curated selection of bespoke surface installations across the UK. From luxury residential microcement to robust commercial epoxy flooring, explore the precision and craftsmanship behind EssResinArt.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space pt-10 md:pt-14">
          <div className="shell">
            <div className="grid gap-6 lg:grid-cols-3">
              {workProjects.map((project) => (
                <WorkProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
