import React, { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handlePost = () => {
    alert("Post submitted successfully!");
  };

  const isEmpty = post.trim() === "";
  const isOverLimit = post.length > 100;

  return (
    <div className="page">
      <div className="post-card">
        <h1>📝 Create a Post</h1>

        <textarea
          value={post}
          onChange={handleChange}
          placeholder="What's on your mind?"
          rows="6"
        />

        <div className="counter">
          {post.length} / 100
        </div>

        {isOverLimit && (
          <p className="error">
            ⚠ Limit exceeded
          </p>
        )}

        <button
          onClick={handlePost}
          disabled={isEmpty || isOverLimit}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default App;