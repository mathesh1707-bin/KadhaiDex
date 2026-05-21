import { COLORS, pixel, pixelBtn } from "../../constants/theme";
import PixelAvatar from "../ui/PixelAvatar";
import MusicPlayer from "../ui/MusicPlayer";

const TopBar = ({ screen, setScreen, currentUser, setCurrentUser, setShowAuth }) => (
  <div
    style={{
      background: COLORS.salmon,
      borderBottom: pixel(4),
      boxShadow: `0 4px 0 ${COLORS.deepBrown}`,
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{ display: "flex", gap: 6 }}>
        {["#ff4444", "#ffbb00", "#44ff44"].map((c, i) => (
          <div
            key={i}
            style={{ width: 12, height: 12, background: c, border: pixel(2), borderRadius: 0 }}
          />
        ))}
      </div>
      <span
        style={{ fontSize: "11px", color: COLORS.deepBrown, cursor: "pointer", letterSpacing: "1px" }}
        onClick={() => setScreen("home")}
      >
        ◆ KADHAIDEX
      </span>
    </div>

    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <MusicPlayer src="/music/trainer.mp3" />  {/* 👈 add this */}

      {[
        { id: "home", label: "HOME" },
        { id: "posts", label: "POSTS" },
        { id: "new", label: "+ POST" },
      ].map((s) => (
        <button
          key={s.id}
          onClick={() => (currentUser ? setScreen(s.id) : setShowAuth(true))}
          style={{
            ...pixelBtn,
            fontSize: "7px",
            padding: "6px 10px",
            background: screen === s.id ? COLORS.deepBrown : COLORS.lightPeach,
            color: screen === s.id ? COLORS.cream : COLORS.deepBrown,
            boxShadow: screen === s.id ? "none" : `2px 2px 0 ${COLORS.deepBrown}`,
          }}
        >
          {s.label}
        </button>
      ))}
      {currentUser ? (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <PixelAvatar name={currentUser} size={28} />
          <button
            onClick={() => setCurrentUser(null)}
            style={{ ...pixelBtn, fontSize: "7px", padding: "6px 10px", background: COLORS.peach }}
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowAuth(true)}
          style={{ ...pixelBtn, fontSize: "7px", padding: "6px 10px", background: COLORS.cream }}
        >
          LOGIN
        </button>
      )}
    </div>
  </div>
);

export default TopBar;
