import React from 'react';
import MdHome from 'react-icons/md/home';
import FaGraduationCap from 'react-icons/fa/graduation-cap';
import FaBlackTie from 'react-icons/fa/black-tie';
import FaCode from 'react-icons/fa/code';
import MdWork from 'react-icons/md/work';
import './NavLinks.scss';

export default () => {
  // const links = this.props.links;
  // const linkList = links.map((link) => {
  //   return (
  //     <li key={link.id}><a href={link.href}>{link.title}</a></li>
  //   );
  // });

  return (
    <div className="NavLinks">
      <ul>
        <li><a href="/"><MdHome /><span>HOME</span></a></li>
        <li><a href="#Skills"><FaCode /><span>Skills</span></a></li>
        <li><a href="#Portfolio"><MdWork /><span>Portfolio</span></a></li>
        <li><a href="#Education"><FaGraduationCap /><span>Education</span></a></li>
        <li><a href="#Work"><FaBlackTie /><span>Work History</span></a></li>
      </ul>
    </div>
  );
};
