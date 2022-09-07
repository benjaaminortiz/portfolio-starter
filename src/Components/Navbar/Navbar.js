import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { UilArrowCircleDown } from '@iconscout/react-unicons'
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Skills from '../Skills/Skills'


const Navbar = () => {

 const [hidden, setHidden] = useState(true)

 const handleClick = () => {
  hidden ? setHidden(false) : setHidden(true)
 }
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  
  



  return (
 

    <nav className={darkMode ? 'navbar-dark' : 'navbar'}>
       <div className="navbar_name"><h3>Benjamin</h3>
     <Toggle /></div>
          <UilArrowCircleDown className={hidden ? 'arrow' : 'arrow-up'} onClick={handleClick}/>
          
       
       <ul className={hidden ? 'nav-list-hidden' : 'nav-list'}>
       
       <li ><a>Inicio</a></li>
       <li><a >Skills</a></li>
       <li><a >Proyectos</a></li>
       <button style={{height: 'fit-content',alignSelf: 'center'}}className="button" >Contacto</button>

     </ul>
    </nav>





    // <div className="navbar_wrapper">
    //   <div className="navbar_left">
    //     <div className="navbar_name">Benjamin</div>
    //    
    //   </div>
    //   <div className="navbar_right">
    //     <div className="navbar_list">
    //       <ul style={{ listStyleType: "none" }}>
    //         <li>Inicio</li>
    //         <li>Skills</li>
    //         <li>Proyectos</li>
    //       </ul>
    //     </div>
    //     
    //   </div>
    // </div>
  );
};

export default Navbar;
