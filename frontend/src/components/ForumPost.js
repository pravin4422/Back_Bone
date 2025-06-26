import React, { useState } from 'react';
import '../css/Forum.css';

function ForumPost({ post, onDelete, onEditToggle, onUpdate, onLike }) {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleUpdate = () => {
    if (!editedTitle.trim() || !editedContent.trim()) return;

    onUpdate(post._id, {
      title: editedTitle,
      content: editedContent,
    });
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    const newComments = [...comments, commentText.trim()];
    setComments(newComments);
    setCommentText('');

    onUpdate(post._id, {
      ...post,
      comments: newComments,
    });
  };

  const renderFiles = (files) => {
    if (!files || files.length === 0) return null;

    return files.map((file, index) => {
      const { type, name, data } = file;

      if (type.startsWith('image/')) {
        return (
          <img
            key={index}
            src={data}
            alt={`Uploaded-${index}`}
            className="forum-image"
          />
        );
      }

      const isPDF = type === 'application/pdf';

      return (
        <div key={index} className="forum-file-preview">
          <p><strong>📎 Attachment:</strong> {name}</p>
          {isPDF ? (
            <iframe
              src={data}
              title={name}
              className="forum-file-iframe"
              frameBorder="0"
            />
          ) : (
            <a
              href={data}
              download={name}
              target="_blank"
              rel="noopener noreferrer"
              className="forum-file-link"
            >
              📄 {name} (Download/View)
            </a>
          )}
        </div>
      );
    });
  };

  return (
    <div className="forum-post">
      {post.editable ? (
        <>
          <input
            className="forum-edit-title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="forum-edit-content"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="forum-buttons">
            <button onClick={handleUpdate}>✅ Save</button>
            <button onClick={() => onEditToggle(post._id)}>❌ Cancel</button>
          </div>
        </>
      ) : (
        <>
          {/* Header with user info and date */}
          <div className="forum-header">
            {post.user?.photoURL ? (
              <img
                src={post.user.photoURL}
                alt="User Avatar"
                className="forum-user-avatar"
              />
            ) : (
              <div className="forum-user-avatar-placeholder">👤</div>
            )}
            <div className="forum-user-info">
              <strong>{post.user?.username || 'Anonymous'}</strong>
              <div className="forum-meta">📅 {post.createdAt}</div>
            </div>
          </div>

          <h3>{post.title}</h3>
          <p>{post.content}</p>

          {/* Files */}
          {renderFiles(post.files)}

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="forum-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="forum-tag">#{tag}</span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="forum-actions">
            <button onClick={() => onLike(post._id)}>👍 {post.likes}</button>
            <button onClick={() => onEditToggle(post._id)}>✏️ Edit</button>
            <button onClick={() => onDelete(post._id)}>🗑️ Delete</button>
          </div>

          {/* Comments */}
          <div className="forum-comments">
            <h4>💬 Comments</h4>
            {comments.length === 0 && <p className="no-comment">No comments yet.</p>}
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>🗨️ {comment}</li>
              ))}
            </ul>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="comment-input"
            />
            <button onClick={handleAddComment}>➕ Comment</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ForumPost;
