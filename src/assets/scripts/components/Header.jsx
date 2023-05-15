
function Header() {
    return (
        <>
            <header className="header__wrapper">
                <input type="checkbox" id="check"></input>
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo-text">Empathy Horsewoman</label>
                    <ul className="menu-list">
                        <li className="nav-item"><a className="list-item active" href="/">Start</a></li>
                        <li className="nav-item"><a className="list-item" href="/about-me">About me</a></li>
                        <li className="nav-item"><a className="list-item" href="/book">Book a lesson</a></li>
                        <li className="nav-item"><a className="list-item" href="/contact">Contact</a></li>
                    </ul>

            </header>
        </>
    )
}

export default Header;