import React, { useContext } from "react";
import "./Portfolio.css";
import Tinder from "../../img/tindercover.png";
import Tiktok from "../../img/tiktokcover.png";
import Heroapi from "../../img/heroapicover.png";
import Card from "./Card";
import { ThemeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const data = [
    {
      title: "MERN Stack Tinder Clone",
      text: "Clon de App TINDER Basado en Stack MERN. Imita la interfaz principal de Tinder, utilizando un back-end en MongoDB para mostrar los datos de los usuarios disponibles para el match",
      img: Tinder,
      button: "Ver",
      url: "https://tinder-clone-d1634.web.app/",
    },
    {
      title: "Mern Stack TikTok Clone",
      text: "Clon de app TikTok basado en Stack MERN. Imita la interfaz del feed de TikTok, obteniendo como datos los videos con sus estaditicas (cantidad de likes, comentarios) a partir de MongoDB ",
      img: Tiktok,
      button: "Ver",
      url: "https://tiktok-ffa29.web.app/",
    },
    {
      title: "React-Redux API",
      text: " Se utilizo una API externa para obtener datos sobre distintos superheroes y Redux para poder agruparlos segun determinadas caracteristicas, utilizando React para estructurar y dar estilo componentes y datos",
      img: Heroapi,
      button: "Ver en Github",
      url: "https://github.com/benjaaminortiz/Alkemy",
    },
  ];

  return (
    <div className="pf" id='#portfolio'>
      <h1 className={darkMode ? "title-dark" : "title"}>Proyectos</h1>
      <div className="cards">
        {data.map((card) => {
          const { title, text, img, button, url } = card;

          return (
            <Card
              title={title}
              text={text}
              img={img}
              button={button}
              url={url}
            />
          );
        })}
        {/* <Card
          title="MERN Tinder Clone"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
            enim facilisis, posuere sem sed, fermentum lorem. Nulla nec arcu in
            diam laoreet sodales at eu enim. Ut a metus et lectus vulputate
            pretium. Ut in auctor nisi, et rhoncus odio. Praesent vehicula
            tempor lectus, vitae finibus neque luctus nec. Mauris ut metus porta
            mauris vulputate tristique finibus non odio.

"
          img={Tinder}
        /> */}
      </div>
    </div>
  );
};

export default Portfolio;
