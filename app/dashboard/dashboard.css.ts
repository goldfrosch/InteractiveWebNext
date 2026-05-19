import { createVar, globalStyle, keyframes, style } from "@vanilla-extract/css";

export const themeBackground = createVar();
export const themeForeground = createVar();
export const themeCardBackground = createVar();
export const themeBorder = createVar();
export const themeAccent = createVar();
export const themeMuted = createVar();
export const progressValue = createVar();

const rise = keyframes({
  from: { opacity: 0, transform: "translateY(18px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

globalStyle(":root", {
  vars: {
    [themeBackground]: "#faf8f1",
    [themeForeground]: "#151515",
    [themeCardBackground]: "#fffdf6",
    [themeBorder]: "#222222",
    [themeAccent]: "#f05a28",
    [themeMuted]: "#68645c",
  },
  background: themeBackground,
  color: themeForeground,
});

globalStyle(':root[data-theme="dark"]', {
  vars: {
    [themeBackground]: "#0a0a0a",
    [themeForeground]: "#f4f1e8",
    [themeCardBackground]: "#141414",
    [themeBorder]: "#3a3a34",
    [themeAccent]: "#f6c445",
    [themeMuted]: "#aaa391",
  },
});

globalStyle("body", {
  background:
    `linear-gradient(90deg, color-mix(in srgb, ${themeBorder} 7%, transparent) 1px, transparent 1px), ` +
    `linear-gradient(0deg, color-mix(in srgb, ${themeBorder} 7%, transparent) 1px, transparent 1px), ${themeBackground}`,
  backgroundSize: "40px 40px",
  color: themeForeground,
  fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
});

export const dashboardContainer = style({
  minHeight: "100vh",
  padding: "32px",
  position: "relative",
  color: themeForeground,
  transition: "background 220ms ease, color 220ms ease",
  "@media": {
    "screen and (max-width: 720px)": { padding: "18px" },
  },
});

export const headerBlock = style({
  border: `1px solid ${themeBorder}`,
  background: `linear-gradient(135deg, ${themeCardBackground} 0%, color-mix(in srgb, ${themeAccent} 9%, ${themeCardBackground}) 100%)`,
  padding: "36px",
  boxShadow: `10px 10px 0 color-mix(in srgb, ${themeBorder} 18%, transparent)`,
  animation: `${rise} 480ms ease both`,
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: "",
    position: "absolute",
    inset: 0,
    background:
      "repeating-linear-gradient(135deg, transparent 0 16px, color-mix(in srgb, currentColor 5%, transparent) 16px 17px)",
    pointerEvents: "none",
  },
  "@media": { "screen and (max-width: 720px)": { padding: "24px" } },
});

export const headerKicker = style({
  color: themeAccent,
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0.18em",
  marginBottom: "18px",
  position: "relative",
});

export const headerTitle = style({
  fontSize: "clamp(42px, 9vw, 112px)",
  lineHeight: 0.88,
  letterSpacing: "-0.08em",
  margin: 0,
  maxWidth: "980px",
  position: "relative",
});

export const headerSubtitle = style({
  color: themeMuted,
  fontSize: "clamp(14px, 2vw, 18px)",
  lineHeight: 1.7,
  margin: "24px 0 0",
  maxWidth: "760px",
  position: "relative",
});

export const themeToggle = style({
  position: "fixed",
  top: "24px",
  right: "24px",
  zIndex: 10,
  border: `1px solid ${themeBorder}`,
  background: themeCardBackground,
  color: themeForeground,
  padding: "12px 14px",
  cursor: "pointer",
  boxShadow: `5px 5px 0 ${themeBorder}`,
  fontFamily: "inherit",
  fontWeight: 800,
  transition: "transform 160ms ease, box-shadow 160ms ease",
  ":hover": { transform: "translate(-2px, -2px)", boxShadow: `7px 7px 0 ${themeBorder}` },
  ":active": { transform: "translate(2px, 2px)", boxShadow: `3px 3px 0 ${themeBorder}` },
  "@media": { "screen and (max-width: 720px)": { position: "absolute", top: "18px", right: "18px" } },
});

export const statRail = style({ marginTop: "28px" });

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gap: "12px",
  "@media": {
    "screen and (max-width: 1100px)": { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
    "screen and (max-width: 720px)": { gridTemplateColumns: "1fr" },
  },
});

export const statCard = style({
  border: `1px solid ${themeBorder}`,
  background: themeCardBackground,
  padding: "22px",
  minHeight: "112px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: `0 14px 35px color-mix(in srgb, ${themeBorder} 10%, transparent)`,
  animation: `${rise} 520ms ease both`,
});

export const statLabel = style({
  color: themeMuted,
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0.12em",
});

export const statValue = style({
  fontSize: "clamp(30px, 4vw, 52px)",
  fontWeight: 900,
  letterSpacing: "-0.08em",
});

export const explorerShell = style({ marginTop: "26px" });

export const searchContainer = style({
  position: "relative",
  border: `1px solid ${themeBorder}`,
  background: themeCardBackground,
});

export const searchIcon = style({
  position: "absolute",
  left: "18px",
  top: "50%",
  width: "14px",
  height: "14px",
  border: `2px solid ${themeAccent}`,
  borderRadius: "50%",
  transform: "translateY(-58%)",
  "::after": {
    content: "",
    position: "absolute",
    width: "8px",
    height: "2px",
    background: themeAccent,
    right: "-7px",
    bottom: "-4px",
    transform: "rotate(45deg)",
  },
});

export const searchInput = style({
  width: "100%",
  boxSizing: "border-box",
  border: 0,
  outline: "none",
  background: "transparent",
  color: themeForeground,
  fontFamily: "inherit",
  fontSize: "18px",
  padding: "22px 22px 22px 54px",
  selectors: { "&::placeholder": { color: themeMuted } },
});

export const filterBar = style({
  display: "grid",
  gridTemplateColumns: "1fr auto auto",
  alignItems: "center",
  gap: "12px",
  marginTop: "12px",
  "@media": { "screen and (max-width: 920px)": { gridTemplateColumns: "1fr" } },
});

export const filterGroup = style({ display: "flex", flexWrap: "wrap", gap: "8px" });

export const filterButton = style({
  border: `1px solid ${themeBorder}`,
  background: themeCardBackground,
  color: themeForeground,
  cursor: "pointer",
  fontFamily: "inherit",
  fontWeight: 800,
  padding: "10px 12px",
  transition: "background 160ms ease, transform 160ms ease",
  ":hover": { transform: "translateY(-2px)", background: `color-mix(in srgb, ${themeAccent} 14%, ${themeCardBackground})` },
});

export const filterButtonActive = style({
  background: themeAccent,
  color: "#0a0a0a",
});

export const sortControl = style({
  border: `1px solid ${themeBorder}`,
  background: themeCardBackground,
  color: themeForeground,
  fontFamily: "inherit",
  fontWeight: 800,
  padding: "10px 12px",
  cursor: "pointer",
});

export const resultCount = style({
  color: themeMuted,
  fontWeight: 800,
  whiteSpace: "nowrap",
});

export const projectGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "14px",
  marginTop: "18px",
  "@media": {
    "screen and (max-width: 1180px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "screen and (max-width: 760px)": { gridTemplateColumns: "1fr" },
  },
});

