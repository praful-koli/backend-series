
import Post from "../components/Post";
import "../styles/feed.scss";

export const Feed = () => {
  return (
    <main className="feed-page">
      <div className="feed">
        {/* posts  container*/}
        <div className="posts">
          {/* single post layout */}
      
           <Post />    
           <Post />    
        </div>
      </div>
    </main>
  );
};
