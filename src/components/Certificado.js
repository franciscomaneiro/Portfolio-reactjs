import React from "react";

export default class Certificado extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.certificados.map(certificados => {
          return (
            <div key={certificados.id}>
              <div className="Cetificado-Header">
                <h1>{certificados.diplomaName}</h1>
              </div>
              <div className="Certificado-img">
                <img src={this.props.imageUrl} alt="Certificado" />
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
