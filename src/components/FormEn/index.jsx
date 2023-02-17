import React from "react";
import "./../FormSp/form.css";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

function FormEn() {
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
        <FormEn />
        <div className="newDiv">
          {showH && (
            <h2 className="thanksMsg">
              Thanks, I will answer as soon as possible!
            </h2>
          )}
          {showH && (
            <button className="closeMessage" onClick={changeStateOff}>
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="formCont" id="formEn">
      <div className="formIntro">
        <h1 className="formh1">Contact me!</h1>
        <h2 className="formh2">
          Let's talk! Leave me a message and I will reply you in the blink of an
          eye.
        </h2>
        <h3 className="formh2">How can I help you?</h3>
      </div>
      <div className="formDiv">
        <form onSubmit={handleSubmit} className="form">
          <label>Name:</label>
          <input id="name" type="text" name="name" className="name" />

          <label>Subject:</label>
          <input id="subject" type="text" name="subject" className="name" />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" className="name" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label>Message:</label>
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
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { FormEn };
