export function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <MoonMark className={`h-9 w-9 ${dark ? "text-navy" : "text-white"}`} />
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          dark ? "text-ink" : "text-white"
        }`}
      >
        Moon<span className="text-orange">.innov</span>
      </span>
    </div>
  );
}

/** Moon.innov brand mark — orange sun + layered crescent. The crescent's
 * back layer uses currentColor so it stays legible on light or dark surfaces. */
function MoonMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="160 10 300 275"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g transform="matrix(0.275839,0,0,0.275839,-385.881731,-47.562372)">
        <g transform="matrix(2.217693,0,0,2.217693,-1186.80013,-824.19862)">
          <g transform="matrix(0.678316,0,0,0.678316,917.096249,-484.453968)">
            <circle cx="1116.253" cy="1567.253" r="130.253" fill="#ff9400" />
          </g>
          <g transform="matrix(0,-0.71976,0.71976,0,54.809209,1438.213175)">
            <path
              d="M1071.5,1977C1028.037,2038.25 954.812,2145.287 954.812,2250C954.812,2354.713 1022.037,2461.75 1065.5,2523C920.622,2523 796,2392.378 796,2247.5C796,2102.622 926.622,1977 1071.5,1977Z"
              fill="currentColor"
            />
          </g>
          <g transform="matrix(0,-0.71976,0.71976,0,54.809209,1411.928563)">
            <path
              d="M1071.5,1977C1028.037,2038.25 954.812,2145.287 954.812,2250C954.812,2354.713 1022.037,2461.75 1065.5,2523C920.622,2523 796,2392.378 796,2247.5C796,2102.622 926.622,1977 1071.5,1977Z"
              fill="#ff9400"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
