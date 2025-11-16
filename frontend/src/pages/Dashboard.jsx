import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    api.get("/posts").then((res) => setPosts(res.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    fetchPosts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <Link to="/admin/add">Add New Post</Link>
      <hr />
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link to={`/admin/edit/${post.id}`}>Edit</Link> |{" "}
          <button onClick={() => deletePost(post.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
