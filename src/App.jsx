import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import CourseHeader from "./components/courseHeader/CourseHeader";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Modules from "./components/Modules/Modules";
import Instructors from "./components/Instructors/Instructors";
import Topic from "./components/Modules/components/topic/Topic";

function App() {
  return (
    <>
      <Header />
      <CourseHeader />
      <div id="content">
        <Router>
        <Navbar />
          <Routes>
            {/* <Route>
              <Route />
              <Route />
            </Route> */}
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/instructors" element={<Instructors />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
