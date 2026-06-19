import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export interface LegalSection {
  heading: string;
  /** Each entry is a paragraph; a nested array renders as a bullet list. */
  body: (string | string[])[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main className="site-wrap py-16 md:py-24">
        <article className="mx-auto max-w-2xl">
          <p className="label-eyebrow">Last updated {updated}</p>
          <h1 className="h-display mt-3 text-4xl text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-inksoft">{intro}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-2xl text-ink">{section.heading}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-inksoft">
                  {section.body.map((block, i) =>
                    Array.isArray(block) ? (
                      <ul key={i} className="list-disc space-y-1.5 pl-5">
                        {block.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i}>{block}</p>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
