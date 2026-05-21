import { COLORS } from "../../constants/theme";

const PokedexFrame = ({ children }) => (
  <div
    style={{
      minHeight: "100vh",
      background: `repeating-linear-gradient(
        0deg, transparent, transparent 31px, ${COLORS.lightPeach}44 31px, ${COLORS.lightPeach}44 32px
      ), ${COLORS.cream}`,
      fontFamily: "'Press Start 2P', monospace",
      padding: "0 0 60px",
    }}
  >
    {children}
  </div>
);

export default PokedexFrame;
