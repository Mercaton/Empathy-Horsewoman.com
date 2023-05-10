

function ContactForm() {
    return (
        <>
            <div className="form-container">
                <div className="contacts-form">
                    <form className="contact-form">
                        <h3 className="form_hdl">CONTACT ME</h3>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name..."
                            required>
                        </input>
                        <input
                            type="email"
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
                            <i className="form-icon fa-light fa-phone">507-073-084</i>
                            <i className="form-icon fa-regular fa-envelope">empathyhorsewoman@icloud.com</i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;