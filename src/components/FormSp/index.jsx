import React from "react";
import "./form.css";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const FormSp = () => {
  const [state, handleSubmit] = useForm("mknajvon");
  const [showH, setShowH] = useState(false);

  const changeState = () => {
    setShowH(true);
  };

  const changeStateOff = () => {
    setShowH(false);
  };

  if (state.succeeded) {
    return (
      <div>
        <FormSp />
        <div className="newDiv">
          {showH && (
            <h2 className="thanksMsg">Gracias, me contactare a la brevedad!</h2>
          )}
          {showH && (
            <button className="closeMessage" onClick={changeStateOff}>
              Cerrar
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="formCont" id="formSp">
      <div className="formIntro">
        <h1 className="formh1">Contactame!</h1>
        <h2 className="formh2">
          Estoy para escucharte! Dejame tu comentario o duda en el siguiente
          formulario
        </h2>
        <h3 className="formh2">¿En que puedo ayudarte?</h3>
      </div>
      <div className="formDiv">
        <form onSubmit={handleSubmit} className="form">
          <label>Nombre:</label>
          <input id="name" type="text" name="name" className="name" />

          <label>Asunto:</label>
          <input id="subject" type="text" name="subject" className="name" />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" className="name" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label>Mensaje:</label>
          <textarea id="message" name="message" className="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="contBtnForm">
            <button
              type="submit"
              disabled={state.submitting}
              onClick={changeState}
              className="formBtn"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { FormSp };
