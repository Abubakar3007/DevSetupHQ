import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — SetupForge" },
      {
        name: "description",
        content:
          "The terms covering use of SetupForge, our product recommendations and outbound affiliate links.",
      },
      { property: "og:title", content: "Terms of Service — SetupForge" },
      {
        property: "og:description",
        content: "The terms covering use of SetupForge and our product recommendations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-of-service" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="Placeholder terms for the SetupForge website. Replace with your reviewed legal copy before launch."
      sections={[
        {
          heading: "Using this site",
          body: [
            "SetupForge publishes editorial product research. Content is provided for general information and is not professional advice.",
          ],
        },
        {
          heading: "Product information",
          body: [
            "Prices, specifications and availability change frequently and are confirmed on the retailer's page, not here. Always check the retailer listing before purchasing.",
          ],
        },
        {
          heading: "Outbound links",
          body: [
            "We link to third-party retailers. We are not responsible for their content, pricing, delivery or returns handling.",
          ],
        },
      ]}
    />
  ),
});
