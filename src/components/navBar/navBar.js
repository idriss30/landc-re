import menuItems from "./MenuItems";
import logo from "../../svgs/logo.svg";
import "./navBar.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "../../Landing/landing";
import { About } from "../../AboutUs/about";

const Links = ({ styleName }) => {
  return menuItems.map((item) => (
    <li className={styleName} key={item.title}>
      <Link to={item.link}>{item.title}</Link>
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
      <Router>
        <header>
          <nav className="nav__bar">
            <div className="nav__bar__container">
              <div className="nav__bar-logo">
                <Link to="/">
                  <img src={logo} alt="logo" name="logo" />
                </Link>
              </div>
              <ul className="nav__bar__list-desktop">
                <Links styleName="nav__bar-links" />
              </ul>
              <div className="nav__bar__mobile">
                <button onClick={this.handleClick}>
                  <i
                    className={
                      this.state.toggle ? "fas fa-times" : "fas fa-bars"
                    }
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
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Landing />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default NavBar;
