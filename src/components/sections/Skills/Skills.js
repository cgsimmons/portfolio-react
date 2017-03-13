import React from 'react';
import './Skills.scss';
import firebase from '../../../assets/icons/firebase-1.svg';
import ruby from '../../../assets/icons/ruby.svg';
import python from '../../../assets/icons/python-5.svg';
import javascript from '../../../assets/icons/javascript.svg';
import java from '../../../assets/icons/java-14.svg';
import cplusplus from '../../../assets/icons/c.svg';
import html from '../../../assets/icons/HTML5.svg';
import css3 from '../../../assets/icons/css3.svg';
import sass from '../../../assets/icons/sass.svg';
import webpack from '../../../assets/icons/webpack.svg';
import rails from '../../../assets/icons/rails.svg';
import nodejs from '../../../assets/icons/nodejs-icon.svg';
import react from '../../../assets/icons/react.svg';
import unity from '../../../assets/icons/unity.svg';
import jquery from '../../../assets/icons/jquery.svg';
import android from '../../../assets/icons/android.svg';
import mysql from '../../../assets/icons/mysql.svg';
import postgresql from '../../../assets/icons/postgresql.svg';
import mongoDB from '../../../assets/icons/mongoDB.svg';
import docker from '../../../assets/icons/docker-icon.svg';
import aws from '../../../assets/icons/aws.svg';
import heroku from '../../../assets/icons/heroku.svg';
import git from '../../../assets/icons/git.svg';
import babel from '../../../assets/icons/babel.svg';
import redux from '../../../assets/icons/redux.svg';


export default () => {
  return (
    <div
      id="Skills"
      className="section"
    >
      <h2 className="section-title">Skills</h2>

      <div className="inner-container">
        <h3>Languages</h3>
        <div className="icon-container">
          <img className="icon" alt="Ruby" src={ruby} />
          <h3 className="skill-name">Ruby</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="Python" src={python} />
          <h3 className="skill-name">Python</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="Javascript" src={javascript} />
          <h3 className="skill-name">Javascript</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="Java" src={java} />
          <h3 className="skill-name">Java</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="C++" src={cplusplus} />
          <h3 className="skill-name">C++</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="HTML 5" src={html} />
          <h3 className="skill-name">HTML 5</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="CSS 3" src={css3} />
          <h3 className="skill-name">CSS 3</h3>
        </div>
      </div>
      <div className="inner-container">
        <h3>Frameworks</h3>
        <div className="icon-container">
          <img className="icon" alt="Ruby on Rails" src={rails} />
          <h3 className="skill-name">Ruby on Rails</h3></div>
        <div className="icon-container">
          <img className="icon" alt="NodeJS" src={nodejs} />
          <h3 className="skill-name">NodeJS</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="React" src={react} />
          <h3 className="skill-name">React / Native</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="Redux" src={redux} />
          <h3 className="skill-name">Redux</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="Android" src={android} />
          <h3 className="skill-name">Android</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="Unity" src={unity} />
          <h3 className="skill-name">Unity 3D</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="jQuery" src={jquery} />
          <h3 className="skill-name">jQuery</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="Sass" src={sass} />
          <h3 className="skill-name">Sass</h3>
        </div>
      </div>
      <div className="inner-container">
        <h3>Databases</h3>
        <div className="icon-container">
          <img className="icon" alt="MySQL" src={mysql} />
          <h3 className="skill-name">MySQL</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="PostgreSQL" src={postgresql} />
          <h3 className="skill-name">PostgreSQL</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="mongoDB" src={mongoDB} />
          <h3 className="skill-name">MongoDB</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="firebase" src={firebase} />
          <h3 className="skill-name">Firebase</h3>
        </div>
      </div>
      <div className="inner-container">
        <h3>Development Tools</h3>
        <div className="icon-container">
          <img className="icon" alt="Webpack" src={webpack} />
          <h3 className="skill-name">Webpack</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="Docker" src={docker} />
          <h3 className="skill-name">Docker</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="AWS" src={aws} />
          <h3 className="skill-name">AWS</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="Heroku" src={heroku} />
          <h3 className="skill-name">Heroku</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="git" src={git} />
          <h3 className="skill-name">Git</h3>
        </div>
        <div className="icon-container">
          <img className="icon" alt="babel" src={babel} />
          <h3 className="skill-name">Babel</h3>
        </div>
      </div>
    </div>
  );
};
