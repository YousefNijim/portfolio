import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

export default function OpengraphImage() {
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
          {profile.location.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 108, letterSpacing: -4, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 44, color: "#FF5C33" }}>
            {profile.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid #262624",
            paddingTop: 28,
            fontSize: 26,
            color: "#8A8A85",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {profile.positioning}
        </div>
      </div>
    ),
    size,
  );
}
