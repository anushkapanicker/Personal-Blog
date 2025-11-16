import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddArticle from "./pages/AddArticle";
import AdminLogin from "./pages/AdminLogin";
import EditArticle from "./pages/Edit"; 
import Article from "./pages/Article";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAdmin");
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/article/:id" element={<Article />} />

        {/* Protected */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add"
          element={
            <ProtectedRoute>
              <AddArticle />
            </ProtectedRoute>
          }
        />

        {/* Add Edit Route */}
        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute>
              <EditArticle />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
