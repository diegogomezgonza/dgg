import React from "react";

function Footer() {
  return (
    <footer className="footer footer-bg">
      <div className="container">
        <div class="row">
          <div className="col d-flex justify-content-center align-items-center p-5">
            <a
              href="https://www.instagram.com/dgg.arts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill ">
                <i className="fab fa-instagram fa-2x"></i>
              </div>
            </a>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <a
              href="https://www.artstation.com/dggdibujo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill">
                <i className="fab fa-artstation fa-2x"></i>
              </div>
            </a>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <a
              href="https://www.pinterest.es/dggDibujo/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-0"
            >
              <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill">
                <i className="fab fa-pinterest fa-2x"></i>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
