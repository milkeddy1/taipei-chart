import React from "react";
import logo from "../images/taipeilogo.png";
const Logo = () => {
  return (
    <div className="p-8 h-40 flex items-center justify-center md:justify-start	">
      <img className="w-32" src={logo} alt="" />
    </div>
  );
};

export default Logo;
