import React from 'react';
import Banner from '../Banner/Banner';
import Education from '../sections/Education/Education';
import Skills from '../sections/Skills/Skills';
import Portfolio from '../sections/Portfolio/Portfolio';
import Work from '../sections/Work/Work';
import About from '../sections/About/About';
import Volunteer from '../sections/Volunteer/Volunteer';
import Interests from '../sections/Interests/Interests';
import './IndexPage.css';

export default () => {
  return (
    <div className="IndexPage">
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Work />
      <Volunteer />
      <Interests />

    </div>
  );
};
