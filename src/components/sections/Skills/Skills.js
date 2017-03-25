import React from 'react';
import TechIcon from '../../TechIcon/TechIcon';
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
import './Skills.scss';

export default () => {
  return (
    <div
      id="Skills"
      className="section"
    >
      <h2 className="section-title">Skills</h2>
      <div className="inner-container">
        <h3 className="subsection-title">Languages</h3>
        <TechIcon title="Ruby" source={ruby} />
        <TechIcon title="Python" source={python} />
        <TechIcon title="Javascript" source={javascript} />
        <TechIcon title="Java" source={java} />
        <TechIcon title="C++" source={cplusplus} />
        <TechIcon title="HTML 5" source={html} />
        <TechIcon title="CSS 3" source={css3} />
      </div>
      <div className="inner-container">
        <h3 className="subsection-title">Frameworks</h3>
        <TechIcon title="Ruby on Rails" source={rails} />
        <TechIcon title="NodeJS" source={nodejs} />
        <TechIcon title="React" source={react} />
        <TechIcon title="Redux" source={redux} />
        <TechIcon title="Android" source={android} />
        <TechIcon title="Unity 3d" source={unity} />
        <TechIcon title="jQuery" source={jquery} />
        <TechIcon title="Sass" source={sass} />
      </div>
      <div className="inner-container">
        <h3 className="subsection-title">Databases</h3>
        <TechIcon title="MySQL" source={mysql} />
        <TechIcon title="PostgreSQL" source={postgresql} />
        <TechIcon title="MongoDB" source={mongoDB} />
        <TechIcon title="Firebase" source={firebase} />
      </div>
      <div className="inner-container">
        <h3 className="subsection-title">Development Tools</h3>
        <TechIcon title="Webpack" source={webpack} />
        <TechIcon title="Docker" source={docker} />
        <TechIcon title="AWS" source={aws} />
        <TechIcon title="Heroku" source={heroku} />
        <TechIcon title="Git" source={git} />
        <TechIcon title="Babel" source={babel} />
      </div>
    </div>
  );
};
