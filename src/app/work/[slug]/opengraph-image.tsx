import { ImageResponse } from "next/og";
import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#F5F5F2",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 2, color: "#8A8A85" }}>
          {project?.type.toUpperCase() ?? "SELECTED WORK"}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, letterSpacing: -4, lineHeight: 1 }}>
            {project?.title ?? profile.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 30,
              color: "#8A8A85",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {project?.tagline ?? profile.positioning}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #262624",
            paddingTop: 28,
            fontSize: 24,
            color: "#8A8A85",
          }}
        >
          <span style={{ color: "#FF5C33" }}>{profile.name}</span>
          <span>{project?.year}</span>
        </div>
      </div>
    ),
    size,
  );
}
