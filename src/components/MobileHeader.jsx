import MobileDraws from "./MobileDraws";
import "./css/MobileHeader.css";

const MobileHeader = () => {
  return (
    <div className="mobile-message">
      <h1 className="titleDGG text-white">DGG</h1>
      <hr className="appSeparator" />
      <p className="text-white mt-4 p-2">
        made by{" "}
        <a
          href="https://github.com/diegogomezgonza"
          target="_blank"
          rel="noopener noreferrer"
        >
          @diegogomezgonza
        </a>{" "}
        on GitHub.
      </p>
      <MobileDraws />
    </div>
  );
};

export default MobileHeader;
