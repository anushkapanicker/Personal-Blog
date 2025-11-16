import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

function Edit() {
    const {id} = useParams();
    const [form, setForm] = useState({ title: "", content: "", category: "" });

    useEffect(() => {
        const fetchPost = async () => {
            const res = await api.get(`/posts/${id}`);
            setForm(res.data);
        };
        fetchPost();
    }, [id]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.put(`/posts/${id}`, form);
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
        Update Article
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        {/* Title */}
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Article Title"
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
          value={form.category}
          onChange={handleChange}
          placeholder="Blog Category"
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
          value={form.content}
          onChange={handleChange}
          rows={8}
          placeholder="Content"
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
          Update
        </button>
      </form>
    </div>
  </div>
);

}
export default Edit;