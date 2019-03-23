import React from 'react';
import github from '../../assets/icons/github.svg';
import TechIcon from '../TechIcon/TechIcon';
import './Footer.scss';

export default () => (
  <div className="Footer">
    <div className="left-side">
      <h1>Did you enjoy the site?</h1>
      <h1>
Check out the
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/cgsimmons/portfolio-react"
        >
          {' '}
source code!
        </a>
      </h1>
    </div>
    <div className="right-side">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/cgsimmons/portfolio-react"
      >
        <TechIcon title="Github" source={github} />
      </a>
    </div>
  </div>
);
