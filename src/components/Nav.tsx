import Link from "next/link";
import { RouteMark } from "./RouteMark";

const PORTAL_URL = "https://roasters.theroastline.com";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-cream/85 backdrop-blur-md">
      <div className="site-wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-espresso">
            <RouteMark size={22} stroke="#F5EEE3" stop="#B75934" />
          </span>
          <span className="font-serif text-xl leading-none text-ink">
            <span className="italic">The</span> Roastline
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-coffee md:flex">
          <a href="#winwin" className="transition-colors hover:text-ink">
            The win–win
          </a>
          <a href="#how" className="transition-colors hover:text-ink">
            How it works
          </a>
          <a href="#roasters" className="transition-colors hover:text-ink">
            For coffee shops
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PORTAL_URL}
            className="hidden text-sm font-medium text-coffee transition-colors hover:text-ink sm:inline"
          >
            Roaster login
          </a>
          <a href="#get-app" className="btn-primary px-5 py-2.5 text-sm">
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
