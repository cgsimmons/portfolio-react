import React from 'react';
import { connect } from 'react-redux';
import { setOffset } from '../../../actions/SectionActions';
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


class Skills extends React.Component {

  componentDidMount() {
    const rect = this.node.getBoundingClientRect();
    this.props.setSectionOffset('Skills', rect.top + window.scrollY);
  }

  render() {
    return (
      <div
        id="Skills"
        className="section"
        ref={(node) => { return (this.node = node); }}
      >
        <h2 className="section-title">Skills</h2>

        <div className="languages">
          <h3>Languages</h3>
          <img className="icon" alt="Ruby" src={ruby} />
          <img className="icon" alt="Python" src={python} />
          <img className="icon" alt="Javascript" src={javascript} />
          <img className="icon" alt="Java" src={java} />
          <img className="icon" alt="C++" src={cplusplus} />
          <img className="icon" alt="HTML 5" src={html} />
          <img className="icon" alt="CSS 3" src={css3} />
        </div>
        <div className="frameworks">
          <h3>Frameworks</h3>
          <img className="icon" alt="Ruby on Rails" src={rails} />
          <img className="icon" alt="NodeJS" src={nodejs} />
          <img className="icon" alt="React" src={react} />
          <img className="icon" alt="Android" src={android} />
          <img className="icon" alt="Unity" src={unity} />
          <img className="icon" alt="jQuery" src={jquery} />
          <img className="icon" alt="Sass" src={sass} />
        </div>
        <div className="databases">
          <h3>Databases</h3>
          <img className="icon" alt="MySQL" src={mysql} />
          <img className="icon" alt="PostgreSQL" src={postgresql} />
          <img className="icon" alt="mongoDB" src={mongoDB} />
          <img className="icon" alt="firebase" src={firebase} />
        </div>
        <div className="tools">
          <h3>Development Tools</h3>
          <img className="icon" alt="Webpack" src={webpack} />
          <img className="icon" alt="Docker" src={docker} />
          <img className="icon" alt="AWS" src={aws} />
          <img className="icon" alt="Heroku" src={heroku} />
          <img className="icon" alt="git" src={git} />
          <img className="icon" alt="babel" src={babel} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSectionOffset: (name, offset) => { dispatch(setOffset(name, offset)); },
  };
};

export default connect(null, mapDispatchToProps)(Skills);
