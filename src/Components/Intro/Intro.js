import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Principal from "../../img/principal.png";
import Bluelight from "../../img/lightblob.png";
import FloatingDiv from "../Floatingdiv/FloatingDiv";
import Code3D from "../../img/codinglogo.png";
import Crown from "../../img/crown.png";
import Purplelight from "../../img/purpleblur.png";
import Pcicon from "../../img/3DPC.png";
import Brownlight from "../../img/brownblob.png";
import Rocket from "../../img/rocket.png";
import BenjaCV from "./benjacv.pdf"
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (    
    <div className="intro">
      <div className="intro_left">
        <div className="intro_name">
          <span className={darkMode ? "intro_hi-dark" : "intro_hi"}>
            Hola! Me llamo
          </span>
          <span
            className={darkMode ? "intro_name_title-dark" : "intro_name_title"}
          >
            Benjamin Ortiz
          </span>
          <span className="intro_name_body">
            Soy un Desarrollador Web Full-Stack con conocimientos de Diseño
            UX/UI y especializado en React + Node
          </span>
          <button className="button intro_button" ><a href={BenjaCV} download="Benjamin Ortiz CV.pdf">Descargar CV</a></button>
          <div className="intro_icons">
            <div className="icon_button">
              <a href="https://github.com/benjaaminortiz">
                <img src={Github} alt="github-icon" className="icon github" />
              </a>
              <p>Github</p>
            </div>
            <div className="icon_button">
              <a href="https://www.linkedin.com/in/benjamin-ortiz-3b5589191/">
                <img src={LinkedIn} alt="linkedin-icon" className="icon" />
              </a>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
      <div className="intro_right">
        <img src={Principal} alt="principal" className="principal" />
        <img src={Purplelight} alt="prple" className={darkMode ? "purpleblob-dark" : "purpleblob"} />
        <img src={Bluelight} alt="bluelight" className={darkMode ? "blueblob-dark" : "blueblob"} />
        <img src={Pcicon} alt="pclogo" className="pclogo" />
        <img
        src={Rocket} alt="rocket" className="rocket" />
        <img src={Brownlight} alt="blob" className="brownblob" />
        <div
          className="floatingdivs"
          style={{ top: "-4%", left: "-25px", zIndex: "13" }}
        >
          <FloatingDiv img={Crown} txt1="Full-Stack" txt2="Web Developer" />
        </div>
        <div style={{ zIndex: "13", top: "325px", left: "250px" }}>
          <FloatingDiv
            img={Code3D}
            txt1="React + Node"
            txt2="Javascript Stack"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
