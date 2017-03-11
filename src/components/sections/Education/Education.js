import React from 'react';
import { connect } from 'react-redux';
import { setOffset } from '../../../actions/SectionActions';
import WSU from '../../../assets/images/wsu.png';
import codecore from '../../../assets/images/codecore_square_logo_trimmed.png';
import bbcc from '../../../assets/images/bbcc_trimmed.png';
import './Education.scss';

class Education extends React.Component {

  componentDidMount() {
    const rect = this.node.getBoundingClientRect();
    this.props.setSectionOffset('Education', rect.top + window.scrollY);
  }

  render() {
    return (
      <div
        id="Education"
        className="section"
        ref={(node) => { return (this.node = node); }}
      >
        <h2 className="section-title">Education</h2>
        <div className="inner-container">
          <h3>12-Week Developer Bootcamp</h3>
          <div className="content">
            <div className="left-side">
              <img className="school" alt="codecore" src={codecore} />
              <p>Codecore</p>
              <p>Vancouver, BC</p>
              <p>2016</p>
            </div>
            <div className="right-side">
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
        <div className="inner-container">
          <h3>B.A. in Computer Science</h3>
          <div className="content">
            <div className="left-side">
              <img className="school" alt="WSU" src={WSU} />
              <p>Washington State University</p>
              <p>Richland, WA</p>
              <p>GPA: 3.58 (cum laude)</p>
              <p>2010</p>
            </div>
            <div className="right-side">
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
        <div className="inner-container">
          <h3>Associate in Arts and Science</h3>
          <div className="content">
            <div className="left-side">
              <img className="school" alt="bbcc" src={bbcc} />
              <p>Big Bend Community College</p>
              <p>Moses Lake, WA</p>
              <p>GPA: 3.33</p>
              <p>2003</p>
            </div>
            <div className="right-side">
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

const mapDispatchToProps = (dispatch) => {
  return {
    setSectionOffset: (name, offset) => { dispatch(setOffset(name, offset)); },
  };
};

export default connect(null, mapDispatchToProps)(Education);
