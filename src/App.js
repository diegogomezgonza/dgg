import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Social from "./components/Social";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Social />
      </div>
    </Router>
  );
}

export default App;
