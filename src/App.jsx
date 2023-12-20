import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Draws from "./components/Draws";
import MobileHeader from "./components/MobileHeader";
import "./css/App.css";

// CSS componentes
import "./components/css/Navbar.css";
import "./components/css/Header.css";
import "./components/css/Draws.css";
import "./components/css/MobileHeader.css";


function App() {
  const [isPCMode, setIsPCMode] = useState(window.innerWidth > 1650);
  const handleResize = () => {
    setIsPCMode(window.innerWidth > 1650);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {isPCMode ? (
          <>
            <Navbar />
            <Header />
            <div className="App-container">
              <Routes>
                <Route path="/draws" element={<Draws />} />
              </Routes>
            </div>
          </>
        ) : (
          <MobileHeader />
        )}
      </div>
    </Router>
  );
}

export default App;
