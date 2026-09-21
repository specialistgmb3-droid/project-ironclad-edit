import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicesPage } from "@/pages/ServicesPage";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "Commercial Flooring Services Vancouver BC | Ironclad",
      },
      {
        name: "description",
        content:
          "Commercial flooring services in Vancouver BC: flooring installation, repair, replacement, epoxy flooring, concrete polishing, carpet tile & luxury vinyl. Free estimates.",
      },
      {
        property: "og:title",
        content: "Commercial Flooring Services Vancouver BC | Ironclad",
      },
      {
        property: "og:description",
        content:
          "Flooring installation, repair, replacement, epoxy flooring, concrete polishing, carpet tile & luxury vinyl across Vancouver and the Lower Mainland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout page="services">
      {({ onNavigate, onOpenBooking }) => (
        <ServicesPage onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
      )}
    </SiteLayout>
  );
}
