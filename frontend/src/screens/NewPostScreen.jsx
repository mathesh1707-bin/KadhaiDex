import { useState } from "react";
import { COLORS, CATEGORIES, pixel, pixelBtn } from "../constants/theme";
import PixelInput from "../components/ui/PixelInput";
import PixelTextarea from "../components/ui/PixelTextarea";

const NewPostScreen = ({ currentUser, setPosts, posts, setScreen, setShowAuth }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Journal");

  const submit = () => {
    if (!currentUser) {
      setShowAuth(true);
      return;
    }
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      category,
      author: currentUser,
      date: new Date().toISOString().slice(0, 10),
      comments: [],
      likes: 0,
    };

    setPosts([newPost, ...posts]);
    setScreen("posts");
  };

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 24px" }}>
      <div
        style={{ fontSize: "10px", color: COLORS.deepBrown, marginBottom: 24, letterSpacing: "2px" }}
      >
        ◆ NEW ENTRY
      </div>

      <div
        style={{
          background: COLORS.white,
          border: pixel(4),
          boxShadow: `6px 6px 0 ${COLORS.deepBrown}`,
          padding: 28,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Title */}
          <div>
            <div style={{ fontSize: "7px", color: COLORS.midBrown, marginBottom: 8 }}>TITLE</div>
            <PixelInput
              placeholder="your post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Category */}
          <div>
            <div style={{ fontSize: "7px", color: COLORS.midBrown, marginBottom: 8 }}>CATEGORY</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {CATEGORIES.filter((c) => c !== "All").map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  style={{
                    ...pixelBtn,
                    fontSize: "7px",
                    padding: "5px 10px",
                    background: category === c ? COLORS.salmon : COLORS.lightPeach,
                    boxShadow: category === c ? "none" : `2px 2px 0 ${COLORS.deepBrown}`,
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <div style={{ fontSize: "7px", color: COLORS.midBrown, marginBottom: 8 }}>CONTENT</div>
            <PixelTextarea
              placeholder="write your story..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ minHeight: 200 }}
            />
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={submit}
              style={{ ...pixelBtn, background: COLORS.salmon, flex: 1 }}
            >
              ▶ PUBLISH POST
            </button>
            <button
              onClick={() => setScreen("posts")}
              style={{ ...pixelBtn, background: COLORS.lightPeach }}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostScreen;
