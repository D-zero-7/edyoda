import React from "react";
import "./Home.css";
import dataAnalysisImg from "../../assets/Icons/Data-Analysis.png";
import dataWranglingImg from "../../assets/Icons/Data Wrangling.png";

function Home() {
  return (
    <div id="home">
      <div>
        <h1>Upcomming Certifications</h1>
        <div className="home__upcommingCertifications">
          <img
            id="dataAnalysisImg"
            src={dataAnalysisImg}
            alt="dataAnalysisImg"
          />
          <div className="home__upcommingCertifications__course">
            <div className="home__upcommingCertifications__course__topLinks">
              <p>CERTIFICATION</p>
              <p>ATTEMPT 1</p>
            </div>
            <p id="course_title">
              DATA ANALYSIS <br />
              CERTIFICATION
            </p>
            <div className="home__upcommingCertifications__course__bottomLinks">
              <p>COMPLETED</p>
              <p>21 MARCH 2021</p>
            </div>
          </div>
          <div className="home__upcommingCertifications__examStructure">
            <p>Exam Structure</p>
            <div className="home__upcommingCertifications__examStructure_round">
              <p>Round 1</p>
              <ul>
                <li>
                  <p>MCQS</p>
                </li>
                <li>
                  <p>CODING</p>
                </li>
              </ul>
            </div>
            <div className="home__upcommingCertifications__examStructure_round">
              <p>Round 2</p>
              <ul>
                <li>
                  <p>MCQS</p>
                </li>
              </ul>
            </div>
          </div>
          <button className="home__upcommingCertifications__examDetails">
            VIEW EXAM DETAILS
          </button>
        </div>
      </div>
      <div>
        <h1>Continue Learning</h1>
        <div className="home__continueLearning">
          <div className="home__continueLearning__left">
            <p id="moduleDetailsLink">VIEW MODULE DETAILS</p>
            <div className="home__module">
              <div className="home__module__left">
                <div className="home__module__module">
                  <img
                    id="dataWranglingImg"
                    src={dataWranglingImg}
                    alt="dataWranglingImg"
                  />
                  <div>
                    <p id="module_title">
                      DATA WRANGLING & <br /> VISUALISATION
                    </p>
                    <div className="user_profile">
                      <img
                        src="https://picsum.photos/200"
                        alt="module_profile_pic"
                        id="module_profile_pic"
                      />
                      <p>Hi Test Learner</p>
                    </div>
                  </div>
                </div>
                <div className="home__module__moduleDetails">
                  <div className="home__module__moduleDetails__details">
                    <p>Live Sessions</p>
                    <div>
                      <p className="home__module__moduleDetails__details__progress">
                        0/13
                      </p>
                      <div className="home__module__moduleDetails__details__progressBar"></div>
                    </div>
                  </div>
                  <div className="home__module__moduleDetails__details">
                    <p>Assignments</p>
                    <div>
                      <p className="home__module__moduleDetails__details__progress">
                        0/6
                      </p>
                      <div className="home__module__moduleDetails__details__progressBar"></div>
                    </div>
                  </div>
                  <div className="home__module__moduleDetails__details">
                    <p>MCQ Quizzes</p>
                    <div>
                      <p className="home__module__moduleDetails__details__progress">
                        0/6
                      </p>
                      <div className="home__module__moduleDetails__details__progressBar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home__module__right">
                <p id="todaysplan">Today's plan</p>
                <p id="date">21 MARCH 2022</p>
                <p id="topin_name">Data Transformation Using Pandas - 3</p>
                <div className="home__module__right__1">
                  <p id="feedback">Daily Feedback</p>
                  <p id="opensat">Opens at 7:30 PM</p>
                </div>
                <div className="livesession">
                  <button className="join">JOIN LIVE SESSION</button>
                  <p className="begins">BEGINS AT 7:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home__continueLearning__right">
            <div className="home__progress">
              <p>Progress Overview</p>
              <div className="home__progress_grade">
                <div className="home__progress_grade__grade">
                  <p>0%</p>
                  <p id="overall">Overall Grade</p>
                </div>
                <div id="gradebar"></div>
              </div>
              <div className="home__progress_grade">
                <div className="home__progress_grade__grade">
                  <p>0%</p>
                  <p id="overall">Attendance</p>
                </div>
                <div id="gradebar"></div>
              </div>
              <p id="viewDetailedProgress">VIEW DETAILED PROGRESS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
