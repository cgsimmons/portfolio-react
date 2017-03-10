import React from 'react';
import { connect } from 'react-redux';
import { setOffset } from '../../../actions/SectionActions';
import './About.scss';
import profile from '../../../assets/images/profile.jpg';

class About extends React.Component {

  componentDidMount() {
    const rect = this.node.getBoundingClientRect();
    this.props.setSectionOffset('About', rect.top + window.scrollY);
  }

  render() {
    return (
      <div
        id="About"
        className="section"
        ref={(node) => { return (this.node = node); }}
      >
        <h2 className="section-title">About</h2>
        <div className="img-container">
          <img
            alt={'Profile'}
            src={profile}
          />
        </div>
        <div className="content">
          Experienced in Full-Stack web development as well as Android, iOS and Unity 3D.
          <br /><br />
          My Computer Science degree was focused around C, C++, Java and Python while my
          more recent experience with web and mobile development comes from personal projects
          as well as attending Codecore Development Bootcamp.
          <br /><br />
          I enjoy working with motivated individuals and solving problems,
          learning new tools, and becoming a better software developer.
          <br /><br />
          Feel free to contact me about opportunities in the Vancouver,
          B.C. area.
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

export default connect(null, mapDispatchToProps)(About);
