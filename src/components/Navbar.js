import React, { useState, Fragment } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Logo from "../images/appelier-logo.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState("1");

  const { t, i18n } = useTranslation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleClickLang = (event) => {
    setActive(event.target.id);
  };

  function clickLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="home" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} width="150" height="50" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="service"
                className="nav-links"
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <p>{t("app.services")}</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-links"
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <p>{t("app.about")}</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="footer"
                className="nav-links"
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <p>{t("app.contact")}</p>
              </Link>
            </li>
            <li className="nav-item">
              <nav className="nav-item-select">
                <button
                  key={1}
                  className={active === "1" ? "aactive" : ""}
                  id={"1"}
                  onClick={(e) => {
                    clickLanguage("en");
                    handleClickLang(e);
                  }}
                >
                  EN
                </button>

                <button
                  key={2}
                  className={active === "2" ? "aactive" : ""}
                  id={"2"}
                  onClick={(e) => {
                    clickLanguage("tr");
                    handleClickLang(e);
                  }}
                >
                  TR
                </button>
              </nav>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
