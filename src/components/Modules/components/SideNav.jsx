import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./SideNav.css"
import topic from "../../../assets/Icons/topic.svg"
import moduleQuiz from "../../../assets/Icons/moduleQuiz.svg"
import assignment from "../../../assets/Icons/assignment.svg"

class SideNav extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        icon
      },
    } = this;

    let className = 'sidenav__tab-list-item';

    if (activeTab === label) {
      className += 'sidenav__tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        <div className='sidenav__item'>

        <img src={label==="Python Loops"?topic:label==="Quiz: Data Types"?moduleQuiz:assignment} alt={label} />
        <p>{label}</p>
        </div>
      </li>
    );
  }
}

export default SideNav;