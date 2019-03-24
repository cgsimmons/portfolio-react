import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toggleEducationActive from '../../../actions/EducationActions';
import WSU from '../../../assets/images/wsu.png';
import codecore from '../../../assets/images/codecore_square_logo_trimmed.png';
import bbcc from '../../../assets/images/bbcc_trimmed.png';
import chevron from '../../../assets/icons/chevron-down.svg';
import './Education.scss';

class Education extends React.Component {
  handleClick = (event) => {
    const { toggleEducation } = this.props;
    const section = event.target.className.split(' ')[0];
    toggleEducation(section);
  };

  render() {
    const { bootcampIsActive, baIsActive, aasIsActive } = this.props;
    return (
      <div id="Education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="inner-container">
          <div className="title-container" onClick={this.handleClick} role="presentation">
            <h3 className="bootcamp subsection-title">12-Week Developer Bootcamp</h3>
            <img
              className={`bootcamp chevron${bootcampIsActive ? ' expanded' : ''}`}
              alt="expand"
              src={chevron}
            />
          </div>
          <div className={`content${bootcampIsActive ? ' expanded' : ''}`}>
            <div className={`left-side${bootcampIsActive ? ' expanded' : ''}`}>
              <img className="school" alt="codecore" src={codecore} />
              <p>Codecore Bootcamp</p>
              <p>Vancouver, BC</p>
              <p>2016</p>
            </div>
            <div className={`right-side${bootcampIsActive ? ' expanded' : ''}`}>
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
          <div className="title-container" onClick={this.handleClick} role="presentation">
            <h3 className="ba subsection-title">B.A. in Computer Science</h3>
            <img
              className={`ba chevron${baIsActive ? ' expanded' : ''}`}
              alt="expand"
              src={chevron}
            />
          </div>
          <div className={`content${baIsActive ? ' expanded' : ''}`}>
            <div className={`left-side${baIsActive ? ' expanded' : ''}`}>
              <img className="school" alt="WSU" src={WSU} />
              <p>Washington State University</p>
              <p>Richland, WA</p>
              <p>GPA: 3.58 (cum laude)</p>
              <p>2010</p>
            </div>
            <div className={`right-side${baIsActive ? ' expanded' : ''}`}>
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
          <div className="title-container" onClick={this.handleClick} role="presentation">
            <h3 className="aas subsection-title">Associate in Arts and Science</h3>
            <img
              className={`aas chevron${aasIsActive ? ' expanded' : ''}`}
              alt="expand"
              src={chevron}
            />
          </div>
          <div className={`content${aasIsActive ? ' expanded' : ''}`}>
            <div className={`left-side${aasIsActive ? ' expanded' : ''}`}>
              <img className="school" alt="bbcc" src={bbcc} />
              <p>Big Bend Community College</p>
              <p>Moses Lake, WA</p>
              <p>GPA: 3.33</p>
              <p>2003</p>
            </div>
            <div className={`right-side${aasIsActive ? ' expanded' : ''}`}>
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

Education.propTypes = {
  bootcampIsActive: PropTypes.bool.isRequired,
  baIsActive: PropTypes.bool.isRequired,
  aasIsActive: PropTypes.bool.isRequired,
  toggleEducation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bootcampIsActive: state.educationActive.bootcamp,
  baIsActive: state.educationActive.ba,
  aasIsActive: state.educationActive.aas,
});

const mapDispatchToProps = dispatch => ({
  toggleEducation: (section) => {
    dispatch(toggleEducationActive(section));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Education);
