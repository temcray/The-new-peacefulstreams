import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Devotions from "./pages/Devotions";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Bible from "./pages/Bible";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Encouragement from "./pages/Encouragement";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("dark-mode") === "true";
    setDarkMode(saved);
  }, []);

  // Apply theme class
  useEffect(() => {
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <Router>
      {/* Dark / Light Toggle Button */}
      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "fixed",
          top: "15px",
          right: "15px",
          padding: "3px 5px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          zIndex: 999,
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="px-2 py-0.5 text-xs rounded-md">
        <main>
          <header>
            <h1>Peaceful Streams</h1>
          </header>

          {/* Navbar */}
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />

            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />

            <Route
              path="/devotions"
              element={
                <ProtectedRoute>
                  <Devotions />
                </ProtectedRoute>
              }
            />

            <Route
              path="/bible"
              element={
                <ProtectedRoute>
                  <Bible />
                </ProtectedRoute>
              }
            />

            <Route
              path="/encouragement"
              element={
                <ProtectedRoute>
                  <Encouragement />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer>
          <p>@ {new Date().getFullYear()} Peaceful Streams </p>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
