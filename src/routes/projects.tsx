import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectsPage } from "@/pages/ProjectsPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Commercial Flooring Projects Vancouver | Ironclad Commercial Floors",
      },
      {
        name: "description",
        content:
          "Browse Ironclad Commercial Floors' completed commercial flooring projects across Vancouver and the Lower Mainland — epoxy, polished concrete, carpet tile and LVP installations.",
      },
      {
        property: "og:title",
        content:
          "Commercial Flooring Projects Vancouver | Ironclad Commercial Floors",
      },
      {
        property: "og:description",
        content:
          "Completed commercial flooring projects across Vancouver — epoxy, polished concrete, carpet tile and LVP installations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <SiteLayout page="projects">
      {({ onNavigate, onOpenBooking }) => (
        <ProjectsPage
          onNavigate={onNavigate}
          onOpenBooking={() => onOpenBooking()}
        />
      )}
    </SiteLayout>
  );
}
