
function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__menu">
                    <ul className='menu-list'>
                        <a href=""><li className="menu-item">O mnie</li></a>
                        <a href=""><li className="menu-item">Oferta</li></a>
                        <a href=""><li className="menu-item">Blog</li></a>
                        <a href=""><li className="menu-item">Kontakt</li></a>

                    </ul>
                </div>
                <div className="header__logo">
                    <h1 className="logo-text">Empathy Horsewoman</h1>
                </div>

            </div>
        </header>
    );
}

export default Header;