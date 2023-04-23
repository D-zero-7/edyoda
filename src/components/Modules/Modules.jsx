import React, { useEffect } from "react";
import "./Module.css"
import Quiz from "./components/quiz/Quiz";
import Topic from "./components/topic/Topic";
import SideNavs from "./components/SideNavs"
import play from "../../assets/Icons/Data-Analysis.png"
 
function Modules() {
  
  return <div id="module">
    <SideNavs>
    <div label="Python Loops" icon={play}>
    <Topic/> 
    </div>
    <div label="Quiz: Data Types">
      <Topic/>       </div>
    <div label="Assignment-1: Operators | Loops">
    <Topic/> 
    </div>
  </SideNavs>
  </div>;
}

export default Modules;
