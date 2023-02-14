import './About.css'
import React from "react";
import picStand from './../../assets/picStand.jpg'
const AboutSp = () => {

return (
<div className='totalCont'>
    <img src={picStand} className='aboutImg' alt='fotoDePie' />
    <div className='aboutText'>
        <h1 className='aboutTitle'>Sobre mi...</h1>
        <h2 className='descriptionAbout'>Dedicado y avocado a la tecnologia. Desde temprana edad formandome como tecnico electronico, y actualmente en mi trabajo, dedicado a las telecomunicaciones y nuevas tecnologias. Capacitandome en lenguajes de programacion y frameworks para crecer profesionalmente y desarrollarme laboralmente.   </h2>
    </div>
</div>
)



}

export { AboutSp };