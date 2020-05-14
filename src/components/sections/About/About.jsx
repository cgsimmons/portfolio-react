import React from "react";
import "./About.scss";
import profile from "../../../assets/images/profile.jpg";

export default () => (
  <div id="About" className="section">
    <h2 className="section-title">About Me</h2>
    <div className="img-container">
      <img alt="Profile" src={profile} />
    </div>
    <div className="content">
      Experienced in Full-Stack web development as well as Android and Debian
      Linux packaging.
      <br />
      <br />
      My Computer Science degree was focused around C, C++, Java and Python
      while my more recent experience with web and mobile development comes from
      personal projects as well as attending Codecore Development Bootcamp.
      <br />
      <br />
      I enjoy working with motivated individuals and solving problems, learning
      new tools, and becoming a better software developer.
      <br />
      <br />
      Feel free to contact me about opportunities in the San Francisco, Seattle
      or Vancouver B.C. areas.
    </div>
  </div>
);
