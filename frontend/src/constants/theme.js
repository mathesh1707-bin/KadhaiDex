export const COLORS = {
  salmon: "#ff9a86",
  peach: "#ffb399",
  lightPeach: "#ffd6a6",
  cream: "#fff0be",
  darkSalmon: "#e07060",
  deepBrown: "#3a1a10",
  midBrown: "#7a3020",
  text: "#3a1a10",
  white: "#fffef8",
  shadow: "#c06040",
};

export const CATEGORIES = ["All", "Journal", "Tech", "Dev", "Life"];

export const pixel = (size = 4) => `${size}px solid ${COLORS.deepBrown}`;

export const pixelBorder = {
  border: pixel(3),
  boxShadow: `4px 4px 0px ${COLORS.deepBrown}`,
  imageRendering: "pixelated",
};

export const pixelBtn = {
  fontFamily: "'Press Start 2P', monospace",
  fontSize: "9px",
  padding: "8px 14px",
  border: pixel(3),
  boxShadow: `3px 3px 0px ${COLORS.deepBrown}`,
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "1px",
  background: COLORS.salmon,
  color: COLORS.deepBrown,
  transition: "none",
  imageRendering: "pixelated",
};
