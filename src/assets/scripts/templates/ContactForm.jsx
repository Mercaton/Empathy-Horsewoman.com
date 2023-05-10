

function ContactForm() {
    return (
        <>
            <div className="form-container">
                <div className="contacts-form">
                    <form className="contact-form">
                        <h3 className="form_hdl">NAPISZ DO MNIE</h3>
                        <input type="text" id="name" placeholder="Twoje imię i nazwisko..." required></input>
                        <input type="email" id="email" placeholder="Adres email..." required></input>
                                <textarea id="message" rows="5" placeholder="Jak mogę Ci pomóc..."></textarea>
                                <button className="btn form-btn" type="submit">WYŚLIJ</button>
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
                            <i className="fa-regular fa-phone">507-073-084</i>
                            <i className="fa-regular fa-envelope">empathyhorsewoman@icloud.com</i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;