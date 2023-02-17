import "./../CertificationSp/cert.css";
import React from "react";
import argProg from "./../../assets/argProg.jpg";
import cCert from "./../../assets/cCert.jpg";
import java1 from "./../../assets/java1.jpg";
import java2 from "./../../assets/java2.jpg";

const CertificationEn = () => {
  return (
    <div id="certificationEn">
      <h1 className="mainTit">Learning certifications.</h1>
      <div className="certCont">
        <div className="certCard">
          <h1 className="certTit">Java 1</h1>
          <h2 className="certDesc">
            First module related to JAVA develop. Using an IDE to generate JAVA
            projects. Dicted by "Polo Tecnologico de Rosario" certified by UTN
            ("Universidad Tecnologica Nacional")
          </h2>
          <div className="imageDiv">
            <a href={java1} target="_blank">
              <img
                src={java1}
                className="certImg"
                alt="imagenDeCertificacion"
              />
            </a>
          </div>
        </div>

        <div className="certCard">
          <h1 className="certTit">Java 2</h1>
          <h2 className="certDesc">
            Second module related to JAVA develop. Usage of JAVA frameworks such
            as Spring and Hibernate. Dicted by "Polo Tecnologico de Rosario"
            certified by UTN ("Universidad Tecnologica Nacional")
          </h2>
          <div className="imageDiv">
            <a href={java2} target="_blank">
              <img
                src={java2}
                className="certImg"
                alt="imagenDeCertificacion"
              />
            </a>
          </div>
        </div>

        <div className="certCard">
          <h1 className="certTit">Argentina Programa 4.0</h1>
          <h2 className="certDesc">
            Course dicted by "Ministerio de Economia de la Nacion", based mainly
            in JavaScript and Ruby
          </h2>
          <div className="imageDiv">
            <a href={argProg} target="_blank">
              <img
                src={argProg}
                className="certImg"
                alt="imagenDeCertificacion"
              />
            </a>
          </div>
        </div>

        <div className="certCard">
          <h1 className="certTit">C#</h1>
          <h2 className="certDesc">
            Certification referred to C# and .NET dicted by "Educacion IT"
            coding school.
          </h2>
          <div className="imageDiv">
            <a href={cCert} target="_blank">
              <img
                src={cCert}
                className="certImg"
                alt="imagenDeCertificacion"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CertificationEn };
