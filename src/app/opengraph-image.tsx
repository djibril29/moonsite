import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Moon.innov — Studio digital au Sénégal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const moonSvg = `<svg width="512" height="512" viewBox="175 4 272 272" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
  <g transform="matrix(0.275839,0,0,0.275839,-385.881731,-47.562372)">
    <g transform="matrix(2.217693,0,0,2.217693,-1186.80013,-824.19862)">
      <g transform="matrix(0.678316,0,0,0.678316,917.096249,-484.453968)">
        <circle cx="1116.253" cy="1567.253" r="130.253" style="fill:rgb(255,148,0);"/>
      </g>
      <g transform="matrix(0,-0.71976,0.71976,0,54.809209,1438.213175)">
        <path d="M1071.5,1977C1028.037,2038.25 954.812,2145.287 954.812,2250C954.812,2354.713 1022.037,2461.75 1065.5,2523C920.622,2523 796,2392.378 796,2247.5C796,2102.622 926.622,1977 1071.5,1977Z" style="fill:rgb(255,255,255);"/>
      </g>
      <g transform="matrix(0,-0.71976,0.71976,0,54.809209,1411.928563)">
        <path d="M1071.5,1977C1028.037,2038.25 954.812,2145.287 954.812,2250C954.812,2354.713 1022.037,2461.75 1065.5,2523C920.622,2523 796,2392.378 796,2247.5C796,2102.622 926.622,1977 1071.5,1977Z" style="fill:rgb(255,148,0);"/>
      </g>
    </g>
  </g>
</svg>`;

const moonDataUri = `data:image/svg+xml;base64,${Buffer.from(moonSvg).toString(
  "base64"
)}`;

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
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a2540 0%, #101d33 55%, #0a2540 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={moonDataUri} width={92} height={92} alt="" />
          <div style={{ display: "flex", fontSize: 52, fontWeight: 800 }}>
            <span style={{ color: "#ffffff" }}>Moon</span>
            <span style={{ color: "#ff6a1a" }}>.innov</span>
          </div>
        </div>

        {/* Middle: tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#ffffff",
              maxWidth: 940,
            }}
          >
            Nous délivrons des solutions digitales innovantes pour l’Afrique.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 500,
              color: "#aebfd6",
            }}
          >
            Studio digital basé au Sénégal
          </div>
        </div>

        {/* Bottom: accent bar + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              height: 10,
              width: 220,
              borderRadius: 9999,
              background: "linear-gradient(90deg, #ff6a1a 0%, #2f6bff 100%)",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "#ffffff" }}>
            moon-innov.sn
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
