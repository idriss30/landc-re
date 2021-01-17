import React from "react";
import NavBar from "./components/navBar/navBar";
import Landing from "./Landing/landing.js";
import { About } from "./AboutUs/about";
import Services from "./Services/service.js";
import ErrorPage from "./404/404";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
