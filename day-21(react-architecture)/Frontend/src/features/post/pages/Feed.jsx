import Post from "../components/Post";
import "../styles/feed.scss";
import { usePost } from "../hooks/usePost";
import Loader from "../../auth/components/Loader";
import { useEffect } from "react";
import { useNavigate } from 'react-router'; 
export const Feed = () => {
  const navigate = useNavigate()
  const { loading, feed, getFeedHandler } = usePost();

  useEffect(() => {
    getFeedHandler(navigate);
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

          {feed.toReversed().map((post) => {
            return <Post key={post._id} user={post.user} post={post} />;
          })}
        </div>
      </div>
    </main>
  );
};
