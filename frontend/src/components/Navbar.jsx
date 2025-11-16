import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    const isAuthenticated = localStorage.getItem("isAdmin");
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    } else {
      navigate("/admin/login");
    }
  };

  return (
    <nav
      style={{
        padding: "15px 40px",
        borderBottom: "2px solid #333",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
      }}
    >
      {/* Left side: Home */}
      <Link
        to="/"
        style={{
          fontSize: "20px",
          textDecoration: "none",
          color: "#222",
          fontWeight: "600",
        }}
      >
        Home
      </Link>

      {/* Right side: Admin Dashboard */}
      <button
        onClick={handleAdminClick}
        style={{
          padding: "6px 12px",
          border: "2px solid #333",
          background: "white",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "15px",
        }}
      >
        Admin Dashboard
      </button>
    </nav>
  );
}

export default Navbar;
