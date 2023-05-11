import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


function ContactForm() {
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_7yxhk5g",
                "template_tfqynko",
                form.current,
                "jgjWOMpQ9GuojFCYm"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("Message sent");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }
    return (
        <>
            <div className="form-container">
                <div className="contacts-form">
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <h3 className="form_hdl">CONTACT ME</h3>
                        <input
                            type="text"
                            name="user_name"
                            id="name"
                            placeholder="Your name..."
                            required>
                        </input>
                        <input
                            type="email"
                            name="user_email"
                            id="email"
                            placeholder="Your email adress..."
                            required>
                        </input>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="How can I help you...">
                        </textarea>
                        <button
                            className="btn form-btn"
                            type="submit"
                            value="Send"
                        >Submit
                        </button>
                    </form>
                    <div className="contacts">
                        <div className="socials1">
                            <a href="#" className="socials1-icon"><i className="fa-brands fa-square-facebook"></i></a>
                            <a href="#" className="socials1-icon"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        <div className="socials2">
                            <a href="#" className="socials2-icon"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#" className="socials2-icon"><i className="fa-brands fa-patreon"></i></a>
                            <a href="#" className="socials2-icon"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className="contact-info">
                            <i className="form-icon fa-thin fa-phone">507-073-084</i>
                            <i className="form-icon">empathyhorsewoman@icloud.com</i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
