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
  <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
    <div
      style={{
        width: "450px",
        border: "2px solid #333",
        borderRadius: "10px",
        padding: "30px",
      }}
    >
      <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
        New Article
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        {/* Title */}
        <input
          name="title"
          placeholder="Article Title"
          onChange={handleChange}
          style={{
            padding: "10px",
            border: "2px solid #333",
            borderRadius: "6px",
            fontSize: "16px",
          }}
        />

        {/* Category */}
        <input
          name="category"
          placeholder="Blog Category"
          onChange={handleChange}
          style={{
            padding: "10px",
            border: "2px solid #333",
            borderRadius: "6px",
            fontSize: "16px",
          }}
        />

        {/* Content */}
        <textarea
          name="content"
          placeholder="Content"
          onChange={handleChange}
          rows={8}
          style={{
            padding: "10px",
            border: "2px solid #333",
            borderRadius: "6px",
            fontSize: "16px",
          }}
        />

        {/* Button */}
        <button
          type="submit"
          style={{
            marginTop: "10px",
            width: "120px",
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #333",
            borderRadius: "6px",
            background: "white",
            cursor: "pointer",
          }}
        >
          Publish
        </button>
      </form>
    </div>
  </div>
);

}

export default AddArticle;
