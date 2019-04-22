import React from "react";
import Tarjeta from "../components/Tarjeta";
import Certificado from "../components/Certificado";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.timeoutID = setTimeout(() => {
      this.setState({
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            diplomaName: "Fundamento Js",
            image: "../images/jsdiploma.png"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            diplomaName: "Git/Github",
            image: "../images/gitgithub_diploma.png"
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            diplomaName: "React.js",
            image: "../images/diploma-Reactjs.png"
          }
        ]
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Tarjeta />
            </div>
            <div className="col-6">
              <Certificado
                certificados={this.state.data}
                imageUrl={this.state.data.image}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
