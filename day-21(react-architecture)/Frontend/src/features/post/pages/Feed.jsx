import Post from "../components/Post";
import "../styles/feed.scss";
import { usePost } from "../hooks/usePost";
import Loader from "../../auth/components/Loader";
import { useEffect } from "react";

export const Feed = () => {
  const { loading, feed, getFeedHandler } = usePost();

  useEffect(() => {
    getFeedHandler();
  }, []);

  if (loading || feed === null) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
  return (
    <main className="feed-page">
      <div className="feed">
        {/* posts  container*/}
        <div className="posts">
          {/* single post layout */}

          {feed.map((post) => {
            return <Post key={post._id} user={post.user} post={post} />;
          })}
        </div>
      </div>
    </main>
  );
};
