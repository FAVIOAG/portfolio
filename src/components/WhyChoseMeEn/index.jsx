import "./whyCM.css";
import React from "react";

const WhyChoseMeEn = () => {
  return (
    <>
      <h1 className='mainTit'>Why choose Me?</h1>
      <h2 className='secTit'>What distinguishes me from the rest?</h2>
      <p className='descP'>
      Durying mi entire carrer I have developed different roles and functions, not only about tech but many others areas. Which gave me the abbilitty and flexibility to adapt myself to several situations very quickly. My pillars are...
        
      </p>
      <div className='cardWCont'>
      <div className='cardW'>
        <h1 className='mainCardTit'>🤝 Team Work.</h1>
        <p className='cardP'>
          How many times have you ever heard this? Certainly a lot! But it goes beyond a phrase, it's about focus myself to construct an easy reading and mantaining code so as to build a real team proyect!
        </p>
      </div>

      <div className='cardW' >
        <h1 className='mainCardTit'>🏋️ Motivation and ambition.</h1>
        <p className='cardP'>
        Two of the main keys to success, ider professionally or personally. I can only compare me with myself  and always try to get better in order to achieve my goals.
        </p>
      </div>

      <div className='cardW'> 
        <h1 className='mainCardTit'>👨‍💻 Active and constant learning.
        </h1>
        <p className='cardP'> What's new today it may not be so new tomorrow, in IT that's a fact. Active and constant learning in languages, frameworks and good practices will allow me to stay updated. Having in mind that learning it's no only related to read documentation, it's also about having an open-mindedness attitude to learn from my collegues.
        </p>
      </div>
      </div>
    </>
  );
};

export { WhyChoseMeEn };
