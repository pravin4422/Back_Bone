import React, { useState } from 'react';

function Forum() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const postComment = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h2>Farmer Forum</h2>
      <textarea
        placeholder="Ask or share something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={postComment}>Post</button>
      <ul>
        {comments.map((comment, i) => (
          <li key={i} style={{ margin: '10px 0' }}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Forum;
