import React from "react";
import './form.css'
function FormSp() {
  return (
    <div className='formCont'>
      <div>
        <h1>Contactame!</h1>
        <h2>Estoy para escucharte! Dejame tu comentario o duda en el siguiente formulario</h2>
        <h3>¿Como puedo ayudarte?</h3>
      </div>
        <form action="https://formspree.io/f/mpzepjqa" method="POST" className='form'>
          <input type="text" name="name" placeholder="Your Name" className='name' />
          <input type="email" name="email" placeholder="Your Email" className='name'/>
          <textarea name="message" placeholder="Your Message" className='message'></textarea>
          <button type="submit">Send</button>
        </form>
    </div>
  );
}

export { FormSp };
