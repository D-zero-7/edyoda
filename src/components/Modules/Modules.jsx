import React, { useEffect } from "react";
import "./Module.css"
import Topic from "./components/topic/Topic";
import Assignment from "./components/assignment/Assignment";
import Quiz from "./components/quiz/Quiz";
import SideNavs from "./components/SideNavs"
import play from "../../assets/Icons/Data-Analysis.png"
 
function Modules() {
  
  return <div id="module">
    <SideNavs>
    <div label="Python Loops" icon={play}>
    <Topic/> 
    </div>
    <div label="Quiz: Data Types">
      <Quiz/>       </div>
    <div label="Assignment-1: Operators | Loops">
    <Assignment/> 
    </div>
  </SideNavs>
  </div>;
}

export default Modules;
