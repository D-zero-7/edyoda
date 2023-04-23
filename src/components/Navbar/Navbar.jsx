import React from "react";
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { FaChalkboardTeacher } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav id="content__main_nav">
      <ul id="content__main_nav__list">
        <li>
          <div className="content__main_nav__item">
            <FaHome size={30} />
            <p>Home</p>
          </div>
        </li>
        <li>
          <div className="content__main_nav__item">
            <ImBooks size={30} />
            <p>Modules</p>
          </div>
        </li>
        <li>
          <div className="content__main_nav__item">
            <FaChalkboardTeacher size={30} />
            <p>Instructors</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
