import { useEffect, useRef, useState } from "react";
import { COLORS, pixel, pixelBtn } from "../../constants/theme";

const MusicPlayer = ({ src = "/music/trainer.mp3" }) => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    // Create audio purely in JS — no DOM <audio> tag for IDM to sniff
    const audio = new Audio();
    audio.volume = 0.4;
    audio.loop = true;
    audioRef.current = audio;

    const onInteract = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audio.src = src; // set src only at play time, not on mount
      audio.play().catch(() => {});
      window.removeEventListener("click", onInteract);
      window.removeEventListener("keydown", onInteract);
    };

    window.addEventListener("click", onInteract);
    window.addEventListener("keydown", onInteract);

    return () => {
      window.removeEventListener("click", onInteract);
      window.removeEventListener("keydown", onInteract);
      audio.pause();
      audio.src = "";
    };
  }, [src]);

  const toggleMute = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (!startedRef.current) {
      startedRef.current = true;
      audio.src = src;
      audio.play().catch(() => {});
    }

    const next = !muted;
    audio.muted = next;
    setMuted(next);
  };

  return (
    <button
      onClick={toggleMute}
      title={muted ? "Unmute music" : "Mute music"}
      style={{
        ...pixelBtn,
        fontSize: "8px",
        padding: "6px 10px",
        background: muted ? COLORS.lightPeach : COLORS.salmon,
        color: COLORS.deepBrown,
        boxShadow: `2px 2px 0 ${COLORS.deepBrown}`,
        border: pixel(2),
      }}
    >
      {muted ? "♪ OFF" : "♪ ON"}
    </button>
  );
};

export default MusicPlayer;