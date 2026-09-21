import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AboutPage } from "@/pages/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Ironclad Commercial Floors | Vancouver Flooring Contractor",
      },
      {
        name: "description",
        content:
          "Meet Ironclad Commercial Floors — Vancouver's trusted commercial flooring contractor for concrete polishing, epoxy coatings, carpet tile and luxury vinyl. 24/7 service across the Lower Mainland.",
      },
      {
        property: "og:title",
        content:
          "About Ironclad Commercial Floors | Vancouver Flooring Contractor",
      },
      {
        property: "og:description",
        content:
          "Vancouver's trusted commercial flooring contractor — 24/7 dustless concrete polishing, epoxy coatings and resilient floor coverings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout page="about">
      {({ onNavigate, onOpenBooking }) => (
        <AboutPage
          onNavigate={onNavigate}
          onOpenBooking={() => onOpenBooking()}
        />
      )}
    </SiteLayout>
  );
}
