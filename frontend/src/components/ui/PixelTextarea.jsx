import { COLORS, pixel } from "../../constants/theme";

const PixelTextarea = ({ style, ...props }) => (
  <textarea
    {...props}
    style={{
      fontFamily: "'Press Start 2P', monospace",
      fontSize: "9px",
      padding: "10px",
      border: pixel(3),
      background: COLORS.cream,
      color: COLORS.deepBrown,
      width: "100%",
      outline: "none",
      resize: "vertical",
      minHeight: 100,
      boxSizing: "border-box",
      lineHeight: "1.8",
      ...style,
    }}
  />
);

export default PixelTextarea;
