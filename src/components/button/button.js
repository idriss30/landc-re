import React from "react";
import "./button.scss";

const Button = ({ children, scss }) => {
  return <button className={scss}>{children}</button>;
};

export default Button;
