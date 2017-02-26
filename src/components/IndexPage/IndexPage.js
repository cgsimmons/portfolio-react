import React from 'react';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Work from '../Work/Work';
import About from '../About/About';
import './IndexPage.css';

export default () => {
  return (
    <div className="IndexPage">
      <div className="banner">
        <h1>Chris Simmons Site!</h1>
      </div>
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Work />
    </div>
  );
};
