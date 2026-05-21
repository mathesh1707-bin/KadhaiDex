import { COLORS, pixel } from "../constants/theme";
import PixelBadge from "../components/ui/PixelBadge";

const EmptyState = () => (
  <div
    style={{
      textAlign: "center",
      padding: "60px 24px",
      background: COLORS.white,
      border: pixel(4),
      boxShadow: `6px 6px 0 ${COLORS.deepBrown}`,
    }}
  >
    <div style={{ fontSize: "32px", marginBottom: 20 }}>📖</div>
    <div style={{ fontSize: "10px", color: COLORS.deepBrown, marginBottom: 12, lineHeight: "2" }}>
      NO ENTRIES YET
    </div>
    <div style={{ fontSize: "7px", color: COLORS.midBrown, lineHeight: "2.2" }}>
      BE THE FIRST TRAINER TO LOG AN ADVENTURE!
    </div>
  </div>
);

const HomeScreen = ({ posts, setScreen, setSelectedPost }) => {
  if (posts.length === 0) {
    return (
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{ fontSize: "20px", color: COLORS.deepBrown, letterSpacing: "3px", marginBottom: 8 }}
          >
            ◆ KADHAIDEX ◆
          </div>
          <div style={{ fontSize: "8px", color: COLORS.midBrown, letterSpacing: "2px" }}>
            YOUR PIXEL-POWERED ADVENTURE LOG
          </div>
        </div>
        <EmptyState />
      </div>
    );
  }

  const featured = posts[0];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div
          style={{ fontSize: "20px", color: COLORS.deepBrown, letterSpacing: "3px", marginBottom: 8 }}
        >
          ◆ KADHAIDEX ◆
        </div>
        <div style={{ fontSize: "8px", color: COLORS.midBrown, letterSpacing: "2px" }}>
          YOUR PIXEL-POWERED ADVENTURE LOG
        </div>
      </div>

      {/* Featured post */}
      <div
        style={{
          background: COLORS.salmon,
          border: pixel(4),
          boxShadow: `6px 6px 0 ${COLORS.deepBrown}`,
          padding: 28,
          marginBottom: 32,
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
        onClick={() => {
          setSelectedPost(featured);
          setScreen("detail");
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 120,
            height: 120,
            background: COLORS.lightPeach,
            opacity: 0.3,
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        />
        <div style={{ fontSize: "7px", color: COLORS.deepBrown, marginBottom: 10, opacity: 0.8 }}>
          ★ FEATURED POST
        </div>
        <div
          style={{ fontSize: "14px", color: COLORS.deepBrown, marginBottom: 14, lineHeight: "1.6" }}
        >
          {featured.title}
        </div>
        <div style={{ fontSize: "8px", color: COLORS.midBrown, marginBottom: 16 }}>
          BY {featured.author.toUpperCase()} · {featured.date}
        </div>
        <div
          style={{ fontSize: "8px", color: COLORS.deepBrown, lineHeight: "2", opacity: 0.9 }}
        >
          {featured.content.slice(0, 120)}...
        </div>
        <div style={{ marginTop: 16 }}>
          <PixelBadge label={featured.category} />
        </div>
      </div>

      {/* Recent entries */}
      {posts.length > 1 && (
        <>
          <div
            style={{ fontSize: "8px", color: COLORS.midBrown, marginBottom: 16, letterSpacing: "2px" }}
          >
            ◆ RECENT ENTRIES
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {posts.slice(1).map((post) => (
              <div
                key={post.id}
                style={{
                  background: COLORS.white,
                  border: pixel(3),
                  boxShadow: `4px 4px 0 ${COLORS.deepBrown}`,
                  padding: 20,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSelectedPost(post);
                  setScreen("detail");
                }}
              >
                <PixelBadge label={post.category} />
                <div
                  style={{
                    fontSize: "10px",
                    color: COLORS.deepBrown,
                    margin: "12px 0 8px",
                    lineHeight: "1.6",
                  }}
                >
                  {post.title}
                </div>
                <div style={{ fontSize: "7px", color: COLORS.midBrown, marginBottom: 10 }}>
                  {post.author.toUpperCase()} · {post.date}
                </div>
                <div
                  style={{ fontSize: "7px", color: COLORS.deepBrown, lineHeight: "2", opacity: 0.85 }}
                >
                  {post.content.slice(0, 80)}...
                </div>
                <div style={{ marginTop: 12, fontSize: "7px", color: COLORS.midBrown }}>
                  ♥ {post.likes} · 💬 {post.comments.length}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
