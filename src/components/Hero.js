import React from "react";
import ImgFooter from "../images/Chiguireteam.png";
import "./styles/Hero.css";

export default class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Hero_main">
          <img src={ImgFooter} alt="Imgteam" className="Hero_main-img" />
        </div>
      </React.Fragment>
    );
  }
}
