import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MdHome, MdWork, MdMail } from 'react-icons/md';
import {
  FaCode,
  FaGraduationCap,
  FaInfoCircle,
  FaLinkedin,
  FaGithub,
  FaBookDead,
} from 'react-icons/fa';
import { Link, Events, scrollSpy } from 'react-scroll';
import {
  setNavBarHover,
  setNavBarActive,
} from '../../../../actions/NavBarActions';
import './NavLinks.scss';

class NavLinks extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('end', () => {
      const { setHover } = this.props;
      setHover(false);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('end');
  }

  handleHoverTrue = () => {
    const { setHover } = this.props;
    setHover(true);
  };

  handleSetActive = (to) => {
    const { setActive } = this.props;
    setActive(to);
  };

  render() {
    const { active } = this.props;
    return (
      <div className="NavLinks">
        <ul>
          <li
            className={active === 'Home' ? 'active' : ''}
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
            className={active === 'About' ? 'active' : ''}
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
            className={active === 'Skills' ? 'active' : ''}
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
            className={active === 'Portfolio' ? 'active' : ''}
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
            className={active === 'Education' ? 'active' : ''}
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
          {/* <li
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
          </li> */}
        </ul>
        <ul className="side-contacts">
          <li onMouseEnter={this.handleHoverTrue}>
            <a href="mailto:chris.simmons.alt@gmail.com?subject=Nice%20Website!">
              <MdMail />
              <span>Email</span>
            </a>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://linkedin.com/in/c-simmons"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/cgsimmons"
            >
              <FaGithub />
              <span>Github</span>
            </a>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://gitlab.com/cgsimmons/my-wiki/-/wikis/home"
            >
              <FaBookDead />
              <span>Wiki</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

NavLinks.propTypes = {
  setHover: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  active: state.navBar.active,
});

const mapDispatchToProps = (dispatch) => ({
  setHover: (hover) => {
    dispatch(setNavBarHover(hover));
  },
  setActive: (section) => {
    dispatch(setNavBarActive(section));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
