import React, { useState, useEffect, useContext } from 'react';
import ForumPost from '../components/ForumPost';
import '../css/Forum.css';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const categories = ['General', 'Pests', 'Weather', 'Crop Advice', 'Other'];

function Forum() {
  const { user, token } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: categories[0],
    image: null,
    imagePreview: null,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('/api/forum');
      setPosts(res.data);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert('Please add title and content');
      return;
    }
    if (!token) {
      alert('Please login to add posts');
      return;
    }

    try {
      // For now, send only text data (image upload later)
      const postData = {
        title: newPost.title,
        content: newPost.content,
        category: newPost.category,
        imageUrl: '', // empty for now
      };

      const res = await axios.post('/api/forum', postData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setPosts([res.data, ...posts]);
      setNewPost({ title: '', content: '', category: categories[0], image: null, imagePreview: null });
    } catch {
      alert('Failed to add post');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewPost((prev) => ({ ...prev, image: file, imagePreview: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="forum-container">
      <h2>Farmer Forums</h2>

      {user ? (
        <form className="new-post-form" onSubmit={handleAddPost}>
          <input
            type="text"
            placeholder="Post Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Write your post content here..."
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            required
          />
          <select
            value={newPost.category}
            onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <input type="file" accept="image/*" onChange={handleImageChange} />
          {newPost.imagePreview && (
            <img className="image-preview" src={newPost.imagePreview} alt="Preview" />
          )}

          <button type="submit">Add Post</button>
        </form>
      ) : (
        <p>Please login to add posts.</p>
      )}

      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : posts.length === 0 ? (
        <p>No posts yet. Be the first to add!</p>
      ) : (
        <div className="posts-list">
          {posts.map((post) => (
            <ForumPost key={post._id} post={post} token={token} setPosts={setPosts} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Forum;
