import menuItems from "./MenuItems";
import logo from "../../svgs/logo.svg";
import "./navBar.scss";
import React from "react";

const Links = ({ styleName }) => {
  return menuItems.map((item) => (
    <li className={styleName} key={item.title}>
      <a href={item.link}>{item.title}</a>
    </li>
  ));
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <header>
        <nav className="nav__bar">
          <div className="nav__bar__container">
            <div className="nav__bar-logo">
              <a href="/home">
                <img src={logo} alt="logo" name="logo" />
              </a>
            </div>
            <ul className="nav__bar__list-desktop">
              <Links styleName="nav__bar-links" />
            </ul>
            <div className="nav__bar__mobile">
              <button onClick={this.handleClick}>
                <i
                  className={this.state.toggle ? "fas fa-times" : "fas fa-bars"}
                ></i>
              </button>
              <div>
                <ul className="nav__bar__list-mobile">
                  {this.state.toggle ? (
                    <Links styleName="nav__bar-links-mobile" />
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
