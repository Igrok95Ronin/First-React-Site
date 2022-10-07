import './header.css';
import slide from '../Header/slide-1.jpg';
function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <div className="header__top">
                        <h1 className="header__title">САНТЕХНИК ГРОЗНЫЙ</h1>
                        <a className="btn" href="tel:11122233 " ><span>111222333</span></a>
                    </div>
                    <div className="header__bottom">
                        <img className="header__img" src={slide} alt=""  />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;