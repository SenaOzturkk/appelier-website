import React, { useState } from "react";
import "./Footer.css";
import axios from "axios";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const contactUrl =
  "https://t3nfvkt6jf.execute-api.us-east-1.amazonaws.com/prod/contact";

function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(null);
  const { t } = useTranslation();

  const submitHandler = (event) => {
    event.preventDefault();
    if (email.trim() === "" || name.trim() === "" || message.trim() === "") {
      return;
    }
    setAlert(null);
    const requestConfig = {
      headers: {
        "x-api-key": "PoTol33x6e5FHms60xwu7O7Mh0m3RlC80S610nrf",
      },
    };
    const requestBody = {
      name: name,
      email: email,
      message: message,
    };
    axios.post(contactUrl, requestBody, requestConfig).then((response) => {
      console.log(response);
      setAlert("");
    });
  };

  return (
    <div className="footer-container" id="footer">
      <div class="footer-links">
        <form onSubmit={submitHandler} className="input-areas">
          <p className="footer-subscription-text"> {t("app.contactUs")}</p>
          <div className="footer-line"></div>
          <input
            className="footer-input"
            name="name"
            type="text"
            placeholder={t("app.yourName")}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <div className="footer-line"></div>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder={t("app.yourEmail")}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="footer-line"></div>
          <input
            className="footer-input"
            name="message"
            type="text"
            placeholder={t("app.yourMessage")}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <div className="footer-line"></div>
          <input
            type="submit"
            className="footer-button"
            placeholder={t("app.send")}
          />
        </form>
        {alert && <p className="message">{alert}</p>}

        <div class="footer-link-items">
          <h2> a</h2>
          <div className="footer-line-item"></div>

          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <p>{t("app.services")}</p>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
            <p>{t("app.about")}</p>
          </Link>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <p>{t("app.contact")}</p>
          </Link>
        </div>
        <div class="footer-link-items">
          <h2 className="footer-link-title">
            <p>{t("app.socialMedia")}</p>
          </h2>
          <div className="footer-line-item"></div>
          <div class="social-icons">
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/company/appelier-yaz%C4%B1l%C4%B1m-ve-dan%C4%B1%C5%9Fmanl%C4%B1k-hizmetleri-ltd-%C5%9Fti/"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/Appelier3"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/appelier_tr/"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>

      <div class="footer-text">
        <p>0232 502 91 34</p>
        <p>Kazimdirik Mahallesi 375 Sokak No:11/1</p>
        <p>İzpek Trend Plaza No: 215 Bornova, İzmir, Türkiye</p>
      </div>
    </div>
  );
}

export default Footer;
