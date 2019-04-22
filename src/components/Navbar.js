import React from "react";
import Navbar_header from "../images/Chiguirito.png";
import "./styles/Navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Navbar_header">
          <div>
            <img
              className="Navbar_header-img"
              src={Navbar_header}
              alt="Header"
            />
            <span className="font-weight-light pr-1">Portfolio's</span>
            <span className="font-weight-bold"> Francisco</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
