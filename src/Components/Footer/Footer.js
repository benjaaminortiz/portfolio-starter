import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={Wave}
        alt="footer"
        style={{
          transform: "rotateY(180deg)",
          backgroundSize: "fill",
        }}
      />
      <div className="footer-content">
        <span>Benjask89@icloud.com</span>
        <span>Benjamin Joel Ortiz - Buenos Aires, Argentina</span>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/benjamin-ortiz-3b5589191/">
            <Linkedin color="white" size="3rem" />
          </a>
          <a href="github.com/benjaaminortiz">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
