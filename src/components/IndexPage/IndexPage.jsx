import React from "react";
import { connect } from "react-redux";
import Banner from "../Banner/Banner";
import Education from "../sections/Education/Education";
import Skills from "../sections/Skills/Skills";
import Portfolio from "../sections/Portfolio/Portfolio";
// import Work from '../sections/Work/Work';
import About from "../sections/About/About";
// import Volunteer from '../sections/Volunteer/Volunteer';
// import Interests from '../sections/Interests/Interests';
import "./IndexPage.scss";

const IndexPage = () => (
  <div className="IndexPage">
    <Banner />
    <About />
    <Skills />
    <Portfolio />
    <Education />
    {/* <Work />
        <Volunteer />
        <Interests /> */}
  </div>
);

export default connect(null)(IndexPage);
