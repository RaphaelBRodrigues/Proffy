import React from "react";
import logo from "../../images/logo.svg";
import hero from "../../images/landing.svg";
import studyIcon from "../../images/icons/study.svg";
import giveClassesIcon from "../../images/icons/give-classes.svg";
import purpleHeartIcon from "../../images/icons/purple-heart.svg";
import "./styles.css";
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img src={hero} className="hero-image" alt="" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de 48789 conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
