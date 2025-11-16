import React, { useEffect, useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    api.get("/posts").then((res) => setPosts(res.data));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this article?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/posts/${id}`);
      fetchPosts(); // refresh list
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "450px",
          border: "2px solid #333",
          borderRadius: "10px",
          padding: "30px",
          background: "white",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "28px", margin: 0 }}>Personal Blog</h1>

          <Link
            to="/admin/add"
            style={{
              fontSize: "16px",
              textDecoration: "none",
              color: "#536471",
              fontWeight: "600",
            }}
          >
            + Add
          </Link>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          style={{
            border: "2px solid #333",
            background: "white",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          Logout
        </button>

        {/* Article List */}
        {posts.map((post) => (
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
            {/* Left — Title */}
            <span style={{ fontSize: "18px", color: "#222" }}>
              {post.title}
            </span>

            {/* Right — Edit + Delete */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                color: "#9aa0a6",
                fontSize: "15px",
              }}
            >
              <Link
                to={`/admin/edit/${post.id}`}
                style={{ textDecoration: "none", color: "#9aa0a6" }}
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(post.id)}
                style={{
                  border: "none",
                  background: "none",
                  color: "#9aa0a6",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
