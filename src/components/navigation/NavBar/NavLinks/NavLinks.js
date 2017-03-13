import React from 'react';
import { connect } from 'react-redux';
import MdHome from 'react-icons/md/home';
import FaGraduationCap from 'react-icons/fa/graduation-cap';
import FaBlackTie from 'react-icons/fa/black-tie';
import FaCode from 'react-icons/fa/code';
import MdWork from 'react-icons/md/work';
import FaInfoCircle from 'react-icons/fa/info-circle';
import FaHeart from 'react-icons/fa/heart';
import FaThumbsOUp from 'react-icons/fa/thumbs-o-up';
import { Link, Events, scrollSpy } from 'react-scroll';
import { setNavBarHover, setNavBarActive } from '../../../../actions/NavBarActions';
import './NavLinks.scss';

class NavLinks extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('end', () => {
      this.props.setHover(false);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('end');
  }

  handleHoverTrue = () => {
    this.props.setHover(true);
  }

  handleSetActive = (to) => {
    this.props.setActive(to);
  }

  render() {
    return (
      <div className="NavLinks">
        <ul>
          <li
            className={this.props.active === 'Home' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Home"
              offset={-50}
              smooth
              spy
              isDynamic
              onSetActive={this.handleSetActive}
            >
              <MdHome />
              <span>Top of Page</span>
            </Link>
          </li>
          <li
            className={this.props.active === 'About' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="About"
              smooth
              spy
              isDynamic
              onSetActive={this.handleSetActive}
            >
              <FaInfoCircle />
              <span>About Me</span>
            </Link>
          </li>
          <li
            className={this.props.active === 'Skills' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Skills"
              smooth
              spy
              isDynamic
              onSetActive={this.handleSetActive}
            >
              <FaCode />
              <span>Skills</span>
            </Link>
          </li>
          <li
            className={this.props.active === 'Portfolio' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Portfolio"
              smooth
              spy
              isDynamic
              onSetActive={this.handleSetActive}
            >
              <MdWork />
              <span>Portfolio</span>
            </Link>
          </li>
          <li
            className={this.props.active === 'Education' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Education"
              smooth
              spy
              isDynamic
              onSetActive={this.handleSetActive}
            >
              <FaGraduationCap />
              <span>Education</span>
            </Link>
          </li>
          <li
            className={this.props.active === 'Work' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Work"
              smooth
              spy
              isDynamic
              onSetActive={this.handleSetActive}
            >
              <FaBlackTie />
              <span>Work</span>
            </Link>
          </li>
          <li
            className={this.props.active === 'Volunteer' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Volunteer"
              smooth
              spy
              isDynamic
              onSetActive={this.handleSetActive}
            >
              <FaHeart />
              <span>Volunteer</span>
            </Link>
          </li>
          <li
            className={this.props.active === 'Interests' ? 'active' : ''}
            onMouseEnter={this.handleHoverTrue}
          >
            <Link
              to="Interests"
              smooth
              spy
              isDynamic
              onSetActive={this.handleSetActive}
            >
              <FaThumbsOUp />
              <span>Interests</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.navBar.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHover: (hover) => {
      dispatch(setNavBarHover(hover));
    },
    setActive: (section) => {
      dispatch(setNavBarActive(section));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
