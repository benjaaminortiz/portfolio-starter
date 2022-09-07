import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import { ThemeContext } from "./Context";
import { useContext, useRef } from "react";

function App() {

  const skillsRef = useRef();

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  function handleBackClick() {
    window.scrollTo({
      top: 0,
    
      behavior: 'smooth'
    });
}
  return (
    <div className={darkMode ? "App-dark" : "App"}>
      
      <Navbar />
      <Intro />
      <Skills ref={skillsRef} />
      <Portfolio />
      <Contact />
      
      <button className='button' style={{position: 'fixed', zIndex: 10000, left: '20px', bottom: '30px'}} onClick={handleBackClick}>Volver Arriba</button>
     
      
      <Footer />
    </div>
  );
}

export default App;
