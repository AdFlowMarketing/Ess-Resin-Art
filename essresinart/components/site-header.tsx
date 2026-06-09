import Image from "next/image";
import Link from "next/link";

import { navigationLinks } from "@/lib/site";

type SiteHeaderProps = {
  currentPath?: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/8 bg-[var(--color-surface-elevated)] backdrop-blur">
      <div className="shell flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center text-[var(--color-ink)] transition hover:opacity-90"
          aria-label="EssResinArt home"
        >
          <Image
            src="/images/essresinart-logo.png"
            alt="EssResinArt logo"
            width={64}
            height={64}
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => {
            const isActive =
              "matchPath" in link && link.matchPath === currentPath;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition hover:text-[var(--color-ink)] ${
                  isActive
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-muted)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="button-primary hidden sm:inline-flex">
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
