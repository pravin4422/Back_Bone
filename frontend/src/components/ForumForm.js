import React, { useState } from 'react';
import '../css/Forum.css';

function ForumForm({ onPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const readers = selectedFiles.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({
            name: file.name,
            type: file.type,
            data: reader.result,
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((fileData) => {
      setFiles(fileData);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      title,
      content,
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag),
      files: files.length > 0 ? files : [],
      comments: [],
    };

    // Send new post to parent (Forum.js)
    onPost(newPost);

    // Clear form inputs
    setTitle('');
    setContent('');
    setTags('');
    setFiles([]);
    e.target.reset(); // clears file input visually
  };

  return (
    <form className="forum-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Write your content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        type="file"
        multiple
        accept="image/*,application/pdf,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
        onChange={handleFileChange}
      />
      <button type="submit">➕ Add Post</button>
    </form>
  );
}

export default ForumForm;
