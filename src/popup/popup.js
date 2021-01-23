import "./popup.scss";
import React from "react";

class Popup extends React.Component {
  render() {
    return (
      <>
        <div className="popup">
          <div className="popup__container">
            <a href="/" alt="close-button">
              <i className="fas fa-times-circle"></i>
            </a>
            <div className="popup__container-text">{this.props.children}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Popup;
