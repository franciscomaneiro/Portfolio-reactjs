import React from "react";
import "./styles/Tarjeta.css";
import Avatar from "../images/Chiguirito.png";

export default class Tarjeta extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row Tarjeta-main">
            <div className="col-12 Tarjeta-header">
              <h1>Me Presento</h1>
            </div>
            <div className="col-6 Tarjeta_imgAvatar">
              <img className="Tarjeta_imgAvatar-img" src={Avatar} alt="Soyio" />
              <span className="font-weight-light">@Franciscomanei2</span>
              <br />
              <span className="font-weight-bold">Programador</span>
            </div>
            <div className="col-6 Tarjeta-name">
              <p>Francisco Maneiro</p>
              <p>Edad: 22</p>
              <p>Venezuela, Estado Anzoategui</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
