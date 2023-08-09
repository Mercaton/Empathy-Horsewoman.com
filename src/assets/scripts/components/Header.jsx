const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('ul a');
navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
});

// const menuLinks = document.querySelectorAll('.list-item');
//
// menuLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         // Usuń podświetlenie ze wszystkich linków
//         menuLinks.forEach(link => {
//             link.classList.remove('active');
//         });
//
//         // Dodaj podświetlenie do klikniętego linku
//         event.target.classList.add('active');
//     });
// });

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
                        <li className="nav-item"><a className="list-item" href="/">Start</a></li>
                        <li className="nav-item"><a className="list-item" href="/about-me">About me</a></li>
                        <li className="nav-item"><a className="list-item" href="/book">Book a lesson</a></li>
                        <li className="nav-item"><a className="list-item" href="/contact">Contact</a></li>
                    </ul>

            </header>
        </>
    )
}

export default Header;