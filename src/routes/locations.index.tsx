import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LocationsPage } from "@/pages/LocationsPage";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      {
        title: "Flooring Service Areas Vancouver BC | Ironclad Commercial Floors",
      },
      {
        name: "description",
        content:
          "Ironclad Commercial Floors serves Vancouver, Burnaby, Surrey, Richmond, Coquitlam and the entire Lower Mainland with 24/7 commercial flooring services.",
      },
      {
        property: "og:title",
        content:
          "Flooring Service Areas Vancouver BC | Ironclad Commercial Floors",
      },
      {
        property: "og:description",
        content:
          "Serving Vancouver, Burnaby, Surrey, Richmond, Coquitlam and the entire Lower Mainland — 24/7 commercial flooring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Locations,
});

function Locations() {
  return (
    <SiteLayout page="locations">
      {({ onNavigate, onOpenBooking }) => (
        <LocationsPage
          onNavigate={onNavigate}
          onOpenBooking={() => onOpenBooking()}
        />
      )}
    </SiteLayout>
  );
}
