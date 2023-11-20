import { useState } from "react";
import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Draws from "./components/Draws";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./css/App.css";

// CSS componentes
import "./components/css/Footer.css";
import "./components/css/Projects.css";
import "./components/css/Navbar.css";
import "./components/css/Header.css";
import "./components/css/Draws.css";
import "./components/css/Contact.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/draws" element={<Draws />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
