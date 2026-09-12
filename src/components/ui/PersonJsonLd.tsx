import { profile } from "@/data/profile";
import { stack } from "@/data/stack";
import { siteUrl } from "@/lib/site";

/** Person structured data — helps search engines attribute the work to a real person. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.role,
    email: profile.contact.email,
    description: profile.positioning,
    address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Halic University" },
    knowsAbout: stack.flatMap((group) => group.items),
    sameAs: [profile.contact.github, profile.contact.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
