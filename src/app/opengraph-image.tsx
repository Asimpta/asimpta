import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Asimpta — Soluções digitais sob medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FBFAF7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#15171A",
          }}
        >
          Asimpta
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#15171A",
              maxWidth: 780,
            }}
          >
            Soluções digitais sob medida.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#6B6F75",
              lineHeight: 1.4,
              maxWidth: 640,
            }}
          >
            Sites, sistemas e soluções com foco em clareza, performance e resultado.
          </div>
        </div>

        {/* Bottom: domain + accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 20, color: "#6B6F75" }}>asimpta.com.br</div>
          <div
            style={{
              width: 48,
              height: 4,
              borderRadius: 9999,
              background: "#1F4A45",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
