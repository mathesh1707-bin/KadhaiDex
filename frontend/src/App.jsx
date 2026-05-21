import { useState } from "react";
import PokedexFrame from "./components/layout/PokedexFrame";
import TopBar from "./components/layout/TopBar";
import BottomBar from "./components/layout/BottomBar";
import AuthModal from "./components/auth/AuthModal";
import HomeScreen from "./screens/HomeScreen";
import PostsScreen from "./screens/PostsScreen";
import DetailScreen from "./screens/DetailScreen";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [posts, setPosts] = useState([]); // starts empty — fresh world
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <PokedexFrame>
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onLogin={(user) => setCurrentUser(user)}
        />
      )}

      <TopBar
        screen={screen}
        setScreen={setScreen}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setShowAuth={setShowAuth}
      />

      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {screen === "home" && (
          <HomeScreen
            posts={posts}
            setScreen={setScreen}
            setSelectedPost={setSelectedPost}
          />
        )}

        {screen === "posts" && (
          <PostsScreen
            posts={posts}
            setScreen={setScreen}
            setSelectedPost={setSelectedPost}
            currentUser={currentUser}
          />
        )}

        {screen === "detail" && selectedPost && (
          <DetailScreen
            post={selectedPost}
            setPost={setSelectedPost}
            setPosts={setPosts}
            posts={posts}
            currentUser={currentUser}
            setShowAuth={setShowAuth}
          />
        )}

        {screen === "new" && (
          <NewPostScreen
            currentUser={currentUser}
            setPosts={setPosts}
            posts={posts}
            setScreen={setScreen}
            setShowAuth={setShowAuth}
          />
        )}
      </div>

      <BottomBar screen={screen} setScreen={setScreen} currentUser={currentUser} />
    </PokedexFrame>
  );
}
