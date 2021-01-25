import React from "react";
import NavBar from "./components/navBar/navBar";
import Landing from "./Landing/landing.js";
import { About } from "./AboutUs/about";
import Services from "./Services/service.js";
import Login from "./User/user";
import ErrorPage from "./404/404";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Popup from "./popup/popup.js";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/users/login">
              <Login />
            </Route>
            <Route exact path="/popup">
              <Popup>
                'your message has been submitted. <br /> we will get back to you
                shortly!
              </Popup>
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
