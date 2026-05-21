import { COLORS, pixel } from "../../constants/theme";

const PixelInput = ({ style, ...props }) => (
  <input
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
      boxSizing: "border-box",
      ...style,
    }}
  />
);

export default PixelInput;
