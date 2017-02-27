import React from 'react';
import Education from '../sections/Education/Education';
import Skills from '../sections/Skills/Skills';
import Portfolio from '../sections/Portfolio/Portfolio';
import Work from '../sections/Work/Work';
import About from '../sections/About/About';
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
