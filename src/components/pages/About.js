import React from "react";
import "../../App.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about" id="about">
      <h1 className="about-title">
        <p>{t("app.about")}</p>
      </h1>

      <p className="about-desc">
        <p>{t("app.aboutDesc")}</p>
      </p>
    </div>
  );
};

export default About;
