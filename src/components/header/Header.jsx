import React from "react";
import "./Header.css";
import logo from "../../assets/Icons/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" id="logo" />
      <div className="header__user">
        <p>Hi Test Learner</p>
        <img
          src="https://picsum.photos/200"
          alt="profile_pic"
          id="profile_pic"
        />
      </div>
    </div>
  );
}

export default Header;
