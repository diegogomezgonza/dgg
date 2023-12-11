import React from "react";
import "./css/Header.css"; // Import your CSS file

const Header = () => {
  return (
    <header className="header position-fixed">
      <div className="header-content position-fixed top-50 start-0 translate-middle-y p-5">
        <h1 className="titleDGG text-white">DGG</h1>
        <div className="container">
          <div className="row pt-3">
            <div className="col text-center mb-3">
              <a
                href="https://www.instagram.com/dgg.draws/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill">
                  <i className="fab fa-instagram fa-3x"></i>
                </div>
              </a>
            </div>
            <div className="col text-center mb-3">
              <a
                href="https://www.artstation.com/dggdibujo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-0"
              >
                <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill">
                  <i className="fab fa-artstation fa-3x"></i>
                </div>
              </a>
            </div>
            <div className="col text-center mb-3">
              <a
                href="https://www.pinterest.es/dggDraws/_created"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-0"
              >
                <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill">
                  <i className="fab fa-pinterest fa-3x"></i>
                </div>
              </a>
            </div>
          </div>
          <hr className="text-white"/>
          <p className="text-white mt-4">made by <a href="https://github.com/diegogomezgonza">diegogomezgonza</a></p>
        </div>
      </div>
    </header>
  );
};

export default Header;