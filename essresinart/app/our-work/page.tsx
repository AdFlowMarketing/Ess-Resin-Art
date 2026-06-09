import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkProjectCard } from "@/components/work-project-card";
import { siteConfig, workCategories, workProjects } from "@/lib/site";

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

const categorySections = [
  {
    id: "epoxy-flooring",
    label: "Epoxy Flooring",
  },
  {
    id: "resin-bound-driveways",
    label: "Resin Bound Driveways",
  },
  {
    id: "microcement",
    label: "Microcement",
  },
  {
    id: "decorative-finishes",
    label: "Decorative Finishes",
  },
] as const;

export default function OurWorkPage() {
  return (
    <>
      <SiteHeader currentPath="/our-work" />
      <main id="main-content" className="bg-[var(--color-surface)]">
        <section className="section-space border-b border-black/6">
          <div className="shell space-y-10">
            <div className="max-w-3xl space-y-5">
              <p className="eyebrow">Selected Projects</p>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] sm:text-5xl md:text-6xl">
                Our Work
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-7 text-[var(--color-muted)] md:text-base">
                A curated selection of bespoke surface installations across the UK. From luxury residential microcement to robust commercial epoxy flooring, explore the precision and craftsmanship behind EssResinArt.
              </p>
            </div>

            <nav aria-label="Project categories" className="flex flex-wrap gap-3">
              {workCategories.map((category, index) => (
                <Link
                  key={category.label}
                  href={category.href}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                    index === 0
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                      : "border-black/10 bg-white text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {category.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="section-space pt-10 md:pt-14">
          <div className="shell space-y-16">
            <div className="grid gap-6 lg:grid-cols-3">
              {workProjects.map((project) => (
                <WorkProjectCard key={project.id} {...project} />
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {categorySections.map((section) => {
                const count = workProjects.filter(
                  (project) => project.categoryId === section.id,
                ).length;

                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="surface-card p-6"
                  >
                    <p className="eyebrow">{section.label}</p>
                    <div className="mt-4 space-y-3">
                      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                        {section.label}
                      </h2>
                      <p className="text-sm leading-7 text-[var(--color-muted)]">
                        {count} featured project{count > 1 ? "s" : ""} in this category, each tailored to the surface, use case, and finish brief.
                      </p>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
