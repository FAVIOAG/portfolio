import "./form.css";

const FormSp = () => {
return (
    <div className='formCont'>
      <div className='formIntro'>
        <h1 className='formh1'>Contactame!</h1>
        <h2 className='formh2'>Estoy para escucharte! Dejame tu comentario o duda en el siguiente formulario</h2>
        <h3 className='formh2'>¿Como puedo ayudarte?</h3>
      </div>
        <div className='formDiv'>
        <form action="https://formspree.io/f/mpzepjqa" method="POST" target="_blank" className='form'>
          <input type="text" name="name" placeholder="Nombre" className='name' />
          <input type="email" name="email" placeholder="Email" className='name'/>
          <input type="text" name="subject" placeholder="Asunto" className='name' />
          <textarea name="message" placeholder="Mensaje" className='message'></textarea>
          <button type="submit" className='formBtn'>Enviar</button>
        </form>
        </div>
    </div>
  )}

 export { FormSp };
 