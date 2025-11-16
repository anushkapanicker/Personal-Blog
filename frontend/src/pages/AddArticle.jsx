import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function AddArticle() {
  const [form, setForm] = useState({ title: "", content: "", category: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/posts", { ...form, tags: [] });
    navigate("/admin/dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Article</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} /><br />
        <textarea name="content" placeholder="Content" onChange={handleChange}></textarea><br />
        <input name="category" placeholder="Category" onChange={handleChange} /><br />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default AddArticle;
