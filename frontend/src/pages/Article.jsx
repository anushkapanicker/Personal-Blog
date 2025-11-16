import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

function Article() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
  <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
    <div
      style={{
        width: "650px",
        border: "2px solid #333",
        borderRadius: "10px",
        padding: "30px",
        background: "white",
      }}
    >
      {/* Title */}
      <h1 style={{ fontSize: "32px", marginBottom: "5px" }}>
        {post.title}
      </h1>

      {/* Date */}
      <p
        style={{
          color: "#9aa0a6",
          fontSize: "18px",
          marginBottom: "20px",
        }}
      >
        {new Date(post.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Article Content */}
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#222",
          whiteSpace: "pre-line", // keeps formatting if multi-line content
        }}
      >
        {post.content}
      </p>
    </div>
  </div>
);

}

export default Article;
