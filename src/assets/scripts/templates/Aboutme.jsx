import React from 'react';

function Aboutme() {
    return (
        <>
            <section className="aboutme">
                <div className="aboutme-bg"></div>
                <div className="aboutme-txt">
                    <h1 className="aboutme-hdl">ABOUT ME</h1>
                    <span className="text1">Empatia, współpraca, tolerancja, akceptacja, nowoczesność i nauka.</span>
                    <span className="text2">Jestem trenerem i coachem. Wspieram konie i ich właścicieli by żyło im się razem wspanialej.</span>
                    <span className="text3">Trenuję zgodnie z metodą <a className="lockie" href="">@Emotional Horsemanship by Lockie Philips.</a></span>
                    <span className="text2">POMOGĘ TOBIE W STWORZENIU HARMONIJNEJ I PEŁNEJ RADOŚCI RELACJI Z TWOIM KONIEM
            ORAZ W POCZUCIU ROZLUŹNIENIA, PEWNOŚCI SIEBIE i PRZYJEMNOŚCI Z JAZDY.
            Zapraszam do uczestnictwa w jednym z moich programów lub na indywidualne treningi, gdzie wykorzystuję nowoczesne podejście prowadzące do ZSYNCHRONIZOWANEGO, SKUPIONEGO, POŁĄCZONEGO Z TOBĄ, SZCZĘŚLIWEGO I ZDROWEGO KONIA</span>
                    <button className="bookalesson-btn">Book a lesson</button>
                </div>
            </section>
        </>
    );
}

export default Aboutme;