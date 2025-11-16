import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminUser = process.env.REACT_APP_ADMIN_USERNAME;
    const adminPass = process.env.REACT_APP_ADMIN_PASSWORD;

    if (form.username === adminUser && form.password === adminPass) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "400px",
          border: "2px solid #333",
          borderRadius: "10px",
          padding: "30px",
          background: "white",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>Admin Login</h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              border: "2px solid #333",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              border: "2px solid #333",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          />

          {/* Login Button */}
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
            Login
          </button>
        </form>

        {/* Error message */}
        {error && (
          <p style={{ color: "red", marginTop: "10px", fontSize: "14px" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
