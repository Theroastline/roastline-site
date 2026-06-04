import { BrandLockup } from "./BrandLockup";

const PORTAL_URL = "https://roasters.theroastline.com";
const EMAIL = "info@theroastline.com";
const PHONE = "(786) 660-5599";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="site-wrap py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <BrandLockup size={34} onDark />
          <p className="max-w-md text-sm leading-relaxed text-cream/70">
            Turning discounts into discovery — the train that connects local
            cafés with the people who love them.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-cream/80">
            <a href="#winwin" className="hover:text-cream">The win–win</a>
            <a href="#how" className="hover:text-cream">How it works</a>
            <a href="#roasters" className="hover:text-cream">For coffee shops</a>
            <a href={PORTAL_URL} className="hover:text-cream">Roaster login</a>
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            <a href={`mailto:${EMAIL}`} className="hover:text-cream">{EMAIL}</a>
            <a href="tel:+17866605599" className="hover:text-cream">{PHONE}</a>
            <a
              href="https://instagram.com/theroastline"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/theroastline"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/55 sm:flex-row">
          <p>© {new Date().getFullYear()} The Roastline. EST. 26.</p>
          <p className="uppercase tracking-[0.16em]">Ride the coffee line</p>
        </div>
      </div>
    </footer>
  );
}
