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
    <div style={{ padding: "20px" }}>
      <h2>Edit Article</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} /><br />
        <textarea name="content" value={form.content} onChange={handleChange}></textarea><br />
        <input name="category" value={form.category} onChange={handleChange} /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default Edit;