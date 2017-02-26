import React from 'react';
import MdHome from 'react-icons/md/home';
import FaGraduationCap from 'react-icons/fa/graduation-cap';
import FaBlackTie from 'react-icons/fa/black-tie';
import FaCode from 'react-icons/fa/code';
import MdWork from 'react-icons/md/work';
import FaInfoCircle from 'react-icons/fa/info-circle';
import Scrollchor from 'react-scrollchor';
import './NavLinks.scss';

export default () => {
  return (
    <div className="NavLinks">
      <ul>
        <li>
          <Scrollchor to="#root">
            <MdHome />
            <span>Top of Page</span>
          </Scrollchor>
        </li>
        <li>
          <Scrollchor to="#About">
            <FaInfoCircle />
            <span>About Me</span>
          </Scrollchor>
        </li>
        <li>
          <Scrollchor to="#Skills">
            <FaCode />
            <span>Skills</span>
          </Scrollchor>
        </li>
        <li>
          <Scrollchor to="#Portfolio">
            <MdWork />
            <span>Portfolio</span>
          </Scrollchor>
        </li>
        <li>
          <Scrollchor to="#Education">
            <FaGraduationCap />
            <span>Education</span>
          </Scrollchor>
        </li>
        <li>
          <Scrollchor to="#Work">
            <FaBlackTie />
            <span>Work History</span>
          </Scrollchor>
        </li>
      </ul>
    </div>
  );
};
