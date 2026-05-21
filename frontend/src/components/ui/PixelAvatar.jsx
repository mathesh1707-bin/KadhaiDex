import { COLORS, pixel } from "../../constants/theme";

const PixelAvatar = ({ name, size = 36 }) => {
  const colors = [COLORS.salmon, COLORS.peach, COLORS.lightPeach, COLORS.darkSalmon];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      style={{
        width: size,
        height: size,
        background: color,
        border: pixel(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Press Start 2P', monospace",
        fontSize: size / 4,
        color: COLORS.deepBrown,
        flexShrink: 0,
        imageRendering: "pixelated",
      }}
    >
      {name[0].toUpperCase()}
    </div>
  );
};

export default PixelAvatar;
