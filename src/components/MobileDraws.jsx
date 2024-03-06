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
    <section className="mobile-container">
      <div className="mobile-draws">
        {isLoading ? (
          <div className="spinner-container">
          <RingLoader color="#ffffff" size={60} />
        </div>
        ) : (
          <div className="mobile-draw-container">
            <div className="mobile-draw border rounded">
              <Img
                src="/pics/harley.webp"
                alt="harley"
                loader={<RingLoader color="#ffffff" size={60} />}
                className="img-fluid border rounded"
              />
              <p className="fs-2 text-white mt-3 fw-bold mb-0">Harley Quinn</p>
            </div>
            <div className="mobile-draw border rounded">
              <Img
                src="/pics/catwoman.webp"
                alt="catwoman"
                loader={<RingLoader color="#ffffff" size={60} />}
                className="img-fluid border rounded"
              />
              <p className="fs-2 text-white mt-3 fw-bold mb-0">Catwoman</p>
            </div>
            <div className="mobile-draw border rounded">
              <Img
                src="/pics/poisonivy.webp"
                alt="poisonivy"
                loader={<RingLoader color="#ffffff" size={60} />}
                className="img-fluid border rounded"
              />
              <p className="fs-2 text-white mt-3 fw-bold mb-0">Poison Ivy</p>
            </div>
            <div className="mobile-draw border rounded">
              <Img
                src="/pics/batman.webp"
                alt="batman"
                loader={<RingLoader color="#ffffff" size={60} />}
                className="img-fluid border rounded"
              />
              <p className="fs-2 text-white mt-3 fw-bold mb-0">Batman</p>
            </div>
            <div className="mobile-draw border rounded">
              <Img
                src="/pics/robin.webp"
                alt="robin"
                loader={<RingLoader color="#ffffff" size={60} />}
                className="img-fluid border rounded"
              />
              <p className="fs-2 text-white mt-3 fw-bold mb-0">Robin</p>
            </div>
            <div className="mobile-draw border rounded">
              <Img
                src="/pics/nightwing.webp"
                alt="nightwing"
                loader={<RingLoader color="#ffffff" size={60} />}
                className="img-fluid border rounded"
              />
              <p className="fs-2 text-white mt-3 fw-bold mb-0">Nightwing</p>
            </div>
            <div className="mobile-draw border rounded">
              <Img
                src="/pics/onepiece/luffy.webp"
                alt="luffy"
                loader={<RingLoader color="#ffffff" size={60} />}
                className="img-fluid border rounded"
              />
              <p className="fs-2 text-white mt-3 fw-bold mb-0">Monkey D. Luffy</p>
            </div>
            <div className="mobile-draw border rounded">
              <Img
                src="/pics/onepiece/zoro.webp"
                alt="zoro"
                loader={<RingLoader color="#ffffff" size={60} />}
                className="img-fluid border rounded"
              />
              <p className="fs-2 text-white mt-3 fw-bold mb-0">Roronoa Zoro</p>
            </div>
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
