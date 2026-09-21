import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BlogDetailPage } from "@/pages/BlogDetailPage";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      {
        title: `${params.slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")} | Ironclad Commercial Floors`,
      },
      {
        name: "description",
        content:
          "Commercial flooring insights from Ironclad Commercial Floors — Vancouver's 24/7 flooring contractor.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();
  return (
    <SiteLayout page="blog-detail">
      {({ onNavigate, onOpenBooking }) => (
        <BlogDetailPage
          slug={slug}
          onNavigate={onNavigate}
          onOpenBooking={() => onOpenBooking()}
        />
      )}
    </SiteLayout>
  );
}
