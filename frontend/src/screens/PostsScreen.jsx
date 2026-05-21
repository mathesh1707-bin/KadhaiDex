import { useState } from "react";
import { COLORS, CATEGORIES, pixel, pixelBtn } from "../constants/theme";
import PixelAvatar from "../components/ui/PixelAvatar";
import PixelBadge from "../components/ui/PixelBadge";
import PixelInput from "../components/ui/PixelInput";

const PostsScreen = ({ posts, setScreen, setSelectedPost }) => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
      <div
        style={{ fontSize: "10px", color: COLORS.deepBrown, marginBottom: 24, letterSpacing: "2px" }}
      >
        ◆ ALL ENTRIES [{filtered.length}]
      </div>

      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 20,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <PixelInput
          placeholder="SEARCH..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 220, fontSize: "8px" }}
        />
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              style={{
                ...pixelBtn,
                fontSize: "7px",
                padding: "6px 10px",
                background: category === c ? COLORS.deepBrown : COLORS.lightPeach,
                color: category === c ? COLORS.cream : COLORS.deepBrown,
                boxShadow: category === c ? "none" : `2px 2px 0 ${COLORS.deepBrown}`,
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "48px 24px",
            background: COLORS.white,
            border: pixel(3),
            boxShadow: `4px 4px 0 ${COLORS.deepBrown}`,
          }}
        >
          <div style={{ fontSize: "24px", marginBottom: 16 }}>🔍</div>
          <div style={{ fontSize: "8px", color: COLORS.midBrown, lineHeight: "2.2" }}>
            {posts.length === 0 ? "NO POSTS YET. BE THE FIRST!" : "NO RESULTS FOUND."}
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {filtered.map((post) => (
            <div
              key={post.id}
              style={{
                background: COLORS.white,
                border: pixel(3),
                boxShadow: `4px 4px 0 ${COLORS.deepBrown}`,
                padding: "18px 22px",
                cursor: "pointer",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
              onClick={() => {
                setSelectedPost(post);
                setScreen("detail");
              }}
            >
              <PixelAvatar name={post.author} size={44} />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    marginBottom: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <PixelBadge label={post.category} />
                  <span style={{ fontSize: "7px", color: COLORS.midBrown }}>{post.date}</span>
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: COLORS.deepBrown,
                    marginBottom: 6,
                    lineHeight: "1.6",
                  }}
                >
                  {post.title}
                </div>
                <div style={{ fontSize: "7px", color: COLORS.midBrown }}>
                  BY {post.author.toUpperCase()} · ♥ {post.likes} · 💬 {post.comments.length} COMMENTS
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsScreen;
