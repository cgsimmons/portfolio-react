import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MdMail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { setNavBarHover } from "../../../actions/NavBarActions";
import "./NavHam.scss";

class NavHam extends React.Component {
  handleClick = () => {
    const { setHover, isHovering } = this.props;
    setHover(!isHovering);
  };

  render() {
    const { isHovering } = this.props;
    return (
      <div className="NavHam">
        <button
          className={isHovering ? "hovering" : ""}
          onClick={this.handleClick}
          onKeyPress={this.handleClick}
          type="button"
        >
          <span />
        </button>
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
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:chris.simmons.alt@gmail.com?subject=Nice%20Website!">
              <MdMail />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

NavHam.propTypes = {
  setHover: PropTypes.func.isRequired,
  isHovering: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isHovering: state.navBar.hovering,
});
const mapDispatchToProps = (dispatch) => ({
  setHover: (hover) => {
    dispatch(setNavBarHover(hover));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavHam);
