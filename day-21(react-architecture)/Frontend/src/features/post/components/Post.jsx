import "../styles/feed.scss";
import {  Bookmark,  Ellipsis,  Heart,  MessageSquareText,  Send,} from "lucide-react";


function Post({user , post}) {
  console.log(post)
  return (
    <main>
      <div className="post">
        {/* top user section */}

        <div className="user">
          <div className="user-info">
            <div className="userImg-wraper">
              <img
                src={user.profileImage}
                alt=""
              />
            </div>
            <p>
              username <br /> <small>pune Maharastra</small>
            </p>
          </div>

          <Ellipsis color="gray" />
        </div>

        {/* content */}
        <img
          src={post.imgUrl}
          alt=""
        />

        {/* bottom */}
        <div className="bottom">
          <div className="actions">
            <div className="left-actions">
              {post.isLike ?  <Heart className="actions-icon " color="red" /> :  <Heart className="actions-icon " color="#e5d6d6" />}
              <MessageSquareText className="actions-icon" color="#e5d6d6" />
              <Send className="actions-icon" color="#e5d6d6" />
            </div>
            <div className="right-actions">
              <Bookmark className="actions-icon" color="#e5d6d6" />
            </div>
          </div>

          <div className="likes-count">
            <small>0</small> likes
          </div>

          <div className="caption">
            <span>{user.username}</span>
            <p>{post.caption}</p>
          </div>

          <div className="timestamp">JUST NOW</div>

          <div className="add-comment">
            <div className="userImg-wraper">
              <img
                src={user.profileImage}
                alt=""
              />
            </div>
            <input
              className="comment-input"
              type="text"
              placeholder="Add a comment ..."
            />
            <button className="post-btn">Post</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Post;
