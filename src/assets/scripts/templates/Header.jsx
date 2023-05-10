
function Header() {
    return (
        <>
            <div className="header__wrapper">
                <input type="checkbox" id="check"></input>
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo-text">Empathy Horsewoman</label>
                    <ul className="menu-list">
                        <li className="nav-item"><a className="list-item active" href="#">Start</a></li>
                        <li className="nav-item"><a className="list-item" href="#">About me</a></li>
                        <li className="nav-item"><a className="list-item" href="#">Book a lesson</a></li>
                        <li className="nav-item"><a className="list-item" href="#">Contact</a></li>
                    </ul>

            </div>
        </>
    )
}

export default Header;