import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { cleanServiceSlug } from "@/lib/site-navigation";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { FlooringInstallationPage } from "@/pages/FlooringInstallationPage";
import { FlooringRepairPage } from "@/pages/FlooringRepairPage";
import { FlooringReplacementPage } from "@/pages/FlooringReplacementPage";
import { CommercialEpoxyFlooringPage } from "@/pages/CommercialEpoxyFlooringPage";
import { GarageEpoxyFlooringPage } from "@/pages/GarageEpoxyFlooringPage";

export const Route = createFileRoute("/service/$slug")({
  head: ({ params }) => {
    const slug = cleanServiceSlug(params.slug);
    const title = `${slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")} Vancouver BC | Ironclad Commercial Floors`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `Professional ${slug.replace(/-/g, " ")} in Vancouver, BC. Ironclad Commercial Floors delivers 24/7 commercial flooring services across the Lower Mainland. Call (604) 540-3999.`,
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: `Professional ${slug.replace(/-/g, " ")} in Vancouver, BC. Call (604) 540-3999 for a free on-site estimate.`,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug: rawSlug } = Route.useParams();
  const slug = cleanServiceSlug(rawSlug);

  return (
    <SiteLayout page={`service-${slug}`}>
      {({ onNavigate, onOpenBooking }) => {
        switch (slug) {
          case "flooring-installation":
            return (
              <FlooringInstallationPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          case "flooring-repair":
            return (
              <FlooringRepairPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          case "flooring-replacement":
            return (
              <FlooringReplacementPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          case "commercial-epoxy-flooring":
            return (
              <CommercialEpoxyFlooringPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          case "garage-epoxy-flooring":
            return (
              <GarageEpoxyFlooringPage
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
          default:
            return (
              <ServiceDetailPage
                slug={slug}
                onNavigate={onNavigate}
                onOpenBooking={onOpenBooking}
              />
            );
        }
      }}
    </SiteLayout>
  );
}
