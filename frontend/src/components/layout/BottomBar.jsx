import { COLORS, pixel, pixelBtn } from "../../constants/theme";

const BottomBar = ({ screen, setScreen, currentUser }) => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: COLORS.salmon,
      borderTop: pixel(3),
      padding: "8px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 50,
    }}
  >
    <div style={{ fontSize: "7px", color: COLORS.deepBrown, opacity: 0.7 }}>
      ◆ KADHAIDEX v1.0
    </div>
    <div style={{ display: "flex", gap: 16 }}>
      {["HOME", "POSTS", "+ POST"].map((label, i) => {
        const screens = ["home", "posts", "new"];
        return (
          <button
            key={label}
            onClick={() => setScreen(screens[i])}
            style={{
              ...pixelBtn,
              fontSize: "6px",
              padding: "5px 8px",
              background: "transparent",
              border: "none",
              boxShadow: "none",
              color: COLORS.deepBrown,
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
    <div style={{ fontSize: "7px", color: COLORS.deepBrown, opacity: 0.7 }}>
      {currentUser ? `▶ ${currentUser.toUpperCase()}` : "▶ GUEST"}
    </div>
  </div>
);

export default BottomBar;
