import { createFileRoute } from "@tanstack/react-router";

import { setups } from "@/data/catalog";
import { PageHeader } from "@/components/ui-bits";
import { SetupCard } from "@/components/SetupCard";

export const Route = createFileRoute("/setups/")({
  head: () => ({
    meta: [
      { title: "Developer Setup Inspiration — DevSetupHQ" },
      {
        name: "description",
        content:
          "Explore carefully designed developer workspaces built for coding, productivity and deep focus, with the gear behind each one.",
      },
      { property: "og:title", content: "Developer Setup Inspiration — DevSetupHQ" },
      {
        property: "og:description",
        content: "Workspaces built for coding, productivity and deep focus.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gear-discovery-pro.lovable.app/setups" },
    ],
    links: [{ rel: "canonical", href: "https://gear-discovery-pro.lovable.app/setups" }],
  }),
  component: SetupsPage,
});

function SetupsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Setups"
        title="Developer Setup Inspiration"
        intro="Explore carefully designed workspaces built for coding, productivity, and deep focus."
      />

      <section className="bg-white">
        <div className="shell py-16 md:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {setups.map((setup) => (
              <SetupCard key={setup.slug} setup={setup} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
