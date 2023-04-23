import React, { useState } from "react";
import "./CourseHeader.css";
import { AiFillCaretDown } from "react-icons/ai";

function CourseHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="course">
        <div onClick={toggleDropdown} id="course_dropdown">
          <p>
            DS239939
            <AiFillCaretDown className="downicon" />
          </p>
        </div>
        <p>Data Scientist Program</p>
      </div>
      <div className={`${isDropdownOpen ? "dropdownOpen" : "dropdownClosed"}`}>
        <div>
          <p>Select Programme</p>
        </div>
        <ul>
          <li>
            <p>ECRD</p>
          </li>
          <li>
            <p>FSR22222</p>
          </li>
          <li>
            <p>DS261121</p>
          </li>
          <li>
            <p>DS031221</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CourseHeader;
