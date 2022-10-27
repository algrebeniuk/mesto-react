import headerLogo from '../images/Header-logo.svg';

function Header() {
    return(
      <header className="header">
        <img src={headerLogo} className="header__logo" alt="Логотип" />
      </header>
    )
}

export default Header;