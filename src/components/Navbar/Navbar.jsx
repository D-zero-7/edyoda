import React from "react";
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { FaChalkboardTeacher } from "react-icons/fa";
import "./Navbar.css";
import { useNavigate } from "react-router-dom"


function Navbar() {
   let navigate = useNavigate()
  return (
    <nav id="content__main_nav">
      <ul id="content__main_nav__list">
        <li>
          <div className="content__main_nav__item" onClick={() => navigate("/")}>
            <FaHome size={30} />
            <p>Home</p>
          </div>
        </li>
        <li>
          <div className="content__main_nav__item" onClick={() => navigate("/modules")}>
            <ImBooks size={30} />
            <p>Modules</p>
          </div>
        </li>
        <li>
          <div className="content__main_nav__item" onClick={() => navigate("./instructors")}>
            <FaChalkboardTeacher size={30} />
            <p>Instructors</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
