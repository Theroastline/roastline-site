// Transit "line stop" rule: a bar with open/terracotta stops — the brand's
// section accent/divider. Mirrors BrandLineStop in the iOS app.

export function LineStop({
  width = 160,
  onDark = false,
}: {
  width?: number;
  onDark?: boolean;
}) {
  const bar = onDark ? "rgba(245,238,227,0.5)" : "#3C1F13";
  const openBorder = onDark ? "#F5EEE3" : "#3C1F13";
  const openFill = onDark ? "#3C1F13" : "#FFFFFF";
  return (
    <div className="relative flex items-center" style={{ width, height: 14 }}>
      <div
        className="absolute inset-x-0 rounded-full"
        style={{ height: 3, backgroundColor: bar }}
      />
      <div className="relative flex w-full items-center justify-between">
        <Stop open openFill={openFill} openBorder={openBorder} />
        <Stop openFill={openFill} openBorder={openBorder} />
        <Stop open openFill={openFill} openBorder={openBorder} />
      </div>
    </div>
  );
}

function Stop({
  open = false,
  openFill,
  openBorder,
}: {
  open?: boolean;
  openFill: string;
  openBorder: string;
}) {
  return (
    <span
      className="block rounded-full"
      style={{
        width: 12,
        height: 12,
        backgroundColor: open ? openFill : "#B75934",
        border: open ? `3px solid ${openBorder}` : "none",
      }}
    />
  );
}
