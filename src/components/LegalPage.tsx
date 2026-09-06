import { PageHeader } from "./ui-bits";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />
      <section className="bg-white">
        <div className="shell py-16 md:py-20">
          <div className="max-w-[66ch]">
            {sections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="font-display text-2xl text-brand">{section.heading}</h2>
                {section.body.map((para) => (
                  <p
                    key={para.slice(0, 32)}
                    className="mt-4 font-sans text-base text-brand/70 leading-[1.75]"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel">
              Last updated — September 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
