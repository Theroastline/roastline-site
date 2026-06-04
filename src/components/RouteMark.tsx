// The Roastline route mark — a serpentine transit line that starts at a
// terracotta "stop" and ends in an arrow. Geometry mirrors the SwiftUI
// RouteMark Canvas in RoastlineApp Theme.swift, drawn on a 100x100 viewBox.

export function RouteMark({
  size = 56,
  stroke = "#3C1F13",
  stop = "#B75934",
  className,
}: {
  size?: number;
  stroke?: string;
  stop?: string;
  className?: string;
}) {
  const w = 100;
  const h = 100;
  const lw = w * 0.16;
  const topY = h * 0.24;
  const midY = h * 0.52;
  const botY = h * 0.8;
  const left = w * 0.2;
  const right = w * 0.74;
  const ax = right + w * 0.04;
  const ay = botY;
  const r = lw * 0.9;

  const path = [
    `M ${left} ${topY}`,
    `L ${right} ${topY}`,
    `C ${right + w * 0.18} ${topY} ${right + w * 0.18} ${midY} ${right} ${midY}`,
    `L ${left} ${midY}`,
    `C ${left - w * 0.18} ${midY} ${left - w * 0.18} ${botY} ${left} ${botY}`,
    `L ${ax} ${botY}`,
  ].join(" ");

  const arrow = [
    `M ${ax + w * 0.14} ${ay}`,
    `L ${ax - w * 0.02} ${ay - h * 0.14}`,
    `L ${ax - w * 0.02} ${ay + h * 0.14}`,
    "Z",
  ].join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={path}
        stroke={stroke}
        strokeWidth={lw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={arrow} fill={stroke} />
      <circle cx={left} cy={topY} r={r} fill={stop} />
    </svg>
  );
}

// The route mark inside the espresso brand badge (as on the app welcome screen):
// cream stroke + terracotta stop on a coffee-brown disc.
export function RouteBadge({ size = 88 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-espresso"
      style={{ width: size, height: size }}
    >
      <RouteMark size={size * 0.62} stroke="#F5EEE3" stop="#B75934" />
    </span>
  );
}
