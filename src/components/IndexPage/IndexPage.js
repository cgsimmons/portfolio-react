import React from 'react';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Work from '../Work/Work';
import './IndexPage.css';

export default () => {
  return (
    <div className="IndexPage">
      <div className="banner">
        <h1>Chris Simmons Site!</h1>
      </div>
      <Skills />
      <Portfolio />
      <Education />
      <Work />
    </div>
  );
};
