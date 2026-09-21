import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BlogsPage } from "@/pages/BlogsPage";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      {
        title: "Commercial Flooring Blog & Guides | Ironclad Vancouver",
      },
      {
        name: "description",
        content:
          "Expert guides on commercial flooring in Vancouver — epoxy vs polished concrete, carpet tile buying tips, maintenance schedules and cost breakdowns from Ironclad Commercial Floors.",
      },
      {
        property: "og:title",
        content: "Commercial Flooring Blog & Guides | Ironclad Vancouver",
      },
      {
        property: "og:description",
        content:
          "Expert guides on commercial flooring in Vancouver — epoxy, polished concrete, carpet tile and maintenance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blogs,
});

function Blogs() {
  return (
    <SiteLayout page="blogs">
      {({ onNavigate }) => <BlogsPage onNavigate={onNavigate} />}
    </SiteLayout>
  );
}
