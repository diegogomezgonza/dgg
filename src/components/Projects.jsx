import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    vertical: false, // Set vertical option to false for horizontal carousel
    verticalSwiping: false, // Disable vertical swiping
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <h2>Destacados</h2>
      <Slider {...settings}>
        <div>
          <img
            alt="Project 1"
            src="https://cdnb.artstation.com/p/assets/images/images/061/464/531/large/dgg-dibujo-guts.jpg?1680857895"
          />
          <p className="legend">Guts Berserk armor</p>
        </div>
        <div>
          <img
            alt="Project 2"
            src="https://cdna.artstation.com/p/assets/images/images/061/402/354/large/dgg-dibujo-misa.jpg?1680707029"
          />
          <p className="legend">Misa</p>
        </div>
        <div>
          <img
            alt="Project 3"
            src="https://cdna.artstation.com/p/assets/images/images/061/402/398/large/dgg-dibujo-zoro.jpg?1680707082"
          />
          <p className="legend">Zoro</p>
        </div>
        <div>
          <img
            alt="Project 4"
            src="https://cdnb.artstation.com/p/assets/images/images/065/802/587/large/dgg-dibujo-vegeta.jpg?1691260492"
          />
          <p className="legend">Vegeta</p>
        </div>
        <div>
          <img
            alt="Project 5"
            src="https://cdnb.artstation.com/p/assets/images/images/067/259/749/large/dgg-dibujo-guts-ga.jpg?1694957879"
          />
          <p className="legend">Guts golden age</p>
        </div>
        <div>
          <img
            alt="Project 6"
            src="https://cdnb.artstation.com/p/assets/images/images/067/259/815/large/dgg-dibujo-casca-ga.jpg?1694958064"
          />
          <p className="legend">Casca golden age</p>
        </div>
      </Slider>
    </section>
  );
};

export default Projects;
