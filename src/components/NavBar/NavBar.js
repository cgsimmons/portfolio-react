import React from 'react';
import s from './NavBar.css';


export default () => {
  return (
    <nav className="NavBar">
      <a href="/">HOME</a>
      <a href="#Education">EDUCATION</a>
      <a href="#Work">WORK HISTORY</a>
      <a href="#Skills">SKILLS</a>
      <a href="#Portfolio">PORTFOLIO</a>
      <a href="#Contact">CONTACT</a>
    </nav>
  );
};
