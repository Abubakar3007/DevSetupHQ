import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DevSetupHQ" },
      {
        name: "description",
        content:
          "How DevSetupHQ handles visitor data, analytics and newsletter subscriptions across the site.",
      },
      { property: "og:title", content: "Privacy Policy — DevSetupHQ" },
      {
        property: "og:description",
        content: "How DevSetupHQ handles visitor data, analytics and newsletter subscriptions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gear-discovery-pro.lovable.app/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://gear-discovery-pro.lovable.app/privacy-policy" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="A placeholder policy describing how DevSetupHQ intends to handle visitor information. Replace this with your reviewed legal copy before launch."
      sections={[
        {
          heading: "What we collect",
          body: [
            "We collect anonymous usage statistics such as pages visited and general location, and the email address you give us if you subscribe to the newsletter.",
            "We do not ask for payment details, and we do not sell personal data.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "Analytics cookies help us understand which guides are useful. Affiliate partners may set their own cookies when you follow an outbound product link.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You can unsubscribe from the newsletter at any time using the link in any email, or write to support@devsetuphq.com to request removal of your data.",
          ],
        },
      ]}
    />
  ),
});
