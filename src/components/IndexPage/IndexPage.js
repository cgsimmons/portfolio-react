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
import { setScrollOffset } from '../../actions/ScrollActions';
import './IndexPage.css';

class IndexPage extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.props.setOffset(window.scrollY);
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
    position: state.scrollPosition.offset,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOffset: (offset) => {
      dispatch(setScrollOffset(offset));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
