import React from 'react';
import { connect } from 'react-redux';
import Banner from '../Banner/Banner';
import Education from '../sections/Education/Education';
import Skills from '../sections/Skills/Skills';
import Portfolio from '../sections/Portfolio/Portfolio';
import Work from '../sections/Work/Work';
import About from '../sections/About/About';
import Volunteer from '../sections/Volunteer/Volunteer';
import Interests from '../sections/Interests/Interests';
import { setActive } from '../../actions/NavBarActions';
import './IndexPage.css';

class IndexPage extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    setActive();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setActive = () => {
    const active = this.findActive(window.scrollY, this.props.sections);
    if (active && active !== this.props.active) {
      this.props.setActive(active);
    }
  }

  findActive = (offset, sections) => {
    let active = '';
    Object.keys(sections).forEach((key) => {
      if (sections[key] >= offset - 50 && sections[key] <= offset + 50) {
        active = key;
      }
    });
    return active;
  }

  handleScroll = () => {
    this.setActive();
  }

  render() {
    return (
      <div className="IndexPage">
        <Banner />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Work />
        <Volunteer />
        <Interests />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.navBar.active,
    sections: state.sectionOffsets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActive: (name) => {
      dispatch(setActive(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
