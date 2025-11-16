import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.error("Error fetching posts:", error.message));
  }, []);


  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "600px",
          border: "2px solid #333",
          borderRadius: "10px",
          padding: "30px",
          background: "white",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Personal Blog</h1>

        {posts && posts.map((post) => (
          <div
            key={post.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
              alignItems: "center",
            }}
          >
            {/* Article Title */}
            <Link
              to={`/article/${post.id}`}
              style={{
                fontSize: "18px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#222",
              }}
            >
              {post.title}
            </Link>

            {/* Created At */}
            <span style={{ color: "#9aa0a6", fontSize: "16px" }}>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Home;