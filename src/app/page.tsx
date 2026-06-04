import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LineStop } from "@/components/LineStop";
import { RouteMark, RouteBadge } from "@/components/RouteMark";

const PORTAL_URL = "https://roasters.theroastline.com";
const EMAIL = "info@theroastline.com";
const PHONE = "(786) 660-5599";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WinWin />
        <HowItWorks />
        <Roasters />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #89BAD3 0%, transparent 70%)" }}
      />
      <div className="site-wrap relative grid items-center gap-14 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start">
          <StationTag color="#B75934" label="Now boarding" />
          <h1 className="h-display mt-6 text-5xl text-ink sm:text-6xl md:text-[4.2rem]">
            The train to
            <br />
            <span className="italic text-terracotta">break the chain.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-coffee">
            The Roastline connects coffee shops with local consumers by turning
            discounts into discovery. Consumers save, shops grow, and local
            coffee culture thrives.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#get-app" className="btn-primary">
              Get the app
            </a>
            <a href="#how" className="btn-ghost">
              See how it works
            </a>
          </div>
          <div className="mt-8">
            <LineStop width={200} />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative w-[280px] rounded-[2.6rem] border-[10px] border-espresso bg-cream shadow-lift">
      <div className="overflow-hidden rounded-[2rem]">
        <div className="flex flex-col items-center gap-3 bg-cream px-6 pb-6 pt-10">
          <RouteBadge size={72} />
          <div className="font-serif text-2xl leading-none text-ink">
            <span className="italic">The</span> Roastline
          </div>
          <LineStop width={120} />
        </div>
        <div className="space-y-3 bg-cream px-5 pb-8">
          <p className="label-eyebrow pl-1">Deals near you</p>
          <DealRow name="Oat Latte" shop="Origin & Oak" was="6.60" now="5.61" off="15" />
          <DealRow name="Cold Brew" shop="Terminal Coffee" was="4.50" now="3.60" off="20" />
          <DealRow name="Cortado" shop="Junction Roasters" was="4.20" now="3.78" off="10" />
        </div>
      </div>
    </div>
  );
}

function DealRow({
  name,
  shop,
  was,
  now,
  off,
}: {
  name: string;
  shop: string;
  was: string;
  now: string;
  off: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-brand bg-card p-2.5 shadow-card">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream">
        <RouteMark size={20} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{name}</p>
        <p className="truncate text-xs text-inksoft">{shop}</p>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-sm font-bold text-terracotta">${now}</p>
        <p className="text-[11px] text-inksoft">
          <span className="line-through">${was}</span>
          <span className="ml-1 font-semibold text-terracotta">−{off}%</span>
        </p>
      </div>
    </div>
  );
}

