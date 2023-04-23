import React from 'react'
import "./Topic.css";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tabs from "../../components/Tabs";
import Section from './components/Section';

const Topic=() =>{
  return (
    <div id='topic'>
      <h1>Python Loops</h1>
      <p>15 DECEMBER 2021, WEDNESDAY, 7:30 PM</p>
      <div className='daily_feedback'>DAILY FEEDBACK</div>
      <div id='tabs'>
<Tabs>
        <div label="SESSION PLAN">
        <Section/>
        </div>
        <div label="PRE-WATCH VIDEOS">
prewatch        </div>
        <div label="SESSION RECORDING">
         RECORDING
        </div>
        <div label="REFERENCES">
          references
        </div>
      </Tabs>
      </div>
  
    </div>
  )
}

export default Topic
