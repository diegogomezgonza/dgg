import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Draws = () => {
  const settings = {
    dots: true,
    infinite: true,
    // Opción puesta en falso para que sea horizontal
    vertical: false,
    // Esta opción tiene que estar desactivada
    verticalSwiping: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Slider {...settings}>
        <div>
          <img
            alt="Harley Quinn"
            src="/pics/harley.jpg"
          />
          <p className="fs-5 text-white mt-4">Harley Quinn</p>
        </div>
        <div>
          <img
            alt="Catwoman"
            src="/pics/catwoman.jpg"
          />
          <p className="fs-5 text-white mt-4">Catwoman</p>
        </div>
        <div>
          <img
            alt="Poison Ivy"
            src="/pics/poisonivy.jpg"
          />
          <p className="fs-5 text-white mt-4">Poison Ivy</p>
        </div>
        <div>
          <img
            alt="Batman"
            src="/pics/batman.jpg"
          />
          <p className="fs-5 text-white mt-4">Batman</p>
        </div>
        <div>
          <img
            alt="Robin"
            src="/pics/robin.jpg"
          />
          <p className="fs-5 text-white mt-4">Robin</p>
        </div>
      </Slider>
    </section>
  );
};

export default Draws;
