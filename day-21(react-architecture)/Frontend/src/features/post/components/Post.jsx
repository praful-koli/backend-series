import "../styles/feed.scss";
import {
  Bookmark,
  Ellipsis,
  Heart,
  MessageSquareText,
  Send,
} from "lucide-react";
function Post() {
  return (
    <main>
      <div className="post">
        {/* top user section */}

        <div className="user">
          <div className="user-info">
            <div className="userImg-wraper">
              <img
                src="https://plus.unsplash.com/premium_photo-1709142525002-c1856b1c60c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          src="https://plus.unsplash.com/premium_photo-1753983551384-31658f8307d0?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        {/* bottom */}
        <div className="bottom">
          <div className="actions">
            <div className="left-actions">
              <Heart className="actions-icon" color="#e5d6d6" />
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
            <span>Praful</span>
            <p>caption Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="timestamp">JUST NOW</div>

          <div className="add-comment">
            <div className="userImg-wraper">
              <img
                src="https://plus.unsplash.com/premium_photo-1709142525002-c1856b1c60c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
