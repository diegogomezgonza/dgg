import React from 'react';

const Contact = () => {
  const handleMouseOver = (site) => {
    console.log(`Mouse over ${site}`);
  };

  return (
    <div className="contact-section gap-5">
      <div className="contact-site text-white" onMouseOver={() => handleMouseOver("Site 1")}>
        <h3>LinkedIn</h3>
        <p className="additional-text">Mi experiencia completa.</p>
      </div>

      <div className="contact-site text-white" onMouseOver={() => handleMouseOver("Site 2")}>
        <h3>Github</h3>
        <p className="additional-text">Un vistazo a mis proyectos</p>
      </div>
    </div>
  );
};

export default Contact;