import "./Skills.css";
import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {BsGithub} from 'react-icons/bs'

const SkillsSp = () => {
  return (
    <div className="contIcons">
      <div className='card'>
        <h1 className='cardTitle'>HTML</h1>
        <h2 className='cardDescription'>
            Herramienta de etiquetado para modelar y estructurar paginas web.
        </h2>
        <h3 className='cardIcon'>
          <AiOutlineHtml5 />
        </h3>
      </div>
      <div className='card'>
        <h1 className='cardTitle'>CSS</h1>
        <h2 className='cardDescription'>
        Herramienta para estilar y dar forma y formato al contenido web.
        </h2>
        <h3 className='cardIcon'>
        <FaCss3Alt />
        </h3>
      </div>
      <div className='card'>
        <h1 className='cardTitle'>JavaScript</h1>
        <h2 className='cardDescription'>
        Lenguaje de programacion utilizado para dar dar interactividad y dinamismo a paginas y aplicaciones web.
        </h2>
        <h3 className='cardIcon'>
        <TbBrandJavascript />
        </h3>
      </div>
      <div className='card'>
        <h1 className='cardTitle'>React</h1>
        <h2 className='cardDescription'>
        Biblioteca de JavaScript, permite generar componentes reutilizables. 
        </h2>
        <h3 className='cardIcon'>
        <FaReact />
        </h3>
      </div>
      <div className='card'>
        <h1 className='cardTitle'>GitHub</h1>
        <h2 className='cardDescription'>
        Almacenamiento virtual de proyectos y control de versiones.
        </h2>
        <h3 className='cardIcon'>
        <BsGithub/>
        </h3>
      </div>
    </div>
  );
};

export { SkillsSp };
