import React from "react";
import Button from "../components/button/button";
import "./user.scss";
class Login extends React.Component {
  render() {
    return (
      <section className="login">
        <div className="login__container">
          <h1>Welcome to landC@re admin! </h1>
          <h3>Please login below </h3>
          <form className="login__form">
            <div className="login__form-group">
              <input
                type="text"
                name="username"
                required
                id="username"
                autoFocus
                placeholder="username"
              />
            </div>
            <div className="login__form-group">
              <input
                type="text"
                name="password"
                id="password"
                required
                placeholder="password"
              />
            </div>
            <div>
              <Button scss="btn">login</Button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
