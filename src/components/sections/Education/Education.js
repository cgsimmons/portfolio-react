import React from 'react';
import { connect } from 'react-redux';
import { setOffset } from '../../../actions/SectionActions';
import { setEducationActive } from '../../../actions/EducationActions';
import WSU from '../../../assets/images/wsu.png';
import codecore from '../../../assets/images/codecore_square_logo_trimmed.png';
import bbcc from '../../../assets/images/bbcc_trimmed.png';
import './Education.scss';

class Education extends React.Component {

  componentDidMount() {
    const rect = this.node.getBoundingClientRect();
    this.props.setSectionOffset('Education', rect.top + window.scrollY);
  }

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
        ref={(node) => { return (this.node = node); }}
      >
        <h2 className="section-title">Education</h2>
        <div
          className={`inner-container${this.props.bootcampIsActive ? ' expanded' : ''}`}
        >
          <h3
            className={`bootcamp${this.props.bootcampIsActive ? ' expanded' : ''}`}
            onClick={this.handleClick}
          >12-Week Developer Bootcamp
          </h3>
          <div
            className={`content${this.props.bootcampIsActive ? ' expanded' : ''}`}
          >
            <div
              className={`left-side${this.props.bootcampIsActive ? ' expanded' : ''}`}
            >
              <img className="school" alt="codecore" src={codecore} />
              <p>Codecore</p>
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
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`inner-container${this.props.baIsActive ? ' expanded' : ''}`}
        >
          <h3
            className={`ba${this.props.baIsActive ? ' expanded' : ''}`}
            onClick={this.handleClick}
          >B.A. in Computer Science
          </h3>
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
                <li>Introduction to Artificial Intelligence</li>
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
        <div
          className={`inner-container${this.props.aasIsActive ? ' expanded' : ''}`}
        >
          <h3
            className={`aas${this.props.aasIsActive ? ' expanded' : ''}`}
            onClick={this.handleClick}
          >Associate in Arts and Science</h3>
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
                <li>Introduction to Commputer Science</li>
                <li>Introduction to Web Design with HTML</li>
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
    setSectionOffset: (name, offset) => {
      dispatch(setOffset(name, offset));
    },
    setEducationActive: (section, active) => {
      dispatch(setEducationActive(section, active));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
