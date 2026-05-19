import { style, createVar, globalStyle } from "@vanilla-extract/css";

export const homeBlock = style({
  padding: 32,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

globalStyle(`${homeBlock} > .empty`, {
  height: "100vh",
});

globalStyle(`${homeBlock} > .page`, {
  width: "100%",
  backgroundColor: "antiquewhite",
});

export const percentOpacity = createVar();
export const percentTop = createVar();
export const percentLeft = createVar();
export const percentRotate = createVar();

export const logoItem = style({
  width: "100%",
  height: "50vh",
  backgroundColor: "#112334",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

globalStyle(`${logoItem} > span`, {
  color: "white",
  fontWeight: 700,
  fontSize: 48,
  opacity: percentOpacity,
  position: "absolute",
  top: percentTop,
  left: percentLeft,
  transform: `rotate(${percentRotate})`,
  transition: "all 0.3s",
});
