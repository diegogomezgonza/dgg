import React, { useState, useEffect } from "react";
import Slider from "react-slick";
 // Al importar img, uso LazyLoading, de forma que las imágenes no se muestran cuando se carga la página, sino cuando han cargado por completo.
import { Img } from "react-image";
import RingLoader from "react-spinners/ClipLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EldenRing = () => {
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
          <Img src="/pics/eldenring/messmer.webp" alt="Messmer" loader={<RingLoader color="#ffffff" size={60} />} />
          <p className="fs-5 text-white mt-4">Messmer</p>
        </div>
      </Slider>
    </section>
  );
};

export default EldenRing;