export const projectCard = style({
  border: `1px solid ${themeBorder}`,
  background: themeCardBackground,
  color: themeForeground,
  padding: "18px",
  textAlign: "left",
  fontFamily: "inherit",
  cursor: "pointer",
  minHeight: "280px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  boxShadow: `0 10px 24px color-mix(in srgb, ${themeBorder} 10%, transparent)`,
  transition: "transform 180ms ease, box-shadow 180ms ease, background 180ms ease",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: `0 18px 36px color-mix(in srgb, ${themeBorder} 18%, transparent)`,
    background: `color-mix(in srgb, ${themeAccent} 6%, ${themeCardBackground})`,
  },
});

export const projectCardExpanded = style({
  outline: `3px solid color-mix(in srgb, ${themeAccent} 64%, transparent)`,
});

export const cardTopline = style({ display: "flex", justifyContent: "space-between", gap: "10px", alignItems: "center" });
export const projectName = style({ fontSize: "22px", lineHeight: 1.1, letterSpacing: "-0.06em", margin: 0 });
export const projectDescription = style({ color: themeMuted, lineHeight: 1.55, margin: 0 });

export const badgeRow = style({ display: "flex", flexWrap: "wrap", gap: "8px" });

export const categoryBadge = style({
  border: `1px solid ${themeBorder}`,
  color: themeForeground,
  padding: "6px 8px",
  fontSize: "12px",
  fontWeight: 900,
  textTransform: "uppercase",
});

export const statusBadge = style({
  background: themeForeground,
  color: themeBackground,
  padding: "7px 9px",
  fontSize: "12px",
  fontWeight: 900,
});

export const progressBar = style({
  height: "12px",
  border: `1px solid ${themeBorder}`,
  background: `color-mix(in srgb, ${themeBorder} 10%, transparent)`,
  overflow: "hidden",
});

export const progressFill = style({
  height: "100%",
  width: progressValue,
  background: `repeating-linear-gradient(90deg, ${themeAccent} 0 10px, color-mix(in srgb, ${themeAccent} 70%, ${themeForeground}) 10px 14px)`,
  transition: "width 500ms ease",
});

export const metaLine = style({ display: "flex", justifyContent: "space-between", gap: "12px", color: themeMuted, fontSize: "13px" });

export const teamList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
  marginTop: "4px",
});

export const teamChip = style({
  border: `1px dashed ${themeBorder}`,
  padding: "6px 8px",
  color: themeMuted,
  fontSize: "12px",
});

export const starCount = style({ color: themeAccent, fontWeight: 900, whiteSpace: "nowrap" });

export const expandContent = style({
  borderTop: `1px solid ${themeBorder}`,
  paddingTop: "12px",
  color: themeMuted,
  lineHeight: 1.6,
});

export const emptyState = style({
  gridColumn: "1 / -1",
  border: `1px dashed ${themeBorder}`,
  padding: "36px",
  textAlign: "center",
  color: themeMuted,
  background: themeCardBackground,
});