function Marquee() {
  const items = [
    "TURNING DISCOUNTS INTO DISCOVERY",
    "NO UPFRONT FEES",
    "PAY ONLY FOR RESULTS",
    "SUPPORT LOCAL CAFÉS",
    "BREAK THE CHAIN",
  ];
  return (
    <div className="border-y border-hairline bg-card">
      <div className="site-wrap flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 text-xs font-medium uppercase tracking-[0.16em] text-inksoft">
        {items.map((it, i) => (
          <span key={it} className="flex items-center gap-6">
            {it}
            {i < items.length - 1 && (
              <span className="hidden h-1.5 w-1.5 rounded-full bg-terracotta sm:inline-block" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function WinWin() {
  return (
    <section id="winwin" className="py-24">
      <div className="site-wrap">
        <SectionHead
          color="#634C42"
          station="The win–win"
          title="One line. Two riders."
          sub="Independent cafés and everyday coffee drinkers are heading the same way — The Roastline just connects the tracks."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <RiderCard
            line="Coffee Line"
            color="#B75934"
            who="For coffee shops"
            problem="Independent cafés face a daily challenge: how to bring in new customers without wasting money on marketing that doesn't convert, all while competing with the big chains."
            solution="The Roastline turns marketing into measurable results. Instead of paying for ads that may not work, cafés only “pay” when a customer actually walks through the door."
          />
          <RiderCard
            line="Crema Line"
            color="#89BAD3"
            who="For coffee lovers"
            problem="Most people buy their daily coffee from big chains — not because it's better, but because it's familiar and convenient."
            solution="The Roastline makes it easy — and rewarding — to break the chain. By turning discounts into discovery, the app helps you explore local cafés while you save."
          />
        </div>
      </div>
    </section>
  );
}

function RiderCard({
  line,
  color,
  who,
  problem,
  solution,
}: {
  line: string;
  color: string;
  who: string;
  problem: string;
  solution: string;
}) {
  return (
    <div className="overflow-hidden rounded-brand-lg border border-hairline bg-card shadow-card">
      <div className="h-1.5 w-full" style={{ backgroundColor: color }} />
      <div className="p-7">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-inksoft">
            {line}
          </span>
        </div>
        <h3 className="mt-3 font-serif text-2xl text-ink">{who}</h3>
        <div className="mt-5 space-y-4">
          <Beat label="The problem" body={problem} muted />
          <Beat label="On The Roastline" body={solution} color={color} />
        </div>
      </div>
    </div>
  );
}

function Beat({
  label,
  body,
  color,
  muted,
}: {
  label: string;
  body: string;
  color?: string;
  muted?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <span
        className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
        style={{ backgroundColor: muted ? "#AD8B7C" : color }}
      />
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-inksoft">
          {label}
        </p>
        <p className="mt-1 text-[15px] leading-relaxed text-coffee">{body}</p>
      </div>
    </div>
  );
}

function HowItWorks() {
  const stops = [
    {
      title: "Join the Line",
      body: "List your café on The Roastline in minutes — set your own discount (say, 25%) and decide when to offer it. No upfront fees.",
    },
    {
      title: "Get Featured Locally",
      body: "Your shop appears in the app's discovery feed for nearby users looking for their next cup.",
    },
    {
      title: "Pay Only for Results",
      body: "You don't spend a dollar until a customer walks through the door and redeems a discount.",
    },
    {
      title: "Build Loyalty",
      body: "Keep them coming back with in-app loyalty stamps, limited offers, and “favorite café” perks.",
    },
  ];
  return (
    <section id="how" className="bg-card py-24">
      <div className="site-wrap">
        <SectionHead
          color="#B75934"
          station="How it works"
          title="Four stops to a fuller café."
        />
        <div className="mt-16 grid gap-y-12 md:grid-cols-4 md:gap-x-8">
          {stops.map((s, i) => (
            <div key={s.title} className="relative">
              {i < stops.length - 1 && (
                <div className="absolute left-6 top-6 hidden h-[3px] w-full bg-terracotta/30 md:block">
                  <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-terracotta" />
                </div>
              )}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-terracotta bg-card font-serif text-lg text-ink">
                {i + 1}
              </div>
              <h3 className="mt-5 font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-coffee">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roasters() {
  const points = [
    "List your shop and menu in minutes — no upfront fees",
    "Set your own discounts and decide when they run",
    "A live order inbox that streams new orders in real time",
    "A sales dashboard with revenue, top sellers, and trends",
  ];
  return (
    <section id="roasters" className="relative overflow-hidden bg-espresso py-24 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #B75934 0%, transparent 70%)" }}
      />
      <div className="site-wrap relative grid items-center gap-14 md:grid-cols-2">
        <div>
          <p className="label-eyebrow text-cream/60">For coffee shops</p>
          <h2 className="h-display mt-3 text-4xl text-cream md:text-5xl">
            Put your café on
            <br />
            <span className="italic text-sky">the line.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/75">
            The Roastline is a flexible marketing channel where you only pay for
            results. Manage orders, menu, and discounts from your own dashboard —
            no new hardware required.
          </p>
          <ul className="mt-8 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-cream/90">
                <span className="mt-1.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-terracotta text-[10px] font-bold text-white">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`${PORTAL_URL}/sign-up`} className="btn-primary">
              Open your shop
            </a>
            <a href={PORTAL_URL} className="btn-ondark">
              Roaster login
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm rounded-brand-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="label-eyebrow text-cream/60">Today</p>
              <RouteMark size={26} stroke="#F5EEE3" stop="#B75934" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <Stat label="Revenue" value="$326" />
              <Stat label="Orders" value="48" />
              <Stat label="Items" value="71" />
            </div>
            <div className="mt-5 space-y-2.5">
              <OrderRow name="Maya R." item="2 items" status="New" tint="#B75934" />
              <OrderRow name="Devin K." item="1 item" status="Preparing" tint="#C98A3A" />
              <OrderRow name="Priya S." item="3 items" status="Ready" tint="#3E7C5A" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-brand bg-white/5 py-3">
      <p className="font-serif text-2xl text-cream">{value}</p>
      <p className="mt-0.5 text-[11px] uppercase tracking-wider text-cream/55">{label}</p>
    </div>
  );
}

function OrderRow({
  name,
  item,
  status,
  tint,
}: {
  name: string;
  item: string;
  status: string;
  tint: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-brand bg-white/[0.04] px-4 py-2.5">
      <div>
        <p className="text-sm font-semibold text-cream">{name}</p>
        <p className="text-xs text-cream/55">{item}</p>
      </div>
      <span
        className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
        style={{ backgroundColor: tint }}
      >
        {status}
      </span>
    </div>
  );
}

function Contact() {
  return (
    <section id="get-app" className="py-24">
      <div className="site-wrap">
        <div className="relative overflow-hidden rounded-brand-lg bg-card px-8 py-16 text-center shadow-card">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
            style={{ background: "linear-gradient(90deg,#B75934 0%,#AD8B7C 40%,#89BAD3 100%)" }}
          />
          <div className="mx-auto flex max-w-xl flex-col items-center">
            <RouteBadge size={84} />
            <h2 className="h-display mt-6 text-4xl text-ink md:text-5xl">
              Ride the line tomorrow morning.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-coffee">
              The Roastline app is launching soon on iOS. Be first on board.
            </p>
            <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full rounded-full border border-hairline bg-cream px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-tan focus:border-terracotta"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Notify me
              </button>
            </form>
            <p className="mt-6 text-sm text-inksoft">
              Questions? Reach us at{" "}
              <a href={`mailto:${EMAIL}`} className="font-medium text-terracotta hover:underline">
                {EMAIL}
              </a>{" "}
              ·{" "}
              <a href={`tel:+17866605599`} className="font-medium text-terracotta hover:underline">
                {PHONE}
              </a>
            </p>
            <div className="mt-8">
              <LineStop width={180} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StationTag({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-coffee">
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}

function SectionHead({
  color,
  station,
  title,
  sub,
}: {
  color: string;
  station: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      <StationTag color={color} label={station} />
      <h2 className="h-display mt-4 text-4xl text-ink md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-coffee">{sub}</p>}
    </div>
  );
}
