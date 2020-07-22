import React from 'react';
import './About.scss';
import profile from '../../../assets/images/profile.jpg';

export default () => (
  <div id="About" className="section">
    <h2 className="section-title">About Me</h2>
    <div className="img-container">
      <img alt="Profile" src={profile} />
    </div>
    <div className="content">
      Experienced in Full-Stack web development, Kubernetes cluster management
      and just being an all around solid dude. My CS degree was focused on C,
      C++, Java and Python but I have since moved to more web development /
      microservices using Javascript/Typescript (NodeJS, React). I've lived in
      Japan since 2011 and I probably won't be leaving any time soon.
      <br />
      <br />
      I enjoy working with motivated individuals and solving problems, learning
      new tools, and becoming a better software developer.
      <br />
      <br />
      Feel free to contact me about opportunities in the San Francisco, Seattle,
      Vancouver B.C. or Tokyo areas.
    </div>
  </div>
);
