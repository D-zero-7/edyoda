import React from 'react'
import "./Section.css"

function Section() {
  return (
    <div id="section">
      <p id='session_plan'>Session Plan</p>
      <p id="live">LIVE session is about to start. Please stay tuned.</p>

      <button id='section__join'>JOIN LIVE SESSION</button>

      <p id='sub-topic'>Sub-Topics</p>
      <ol>
        <li>Sorting and Indexing Dataframe</li>
        <li>Filtering Dataframe</li>
        <li>Usage of Ioc and iloc functions</li> 
      </ol>

      <p>session details</p>
    </div>
  )
}

export default Section
