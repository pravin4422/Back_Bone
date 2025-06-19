import React from 'react';
import '../css/Forum.css';

function ForumComment({ comment }) {
  return (
    <div className="forum-comment">
      <p>{comment.content}</p>
      <small>
        By {comment.authorName || comment.author} | {new Date(comment.createdAt).toLocaleString()}
      </small>
    </div>
  );
}

export default ForumComment;
