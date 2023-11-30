import React from "react";
import "./css/Header.css"; // Import your CSS file

const Header = () => {
  return (
    <header className="header position-fixed">
      <div className="header-content position-fixed top-0 start-0 p-5">
        <h1 className="text-white">Diego Gómez</h1>
        <div className="container">
          <div className="row pt-3">
            <div className="col d-flex justify-content-center align-items-center">
              <a
                href="https://www.instagram.com/dgg.arts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill">
                  <i className="fab fa-instagram fa-2x"></i>
                </div>
              </a>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <a
                href="https://www.linkedin.com/in/diego-g%C3%B3mez-gonz%C3%A1lez-372017199/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-0"
              >
                <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill">
                  <i className="fab fa-linkedin fa-2x"></i>
                </div>
              </a>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <a
                href="https://github.com/diegogomezgonza"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-0"
              >
                <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill">
                  <i className="fab fa-github fa-2x"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;