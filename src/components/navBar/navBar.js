import menuItems from "./MenuItems";
import logo from "../../svgs/logo.svg";
import "./navBar.scss";
import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <nav className="nav__bar">
          <div className="nav__bar__container">
            <div className="nav__bar-logo">
              <a href="#">
                <img src={logo} alt="logo" name="logo" />
              </a>
            </div>
            <ul>
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
