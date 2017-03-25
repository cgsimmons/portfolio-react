import React from 'react';
import { connect } from 'react-redux';
import { setEducationActive } from '../../../actions/EducationActions';
import WSU from '../../../assets/images/wsu.png';
import codecore from '../../../assets/images/codecore_square_logo_trimmed.png';
import bbcc from '../../../assets/images/bbcc_trimmed.png';
import chevron from '../../../assets/icons/chevron-down.svg';
import './Education.scss';

class Education extends React.Component {

  handleClick = (event) => {
    const section = event.target.className.split(' ')[0];
    const active = this.props.educationIsActive[section];
    this.props.setEducationActive(section, !active);
  }

  render() {
    return (
      <div
        id="Education"
        className="section"
      >
        <h2 className="section-title">Education</h2>
        <div className="inner-container">
          <div className="title-container">
            <h3
              className="bootcamp subsection-title"
              onClick={this.handleClick}
            >12-Week Developer Bootcamp
            </h3>
            <img
              className={`bootcamp chevron${this.props.bootcampIsActive ? ' expanded' : ''}`}
              alt="expand"
              src={chevron}
              onClick={this.handleClick}
            />
          </div>
          <div
            className={`content${this.props.bootcampIsActive ? ' expanded' : ''}`}
          >
            <div
              className={`left-side${this.props.bootcampIsActive ? ' expanded' : ''}`}
            >
              <img className="school" alt="codecore" src={codecore} />
              <p>Codecore Bootcamp</p>
              <p>Vancouver, BC</p>
              <p>2016</p>
            </div>
            <div
              className={`right-side${this.props.bootcampIsActive ? ' expanded' : ''}`}
            >
              <p>Relevant Coursework: </p>
              <ul>
                <li>Ruby on Rails</li>
                <li>Javascript</li>
                <li>Nodejs</li>
                <li>React / React Native</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Heroku</li>
                <li>Amazon Web Services</li>
                <li>AGILE Development Methodology</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="inner-container">
          <div className="title-container">
            <h3
              className="ba subsection-title"
              onClick={this.handleClick}
            >B.A. in Computer Science
            </h3>
            <img
              className={`ba chevron${this.props.baIsActive ? ' expanded' : ''}`}
              alt="expand"
              src={chevron}
              onClick={this.handleClick}
            />
          </div>
          <div
            className={`content${this.props.baIsActive ? ' expanded' : ''}`}
          >
            <div
              className={`left-side${this.props.baIsActive ? ' expanded' : ''}`}
            >
              <img className="school" alt="WSU" src={WSU} />
              <p>Washington State University</p>
              <p>Richland, WA</p>
              <p>GPA: 3.58 (cum laude)</p>
              <p>2010</p>
            </div>
            <div
              className={`right-side${this.props.baIsActive ? ' expanded' : ''}`}
            >
              <p>Relevant Coursework: </p>
              <ul>
                <li>Intro to Artificial Intelligence</li>
                <li>Software Engineering</li>
                <li>Software Design</li>
                <li>Computer Architecture</li>
                <li>Operating System Architecture</li>
                <li>Programming Language Design</li>
                <li>Advanced Data Structures</li>
                <li>Design and Analysis of Algorithms</li>
                <li>Numerical Analysis</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="inner-container">
          <div className="title-container">
            <h3
              className="aas subsection-title"
              onClick={this.handleClick}
            >Associate in Arts and Science
            </h3>
            <img
              className={`aas chevron${this.props.aasIsActive ? ' expanded' : ''}`}
              alt="expand"
              src={chevron}
              onClick={this.handleClick}
            />
          </div>
          <div
            className={`content${this.props.aasIsActive ? ' expanded' : ''}`}
          >
            <div
              className={`left-side${this.props.aasIsActive ? ' expanded' : ''}`}
            >
              <img className="school" alt="bbcc" src={bbcc} />
              <p>Big Bend Community College</p>
              <p>Moses Lake, WA</p>
              <p>GPA: 3.33</p>
              <p>2003</p>
            </div>
            <div
              className={`right-side${this.props.aasIsActive ? ' expanded' : ''}`}
            >
              <p>Relevant Coursework: </p>
              <ul>
                <li>Intro to Commputer Science</li>
                <li>Intro to Web Design with HTML</li>
                <li>Networking Essentials</li>
                <li>Local Area Networks</li>
                <li>A+ Certification Prep</li>
                <li>Programming with Visual Basic</li>
                <li>Programming with C++</li>
                <li>Hardware Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    educationIsActive: state.educationActive,
    bootcampIsActive: state.educationActive.bootcamp,
    baIsActive: state.educationActive.ba,
    aasIsActive: state.educationActive.aas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEducationActive: (section, active) => {
      dispatch(setEducationActive(section, active));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
