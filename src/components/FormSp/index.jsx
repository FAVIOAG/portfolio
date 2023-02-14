import React from 'react';
function FormSp() {
  
    return (
        <form action="https://formspree.io/f/mpzepjqa" method="POST">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    )
 
  
  
}

export {FormSp}