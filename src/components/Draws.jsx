import React, { useState, useEffect } from "react";
import Slider from "react-slick";
 // Al importar img, uso LazyLoading, de forma que las imágenes no se muestran cuando se carga la página, sino cuando han cargado por completo.
import { Img } from "react-image";
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
      }, 1000);
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

  if (isLoading) {
    return (
      <section>
        <Slider {...settings}>
          <div>
            <RingLoader color="#ffffff" size={60} />
          </div>
        </Slider>
      </section>
    );
  }

  return (
    <section>
      <Slider {...settings}>
        <div>
          <Img src="/pics/harley.jpg" alt="Harley Quinn" loader={<RingLoader color="#ffffff" size={60} />} />
          <p className="fs-5 text-white mt-4">Harley Quinn</p>
        </div>
        <div>
          <Img src="/pics/catwoman.jpg" alt="Catwoman" loader={<RingLoader color="#ffffff" size={60} />} />
          <p className="fs-5 text-white mt-4">Catwoman</p>
        </div>
        <div>
          <Img src="/pics/poisonivy.jpg" alt="Poison Ivy" loader={<RingLoader color="#ffffff" size={60} />} />
          <p className="fs-5 text-white mt-4">Poison Ivy</p>
        </div>
        <div>
          <Img src="/pics/batman.jpg" alt="Batman" loader={<RingLoader color="#ffffff" size={60} />} />
          <p className="fs-5 text-white mt-4">Batman</p>
        </div>
        <div>
          <Img src="/pics/robin.jpg" alt="Robin" loader={<RingLoader color="#ffffff" size={60} />} />
          <p className="fs-5 text-white mt-4">Robin</p>
        </div>
        <div>
          <Img src="/pics/nightwing.jpg" alt="Nightwing" loader={<RingLoader color="#ffffff" size={60} />} />
          <p className="fs-5 text-white mt-4">Nightwing</p>
        </div>
      </Slider>
    </section>
  );
};

export default Draws;
