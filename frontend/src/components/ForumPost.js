import React, { useState, useContext } from 'react';
import ForumComment from '../pages/ForumComment';
import '../css/Forum.css';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function ForumPost({ post, token, setPosts }) {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState(post.comments || []);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [loadingComment, setLoadingComment] = useState(false);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    if (!token) {
      alert('Please login to comment');
      return;
    }

    try {
      setLoadingComment(true);
      const res = await axios.post(
        `/api/forum/${post._id}/comments`,
        { content: replyText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setComments(res.data.comments);
      setPosts((prevPosts) =>
        prevPosts.map((p) => (p._id === post._id ? res.data : p))
      );

      setReplyText('');
      setShowReplyForm(false);
    } catch {
      alert('Failed to add comment');
    } finally {
      setLoadingComment(false);
    }
  };

  return (
    <div className="forum-post">
      <div className="post-header">
        <h3>{post.title}</h3>
        <span className="post-category">{post.category}</span>
      </div>
      <p>{post.content}</p>
      {post.imageUrl && <img className="post-image" src={post.imageUrl} alt="Post" />}
      <div className="post-footer">
        <small>
          By {post.authorName} | {new Date(post.createdAt).toLocaleString()}
        </small>
      </div>

      <div className="comments-section">
        <h4>Comments ({comments.length})</h4>
        {comments.map((c) => (
          <ForumComment key={c._id || c.id} comment={c} />
        ))}

        {user ? (
          showReplyForm ? (
            <form onSubmit={handleAddComment} className="reply-form">
              <textarea
                placeholder="Write your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                required
                disabled={loadingComment}
              />
              <button type="submit" disabled={loadingComment}>
                {loadingComment ? 'Posting...' : 'Submit Reply'}
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setShowReplyForm(false);
                  setReplyText('');
                }}
                disabled={loadingComment}
              >
                Cancel
              </button>
            </form>
          ) : (
            <button className="reply-btn" onClick={() => setShowReplyForm(true)}>
              Reply
            </button>
          )
        ) : (
          <p>Please login to comment.</p>
        )}
      </div>
    </div>
  );
}

export default ForumPost;
