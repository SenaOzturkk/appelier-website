import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { useTranslation } from "react-i18next";

function Cards() {
  const { t } = useTranslation();

  return (
    <div className="cards">
      <div className="cards__container">
        <h1 className="service-title">
          <p>{t("app.services")}</p>
        </h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/1.png"
              text={t("app.cardText1")}
              path=""
              desc={t("app.cardDesc1")}
            />
            <CardItem
              src="/images/2.png"
              text={t("app.cardText2")}
              path=""
              desc={t("app.cardDesc2")}
            />
            <CardItem
              src="/images/3.png"
              text={t("app.cardText3")}
              path=""
              desc={t("app.cardDesc3")}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
