import React, { useState, useEffect } from "react";
import { Img } from "react-image";
import RingLoader from "react-spinners/ClipLoader";
import "./css/MobileDraws.css";

const Mobile = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeAsyncOperation = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fakeAsyncOperation();
  }, []);

  return (
    <section>
      <div className="project-card bg-transparent">
        {isLoading ? (
          <RingLoader color="#ffffff" size={60} />
        ) : (
          <div className="project-card border rounded">
            <Img
              src="/pics/batman.jpg"
              alt="Harley Quinn"
              loader={<RingLoader color="#000000" size={60} />}
              className="img-fluid w-100 border rounded"
            />
            <p className="fs-2 text-black mt-4 fw-bold">Batman</p>
          </div>
        )}
      </div>
      {/* Mostrar redes sociales llamando a la función que tiene el componente */}
      {renderSocialMediaIcons()}
    </section>
  );
};

//Mostrar redes sociales
const renderSocialMediaIcons = () => (
  <div className="social-media-icons d-flex fixed-bottom">
    <div className="col text-center mb-1">
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
    <div className="col text-center mb-1">
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
);

export default Mobile;
