import React from 'react';

function Aboutme() {
    return (
        <>
            <section className="aboutme">
                <div className="aboutme-bg"></div>
                <div className="aboutme-txt">
                    <h1 className="aboutme-hdl">ABOUT ME</h1>
                    <span className="text1">Empathy, cooperation, tolerance, acceptance, modernity and science.</span>
                    <span className="text2">I am a trainer and coach. I support horses and their owners so that they live together better.</span>
                    <span className="text3">I train according to the <a className="lockie" href="https://www.emotionalhorsemanship.com/">@Emotional Horsemanship by Lockie Philips.</a></span>
                    <span className="text2">I WILL HELP YOU TO CREATE A HARMONIOUS AND FULL OF JOY RELATIONSHIP WITH YOUR HORSE AND IN A FEELING OF RELAXATION, CONFIDENCE AND PLEASURE FROM RIDING. I invite you to participate in one of my programs or for individual training, where I use a modern approach leading to a SYNCHRONIZED, FOCUSED, CONNECTED, HAPPY AND HEALTHY HORSE</span>
                    <button className="bookalesson-btn"><a href="/book">Book a lesson</a></button>
                </div>
            </section>
        </>
    );
}

export default Aboutme;