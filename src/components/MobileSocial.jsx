const MobileSocial = () => {
  return (
    <div className="social-media-icons d-flex fixed-bottom">
      <div className="col text-center mb-1">
        <a
          href="https://www.instagram.com/dgg.draws/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="campanies__logo-box shadow-sm bg-transparent border border-0 rounded-pill">
            <i className="fab fa-instagram fa-2x"></i>
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
            <i className="fab fa-artstation fa-2x"></i>
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
            <i className="fab fa-pinterest fa-2x"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MobileSocial;
