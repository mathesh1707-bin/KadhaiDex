import { useState } from "react";
import { COLORS, pixel, pixelBtn } from "../constants/theme";
import PixelAvatar from "../components/ui/PixelAvatar";
import PixelBadge from "../components/ui/PixelBadge";
import PixelInput from "../components/ui/PixelInput";
import PixelTextarea from "../components/ui/PixelTextarea";

const DetailScreen = ({ post, setPost, setPosts, posts, currentUser, setShowAuth }) => {
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editContent, setEditContent] = useState(post.content);

  const addComment = () => {
    if (!comment.trim()) return;
    if (!currentUser) {
      setShowAuth(true);
      return;
    }
    const newComment = {
      id: Date.now(),
      author: currentUser,
      text: comment,
      date: new Date().toISOString().slice(0, 10),
    };
    const updated = { ...post, comments: [...post.comments, newComment] };
    setPost(updated);
    setPosts(posts.map((p) => (p.id === post.id ? updated : p)));
    setComment("");
  };

  const saveEdit = () => {
    const updated = { ...post, title: editTitle, content: editContent };
    setPost(updated);
    setPosts(posts.map((p) => (p.id === post.id ? updated : p)));
    setEditing(false);
  };

  const toggleLike = () => {
    const updated = { ...post, likes: liked ? post.likes - 1 : post.likes + 1 };
    setPost(updated);
    setPosts(posts.map((p) => (p.id === post.id ? updated : p)));
    setLiked(!liked);
  };

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 24px" }}>
      {/* Post card */}
      <div
        style={{
          background: COLORS.white,
          border: pixel(4),
          boxShadow: `6px 6px 0 ${COLORS.deepBrown}`,
          padding: 28,
          marginBottom: 24,
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
          <PixelAvatar name={post.author} size={48} />
          <div>
            <div style={{ fontSize: "8px", color: COLORS.midBrown, marginBottom: 4 }}>
              {post.author.toUpperCase()} · {post.date}
            </div>
            <PixelBadge label={post.category} />
          </div>
          {currentUser === post.author && (
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <button
                onClick={() => setEditing(!editing)}
                style={{
                  ...pixelBtn,
                  fontSize: "7px",
                  padding: "5px 10px",
                  background: COLORS.peach,
                }}
              >
                {editing ? "CANCEL" : "EDIT"}
              </button>
            </div>
          )}
        </div>

        {editing ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <PixelInput
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <PixelTextarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              style={{ minHeight: 160 }}
            />
            <button
              onClick={saveEdit}
              style={{ ...pixelBtn, background: COLORS.salmon }}
            >
              SAVE CHANGES
            </button>
          </div>
        ) : (
          <>
            <div
              style={{ fontSize: "16px", color: COLORS.deepBrown, marginBottom: 18, lineHeight: "1.6" }}
            >
              {post.title}
            </div>
            <div
              style={{ fontSize: "9px", color: COLORS.deepBrown, lineHeight: "2.2", opacity: 0.9 }}
            >
              {post.content}
            </div>
          </>
        )}

        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          <button
            onClick={toggleLike}
            style={{
              ...pixelBtn,
              fontSize: "8px",
              background: liked ? COLORS.darkSalmon : COLORS.lightPeach,
              color: liked ? COLORS.cream : COLORS.deepBrown,
            }}
          >
            {liked ? "♥" : "♡"} {post.likes}
          </button>
          <span
            style={{
              fontSize: "8px",
              color: COLORS.midBrown,
              display: "flex",
              alignItems: "center",
            }}
          >
            💬 {post.comments.length} COMMENTS
          </span>
        </div>
      </div>

      {/* Comments section */}
      <div
        style={{ fontSize: "9px", color: COLORS.deepBrown, marginBottom: 16, letterSpacing: "2px" }}
      >
        ◆ COMMENTS [{post.comments.length}]
      </div>

      {post.comments.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "24px",
            background: COLORS.cream,
            border: pixel(2),
            boxShadow: `3px 3px 0 ${COLORS.deepBrown}`,
            marginBottom: 16,
          }}
        >
          <div style={{ fontSize: "7px", color: COLORS.midBrown, lineHeight: "2.2" }}>
            NO COMMENTS YET. START THE CONVERSATION!
          </div>
        </div>
      )}

      {post.comments.map((c) => (
        <div
          key={c.id}
          style={{
            background: COLORS.cream,
            border: pixel(2),
            boxShadow: `3px 3px 0 ${COLORS.deepBrown}`,
            padding: "14px 18px",
            marginBottom: 12,
            display: "flex",
            gap: 12,
          }}
        >
          <PixelAvatar name={c.author} size={32} />
          <div>
            <div style={{ fontSize: "7px", color: COLORS.midBrown, marginBottom: 6 }}>
              {c.author.toUpperCase()} · {c.date}
            </div>
            <div style={{ fontSize: "8px", color: COLORS.deepBrown, lineHeight: "2" }}>
              {c.text}
            </div>
          </div>
        </div>
      ))}

      {/* Add comment */}
      <div
        style={{
          background: COLORS.white,
          border: pixel(3),
          boxShadow: `4px 4px 0 ${COLORS.deepBrown}`,
          padding: 20,
          marginTop: 20,
        }}
      >
        <div style={{ fontSize: "8px", color: COLORS.midBrown, marginBottom: 12 }}>
          ADD A COMMENT
        </div>
        <PixelTextarea
          placeholder={currentUser ? "write your comment..." : "login to comment..."}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ minHeight: 80, marginBottom: 12 }}
          disabled={!currentUser}
        />
        <button
          onClick={addComment}
          style={{ ...pixelBtn, background: COLORS.salmon }}
          disabled={!currentUser}
        >
          ▶ POST COMMENT
        </button>
      </div>
    </div>
  );
};

export default DetailScreen;
