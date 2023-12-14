import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import RingLoader from "react-spinners/ClipLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Draws = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Operación asíncrona
    const fakeAsyncOperation = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Ajustar tiempo de carga
    };

    fakeAsyncOperation();
  }, []); // Los corchetes significan que la función se ejecutará después del primer render

  // Opciones para carrusel
  const settings = {
    dots: true,
    infinite: true,
    vertical: false,
    verticalSwiping: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Mostrar loader mientras se carga
  if (isLoading) {
    return (
      <section>
        <Slider {...settings}>
          <div>
            <RingLoader color="#ffffff" size={60} />;
          </div>
        </Slider>
      </section>
    );
  }

  return (
    <section>
      <Slider {...settings}>
        <div>
          <img alt="Harley Quinn" src="/pics/harley.jpg" />
          <p className="fs-5 text-white mt-4">Harley Quinn</p>
        </div>
        <div>
          <img alt="Catwoman" src="/pics/catwoman.jpg" />
          <p className="fs-5 text-white mt-4">Catwoman</p>
        </div>
        <div>
          <img alt="Poison Ivy" src="/pics/poisonivy.jpg" />
          <p className="fs-5 text-white mt-4">Poison Ivy</p>
        </div>
        <div>
          <img alt="Batman" src="/pics/batman.jpg" />
          <p className="fs-5 text-white mt-4">Batman</p>
        </div>
        <div>
          <img alt="Robin" src="/pics/robin.jpg" />
          <p className="fs-5 text-white mt-4">Robin</p>
        </div>
      </Slider>
    </section>
  );
};

export default Draws;
