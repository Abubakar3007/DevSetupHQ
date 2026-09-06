import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure — SetupForge" },
      {
        name: "description",
        content:
          "SetupForge may earn a commission when you purchase through links on our site, at no extra cost to you. Here is how that works.",
      },
      { property: "og:title", content: "Affiliate Disclosure — SetupForge" },
      {
        property: "og:description",
        content:
          "We may earn a commission when you purchase through links on our site, at no extra cost to you.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/affiliate-disclosure" },
    ],
    links: [{ rel: "canonical", href: "/affiliate-disclosure" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Affiliate Disclosure"
      intro="We may earn a commission when you purchase through links on our site, at no extra cost to you."
      sections={[
        {
          heading: "How it works",
          body: [
            "Some outbound product links on SetupForge are affiliate links. If you buy something after following one, the retailer may pay us a small share of the sale. The price you pay is the same either way.",
          ],
        },
        {
          heading: "How it affects our picks",
          body: [
            "It doesn't. Products are selected on research and testing, and we name the drawbacks of every recommendation. A product cannot pay to appear on SetupForge.",
          ],
        },
        {
          heading: "Questions",
          body: [
            "Write to support@setupforge.com if you'd like more detail about a specific recommendation or partnership.",
          ],
        },
      ]}
    />
  ),
});
