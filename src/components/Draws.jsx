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
            alt="Project 1"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eaaf251e-e378-4898-91a5-fb2a9f684a34/dgi1bnt-ce78fe7f-2b1b-4c7c-b7e8-8e4061fa267a.jpg/v1/fit/w_828,h_996,q_70,strp/harley_quinn_by_dggdrws_dgi1bnt-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU0MSIsInBhdGgiOiJcL2ZcL2VhYWYyNTFlLWUzNzgtNDg5OC05MWE1LWZiMmE5ZjY4NGEzNFwvZGdpMWJudC1jZTc4ZmU3Zi0yYjFiLTRjN2MtYjdlOC04ZTQwNjFmYTI2N2EuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ibset-80yPzxN8jc4s45GGgocFfBL4iVo7l5jQAM16k"
          />
          <p className="fs-5 text-white mt-4">Harley Quinn</p>
        </div>
        <div>
          <img
            alt="Project 2"
            src="https://cdnb.artstation.com/p/assets/images/images/069/888/933/large/dgg-draws-catwoman.jpg?1701254762"
          />
          <p className="fs-5 text-white mt-4">Catwoman</p>
        </div>
        <div>
          <img
            alt="Project 3"
            src="https://cdna.artstation.com/p/assets/images/images/061/402/398/large/dgg-dibujo-zoro.jpg?1680707082"
          />
          <p className="fs-5 text-white mt-4">Poison Ivy</p>
        </div>
      </Slider>
    </section>
  );
};

export default Draws;
