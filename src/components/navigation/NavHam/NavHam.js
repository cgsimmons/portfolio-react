import React from 'react';
import { connect } from 'react-redux';
import FaMail from 'react-icons/md/email';
import FaLinkedIn from 'react-icons/fa/linkedin-square';
import FaGithub from 'react-icons/fa/github';
import { setNavBarHover } from '../../../actions/NavBarActions';
import './NavHam.scss';

class NavHam extends React.Component {

  handleClick = () => {
    this.props.setHover(!this.props.isHovering);
  }

  render() {
    return (
      <div className="NavHam">
        <a
          className={this.props.isHovering ? 'hovering' : ''}
          onClick={this.handleClick}
        >
          <span />
        </a>
        <ul className="top-contacts">
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/cgsimmons"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://linkedin.com/in/c-simmons"
            >
              <FaLinkedIn />
            </a>
          </li>
          <li>
            <a
              href="mailto:chris.simmons.alt@gmail.com?subject=Nice%20Website!"
            >
              <FaMail />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isHovering: state.navBar.hovering,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setHover: (hover) => { dispatch(setNavBarHover(hover)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHam);
