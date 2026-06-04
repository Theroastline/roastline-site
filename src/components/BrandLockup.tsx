// The Roastline logotype lockup — "The" italic serif + "Roastline" serif over a
// transit "line stop" rule and the "RIDE THE COFFEE LINE" tagline. Mirrors the
// SwiftUI BrandLockup so web and app read identically.

export function BrandLockup({
  size = 40,
  onDark = false,
  showTagline = true,
}: {
  size?: number;
  onDark?: boolean;
  showTagline?: boolean;
}) {
  const ink = onDark ? "#F5EEE3" : "#3C1F13";
  const soft = onDark ? "rgba(245,238,227,0.7)" : "#8A7164";

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="flex items-baseline font-serif leading-none"
        style={{ fontSize: size, color: ink }}
      >
        <span className="italic">The</span>
        <span style={{ marginLeft: size * 0.16 }}>Roastline</span>
      </div>
      {showTagline && (
        <>
          <LineStop width={size * 3} />
          <span
            className="font-medium uppercase"
            style={{
              fontSize: size * 0.24,
              letterSpacing: size * 0.1,
              color: soft,
            }}
          >
            Ride the coffee line
          </span>
        </>
      )}
    </div>
  );
}

function LineStop({ width }: { width: number }) {
  return (
    <div
      className="relative flex items-center"
      style={{ width, height: 14 }}
    >
      <div className="absolute inset-x-0 h-1 rounded-full bg-espresso" />
      <div className="relative flex w-full items-center justify-between">
        <Stop open />
        <Stop />
        <Stop open />
      </div>
    </div>
  );
}

function Stop({ open = false }: { open?: boolean }) {
  return (
    <span
      className="block rounded-full"
      style={{
        width: 12,
        height: 12,
        backgroundColor: open ? "#FFFFFF" : "#B75934",
        border: open ? "3px solid #3C1F13" : "none",
      }}
    />
  );
}
