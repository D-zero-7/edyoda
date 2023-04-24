import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { FiClock } from 'react-icons/fi';
import './Assignment.css';

function Assignment() {
	return (
		<div className="Quizmain">
			<div className="assignmentHeading">
				<div id="assignment1">
					<h1 className="Quizheading__datatypes">
						Assignment-1: Operators | Loops
					</h1>
					<p id="Quizheadingdatetext">23rd April 2023, Sunday</p>
				</div>
				<div id="assignment11">
					<div>
						<h1 className="Quizheading__datatypes">3</h1>
						<p id="Quizheadingdatetext">problems</p>
					</div>
					<div>
						<h1 className="Quizheading__datatypes">100</h1>
						<p id="Quizheadingdatetext">Total Score</p>
					</div>
				</div>
			</div>
			<h2 id="Quizdetails">Assignment Details</h2>
			<div className="Quizdetails">
				<div>
					<h1>10</h1>
					<p>Questions</p>
				</div>
				<div>
					<h1>-</h1>
					<p>Duration</p>
				</div>
				<div id="scoreend">
					<h1>25</h1>
					<p>Total Score</p>
				</div>
				<div id="Quizdetails__emptydash"></div>
				<div className="Quizdetails__startend">
					<p>start:</p>
					<div id="startdate">
						<FiCalendar size={25} />
						<p>23 April, 2023</p>
					</div>
					<div id="startdate">
						<FiClock
							style={{ marginTop: '5px' }}
							size={25}
						/>
						<p>7:30 PM</p>
					</div>
				</div>
				<div id="Quizdetails__emptydash1"></div>
				<div className="Quizdetails__startend">
					<p>End:</p>
					<div id="startdate">
						<FiCalendar size={25} />
						<p>23 Dec, 2023</p>
					</div>
					<div id="startdate">
						<FiClock
							style={{ marginTop: '5px' }}
							size={25}
						/>
						<p>11:59 PM</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Assignment;
