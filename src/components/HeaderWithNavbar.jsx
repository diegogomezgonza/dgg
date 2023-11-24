// HeaderWithNavbar.jsx

import React from "react";
import Header from "./Header"; // Import your Header component
import Navbar from "./Navbar"; // Import your Navbar component

const HeaderWithNavbar = () => {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
};

export default HeaderWithNavbar;