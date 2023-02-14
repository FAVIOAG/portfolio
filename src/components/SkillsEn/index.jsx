import "./../SkillsSp/Skills.css";
import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {BsGithub} from 'react-icons/bs'

const SkillsEn = () => {
  return (
    <div className="contIcons">
      <div className='card'>
        <h1 className='cardTitle'>HTML</h1>
        <h2 className='cardDescription'>
          Structuring tool to develop web pages
        </h2>
        <h3 className='cardIcon'>
          <AiOutlineHtml5 />
        </h3>
      </div>
      <div className='card'>
        <h1 className='cardTitle'>CSS</h1>
        <h2 className='cardDescription'>
        Detailing tool to shape and colour your website.
        </h2>
        <h3 className='cardIcon'>
        <FaCss3Alt />
        </h3>
      </div>
      <div className='card'>
        <h1 className='cardTitle'>JavaScript</h1>
        <h2 className='cardDescription'>
        Dev language so as to dinamify your website
        </h2>
        <h3 className='cardIcon'>
        <TbBrandJavascript />
        </h3>
      </div>
      <div className='card'>
        <h1 className='cardTitle'>React</h1>
        <h2 className='cardDescription'>
        JavaScript framework it allows to create reusable components. 
        </h2>
        <h3 className='cardIcon'>
        <FaReact />
        </h3>
      </div>
      <div className='card'>
        <h1 className='cardTitle'>GitHub</h1>
        <h2 className='cardDescription'>
        Virtual storage for proyects and version control.
        </h2>
        <h3 className='cardIcon'>
        <BsGithub/>
        </h3>
      </div>
    </div>
  );
};

export { SkillsEn };
