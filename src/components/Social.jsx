import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Social = () => {
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
    <div class="row">
      <h1 class="display-4 d-flex justify-content-center align-items-center pb-5 pt-5">
        Redes sociales
      </h1>
      <div class="col" href="https://www.instagram.com/dgg.arts/">
        <a href="https://www.instagram.com/dgg.arts/">
          <div class="campanies__logo-box shadow-sm bg-white border rounded-pill">
            <img
              src="images/campanies/instagram.png"
              alt="Campany 3 logo"
              title="Campany 3 Logo"
              class="img-fluid"
            />
          </div>
        </a>
      </div>
      <div class="col">
        <a href="https://www.artstation.com/dggdibujo">
          <div class="campanies__logo-box shadow-sm bg-white border rounded-pill">
            <img
              src="images/campanies/artstation.png"
              alt="Campany 1 logo"
              title="Campany 1 Logo"
              class="img-fluid"
            />
          </div>
        </a>
      </div>
      <div class="col">
        <a href="https://www.pinterest.es/dggDibujo/">
          <div class="campanies__logo-box shadow-sm bg-white border rounded-pill">
            <img
              src="images/campanies/pinterest.png"
              alt="Campany 2 logo"
              title="Campany 2 Logo"
              class="img-fluid"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Social;
