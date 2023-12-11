import { useState, useEffect } from "react";
import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Draws from "./components/Draws";
import "./css/App.css";

// CSS componentes
import "./components/css/Navbar.css";
import "./components/css/Header.css";
import "./components/css/Draws.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-container">
          <Routes>
            <Route path="/draws" element={<Draws />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
