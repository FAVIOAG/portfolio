import React from "react";
import './../FormSp/form.css'
function FormEn() {
  return (
    <div className='formCont'>
      <div className='formIntro'>
        <h1 className='formh1'>Contact me!</h1>
        <h2 className='formh2'>Estoy para escucharte! Dejame tu comentario o duda en el siguiente formulario</h2>
        <h3 className='formh2'>How can I help you?</h3>
      </div>
        <div className='formDiv'>
        <form action="https://formspree.io/f/mpzepjqa" method="POST" target="_blank" className='form' >
          <input type="text" name="name" placeholder="Name" className='name' />
          <input type="email" name="email" placeholder="Email" className='name'/>
          <input type="text" name="subject" placeholder="Subject" className='name' />
          <textarea name="message" placeholder="Message" className='message'></textarea>
          <button type="submit" className='formBtn'>Send</button>
        </form>
        </div>
    </div>
  );
}

export { FormEn };
