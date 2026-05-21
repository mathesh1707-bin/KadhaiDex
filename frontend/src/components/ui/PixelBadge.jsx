import { COLORS } from "../../constants/theme";

const PixelBadge = ({ label }) => (
  <span
    style={{
      fontFamily: "'Press Start 2P', monospace",
      fontSize: "7px",
      background: COLORS.cream,
      color: COLORS.midBrown,
      border: `2px solid ${COLORS.midBrown}`,
      padding: "3px 7px",
      letterSpacing: "1px",
      imageRendering: "pixelated",
    }}
  >
    {label}
  </span>
);

export default PixelBadge;
