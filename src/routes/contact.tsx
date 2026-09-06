import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHeader } from "@/components/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DevSetupHQ" },
      {
        name: "description",
        content:
          "Questions, product suggestions or partnership enquiries? Send the DevSetupHQ team a message or email support@devsetuphq.com.",
      },
      { property: "og:title", content: "Contact DevSetupHQ" },
      {
        property: "og:description",
        content: "Send the DevSetupHQ team a message or email support@devsetuphq.com.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gear-discovery-pro.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://gear-discovery-pro.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full bg-white border border-brand/15 rounded-[8px] px-4 py-3 font-sans text-sm text-brand placeholder:text-brand/40 transition-colors focus:outline-none focus:border-accent";
const labelClass = "font-mono text-[10px] uppercase tracking-[0.15em] text-steel";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what to test next"
        intro="Product suggestions, corrections, or questions about a guide — we read everything that comes in."
      />

      <section className="bg-white">
        <div className="shell py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              {sent ? (
                <div className="bg-paper rounded-[10px] ring-1 ring-black/5 p-8">
                  <h2 className="font-display text-2xl text-brand">Message received</h2>
                  <p className="mt-3 font-sans text-sm text-brand/65 leading-relaxed">
                    Thanks — we'll reply from support@devsetuphq.com, usually within two working
                    days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-accent"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Alex Rivera"
                        className={`mt-2 ${fieldClass}`}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@studio.com"
                        className={`mt-2 ${fieldClass}`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Product suggestion"
                      className={`mt-2 ${fieldClass}`}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="What should we look at?"
                      className={`mt-2 ${fieldClass} resize-y`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
                  >
                    Submit <span className="font-mono text-xs">→</span>
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="bg-paper rounded-[10px] ring-1 ring-black/5 p-6">
                <span className="eyebrow">Email</span>
                <p className="mt-3 font-display text-xl text-brand">
                  <a
                    href="mailto:support@devsetuphq.com"
                    className="transition-colors hover:text-accent"
                  >
                    support@devsetuphq.com
                  </a>
                </p>
                <p className="mt-3 font-sans text-sm text-brand/60 leading-relaxed">
                  Placeholder address for now. Replies usually go out within two working days.
                </p>
              </div>

              <div className="mt-5 bg-paper rounded-[10px] ring-1 ring-black/5 p-6">
                <span className="eyebrow">Elsewhere</span>
                <div className="mt-3 flex flex-col gap-2 font-sans text-sm text-brand/70">
                  <a href="#" className="transition-colors hover:text-accent">
                    Pinterest
                  </a>
                  <a href="#" className="transition-colors hover:text-accent">
                    Instagram
                  </a>
                  <a href="#" className="transition-colors hover:text-accent">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
