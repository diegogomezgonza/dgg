import React, { useState, useEffect } from "react";
import { Img } from "react-image";
import RingLoader from "react-spinners/ClipLoader";
import "./css/MobileDraws.css";
import MobileSocial from "./MobileSocial";

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
      <div className="project-card-mobile bg-transparent">
        {isLoading ? (
          <RingLoader color="#ffffff" size={60} />
        ) : (
          <div className="project-card-mobile border rounded">
            <Img
              src="/pics/batman.jpg"
              alt="Batman"
              loader={<RingLoader color="#ffffff" size={60} />}
              className="img-fluid w-75 border rounded"
            />
            <p className="fs-2 text-white mt-3 fw-bold mb-0">Batman</p>
          </div>
        )}
      </div>
      {/* Mostrar redes sociales llamando a la función que tiene el componente */}
      {renderSocialMediaIcons()}
    </section>
  );
};

//Mostrar redes sociales
const renderSocialMediaIcons = () => <MobileSocial />;

export default Mobile;
