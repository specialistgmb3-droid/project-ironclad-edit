import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LocationDetailPage } from "@/pages/LocationDetailPage";

export const Route = createFileRoute("/location/$slug")({
  head: ({ params }) => ({
    meta: [
      {
        title: `Commercial Flooring ${params.slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")} BC | Ironclad Commercial Floors`,
      },
      {
        name: "description",
        content: `Commercial flooring contractor serving ${params.slug.replace(/-/g, " ")}, BC. Epoxy, polished concrete, carpet tile & LVP installed 24/7 by Ironclad Commercial Floors. Call (604) 540-3999.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationDetail,
});

function LocationDetail() {
  const { slug } = Route.useParams();
  return (
    <SiteLayout page={`location-${slug}`}>
      {({ onNavigate, onOpenBooking }) => (
        <LocationDetailPage
          slug={slug}
          onNavigate={onNavigate}
          onOpenBooking={onOpenBooking}
        />
      )}
    </SiteLayout>
  );
}
