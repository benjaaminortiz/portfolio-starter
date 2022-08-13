import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import { ThemeContext } from "../../Context";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sv3o4nf",
        "template_v8uojii",
        form.current,
        "PJXgd7lci4SCC60QQ"
      )
      .then(
        (result) => {
          setDone(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-left">
        <div>
          <span className={darkMode ? "title-dark" : "title"}>Contacto</span>
        </div>
        <div className="sub-title">
          <span>Llene el formulario para ponerse en Contacto</span>
        </div>
      </div>
      <div className="contact-right">
        <form
          onSubmit={sendEmail}
          ref={form}
          className={darkMode ? "frosted-dark" : "frosted"}
        >
          {done && <span>"¡Hecho! Gracias por contactarme!"</span>}
          <input name="from_name" placeholder="Nombre"></input>
          <input name="email" placeholder="Email"></input>
          <textarea name="message" placeholder="Mensaje"></textarea>
          <button type="submit" className="button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
