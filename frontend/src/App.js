import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Dashboard from "./pages/Dashboard";
import AddArticle from "./pages/AddArticle";
import Edit from "./pages/Edit";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add" element={<AddArticle />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
