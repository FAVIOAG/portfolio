import "./../WhyChoseMeEn/whyCM.css";
import React from "react";

const WhyChoseMeSp = () => {
  return (
    <div id="whySp">
      <h1 className="mainTit">¿Porque elegirme?</h1>
      <h2 className="secTit">¿Que me distingue del resto?</h2>
      <p className="descP">
        Durante toda mi carrera me he desempeñado en diferentes roles y rubros,
        con lo cual he desarrollado conocimientos en diferentes ambitos mas alla
        del tecnologico lo que me permite tomar un foco rapido y flexible de las
        necesidades de los distintos sectores y clientes.
      </p>
      <div className="cardWCont">
        <div className="cardW">
          <h1 className="mainCardTit">🤝 Trabajo en equipo.</h1>
          <p className="cardP">
            ¿Cuantas veces escuchaste esto? Seguramente muchas, pero va mas alla
            de una frase, es enfocarse en la construccion de un codigo de facil
            lectura y mantenimiento para poder construir un verdadero proyecyo
            en equipo!
          </p>
        </div>

        <div className="cardW">
          <h1 className="mainCardTit">🏋️ Motivacion y ambicion.</h1>
          <p className="cardP">
            Creo fuertemente que son las dos llaves para el crecimiento en todos
            los aspectos, tanto profesional como personal. El unico punto de
            comparacion es yo mismo y siempre tratar de ser mejorar para lograr
            mis objetivos.
          </p>
        </div>

        <div className="cardW">
          <h1 className="mainCardTit">👨‍💻 Aprendizaje continuo y activo.</h1>
          <p className="cardP">
            Lo que hoy es nuevo quizas mañana ya sea viejo. La capacitacion
            continua en lenguajes, frameworks y buenas practicas son
            fundamentales para progresar. Priorizando diferentes formas de
            aprendizaje, con lo cual creo que, no solo se adquiere conocimiento
            de documentacion sino fudamentalmente de colegas y abriendome a
            aprender de los demas!
          </p>
        </div>
      </div>
    </div>
  );
};

export { WhyChoseMeSp };
