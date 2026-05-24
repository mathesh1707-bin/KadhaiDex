import { useState } from "react";
import { COLORS, pixel, pixelBtn } from "../../constants/theme";
import PixelInput from "../ui/PixelInput";

const AuthModal = ({ onClose, onLogin }) => {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle = () => {
    if (!username.trim()) return;
    onLogin(username);
    onClose();
  };
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#3a1a1099",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: COLORS.white,
          border: pixel(4),
          boxShadow: `8px 8px 0 ${COLORS.deepBrown}`,
          padding: 32,
          width: 360,
          maxWidth: "90vw",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: "11px", color: COLORS.deepBrown }}>
            {mode === "login" ? "▶ LOGIN" : "▶ REGISTER"}
          </span>
          <div style={{ display: "flex", gap: 6 }}>
            {["LOGIN", "REG"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m === "LOGIN" ? "login" : "register")}
                style={{
                  ...pixelBtn,
                  fontSize: "7px",
                  padding: "5px 8px",
                  background:
                    (mode === "login") === (m === "LOGIN") ? COLORS.salmon : COLORS.cream,
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <div style={{ fontSize: "7px", marginBottom: 6, color: COLORS.midBrown }}>
              TRAINER NAME
            </div>
            <PixelInput
              placeholder="your username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handle()}
            />
          </div>
          <div>
            <div style={{ fontSize: "7px", marginBottom: 6, color: COLORS.midBrown }}>PASSWORD</div>
            <PixelInput
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handle()}
            />
          </div>
          <button
            onClick={handle}
            style={{ ...pixelBtn, width: "100%", background: COLORS.salmon, marginTop: 8 }}
          >
            {mode === "login" ? "▶ ENTER WORLD" : "▶ CREATE TRAINER"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
