import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactPage } from "@/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Ironclad Commercial Floors | Vancouver BC (604) 540-3999",
      },
      {
        name: "description",
        content:
          "Contact Ironclad Commercial Floors for a free on-site estimate in Vancouver, BC. 24/7 dispatch: (604) 540-3999 or info@ironcladcommercialfloors.ca.",
      },
      {
        property: "og:title",
        content:
          "Contact Ironclad Commercial Floors | Vancouver BC (604) 540-3999",
      },
      {
        property: "og:description",
        content:
          "Get a free on-site estimate — 24/7 dispatch: (604) 540-3999 or info@ironcladcommercialfloors.ca.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout page="contact">
      {({ onNavigate }) => <ContactPage onNavigate={onNavigate} />}
    </SiteLayout>
  );
}
