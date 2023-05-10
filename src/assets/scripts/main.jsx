import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/assets/scss/_main.scss';
import Header from "./templates/Header.jsx";
import Hero from "./templates/Hero.jsx";
import Footer from "./templates/Footer.jsx";
import ContactForm from "./templates/ContactForm.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>
  </React.StrictMode>,
)
