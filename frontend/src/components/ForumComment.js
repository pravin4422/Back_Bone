import React from 'react';
import '../css/Forum.css';

function ForumComment({ comment }) {
  return (
    <div className="forum-comment">
      <div className="comment-user">
        <img src={comment.user?.photoURL || '/default-avatar.png'} alt="user" />
        <span>{comment.user?.displayName || 'Farmer'}</span>
      </div>
      <p className="comment-text">{comment.content}</p>
      <small className="comment-time">
        {new Date(comment.createdAt).toLocaleString()}
      </small>
    </div>
  );
}

export default ForumComment;
