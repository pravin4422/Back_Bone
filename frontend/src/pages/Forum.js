import React, { useState, useEffect } from 'react';
import ForumForm from '../components/ForumForm';
import ForumPost from '../components/ForumPost';
import '../css/Forum.css';

function Forum() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('forumPosts');
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when posts change
  useEffect(() => {
    localStorage.setItem('forumPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    const postWithExtras = {
      ...newPost,
      _id: Date.now(),
      likes: 0,
      editable: false,
      createdAt: new Date().toLocaleString(),
      user: {
        username: 'Guest User', // For future login support
        photoURL: '',           // Future profile picture support
      },
    };
    setPosts((prevPosts) => [postWithExtras, ...prevPosts]);
  };

  const updatePost = (id, updatedData) => {
    setPosts((prev) =>
      prev.map((post) =>
        post._id === id
          ? { ...post, ...updatedData, editable: false }
          : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post._id !== id));
  };

  const toggleEditPost = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post._id === id ? { ...post, editable: !post.editable } : post
      )
    );
  };

  const likePost = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post._id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.tags || []).some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="forum-container">
      <h1 className="forum-title">👨‍🌾 Farmer Forum</h1>
      <ForumForm onPost={addPost} />
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="forum-search"
      />
      <div className="forum-posts">
        {filteredPosts.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>No posts found.</p>
        ) : (
          filteredPosts.map((post) => (
            <ForumPost
              key={post._id}
              post={post}
              onDelete={deletePost}
              onEditToggle={toggleEditPost}
              onUpdate={updatePost}
              onLike={likePost}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Forum;
