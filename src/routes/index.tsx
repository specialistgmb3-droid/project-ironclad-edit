import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { HomePage } from "@/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Flooring Contractor Vancouver | Ironclad Commercial Floors",
      },
      {
        name: "description",
        content:
          "Commercial Flooring Contractor in Vancouver, BC. Ironclad installs concrete polishing, industrial epoxy, carpet tile & vinyl flooring 24/7. Call (604) 540-3999.",
      },
      {
        property: "og:title",
        content: "Flooring Contractor Vancouver | Ironclad Commercial Floors",
      },
      {
        property: "og:description",
        content:
          "Commercial Flooring Contractor in Vancouver, BC. Ironclad installs concrete polishing, industrial epoxy, carpet tile & vinyl flooring 24/7. Call (604) 540-3999.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
 {
        name: "twitter:title",
        content: "Flooring Contractor Vancouver | Ironclad Commercial Floors",
      },
      {
        name: "twitter:description",
        content:
          "Commercial Flooring Contractor in Vancouver, BC. Concrete polishing, industrial epoxy, carpet tile & vinyl flooring 24/7. Call (604) 540-3999.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout page="home">
      {({ onNavigate, onOpenBooking }) => (
        <HomePage onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
      )}
    </SiteLayout>
  );
}
