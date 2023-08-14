

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-menu">
                    <ul className="footer-nav">
                        <li className="f-nav-items"><a className="nav-link" href="/">Start</a></li>
                        <li className="f-nav-items"><a className="nav-link" href="/about-me">About me</a></li>
                        <li className="f-nav-items"><a className="nav-link" href="/book">Book a lesson</a></li>
                        <li className="f-nav-items"><a className="nav-link" href="/contact">Contact</a></li>
                        <li className="f-nav-items"><a className="nav-link" href="https://policies.google.com/privacy?hl=en-US">Privacy policy</a></li>
                    </ul>
                    <div className="f-socials">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-patreon"></i>
                    </div>
                </div>
                <span className="copyright">Empathy Horsewoman copyright &copy; 2023 - All rights reserved || Designed by <a className="designer"
                    href="https://github.com/Mercaton" target="_blank">Mercaton</a></span>
            </footer>
        </>
    );
}

export default Footer;