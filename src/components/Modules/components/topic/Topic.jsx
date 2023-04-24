import React from 'react';
import './Topic.css';
import Tabs from '../../components/Tabs';
import Section from './components/Section';
import Othersections from './components/Othersections';

const Topic = () => {
	return (
		<div id="topic">
			<h1>Python Loops</h1>
			<p>23 APRIL 2023, SUNDAY, 7:30 PM</p>
			<div className="daily_feedback">DAILY FEEDBACK</div>
			<div id="tabs">
				<Tabs>
					<div label="SESSION PLAN">
						<Section />
					</div>
					<div label="PRE-WATCH VIDEOS">
						<Othersections />
					</div>
					<div label="SESSION RECORDING">
						<Othersections />
					</div>
					<div label="REFERENCES">
						<Othersections />
					</div>
				</Tabs>
			</div>
		</div>
	);
};

export default Topic;
