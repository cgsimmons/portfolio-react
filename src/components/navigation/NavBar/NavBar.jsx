import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavLinks from "./NavLinks/NavLinks";
import { setNavBarHover } from "../../../actions/NavBarActions";
import "./NavBar.scss";

class NavBar extends React.Component {
  handleHoverTrue = () => {
    const { setHover } = this.props;
    setHover(true);
  };

  handleHoverFalse = () => {
    const { setHover } = this.props;
    setHover(false);
  };

  render() {
    const { isHovering } = this.props;
    return (
      <nav
        className={`NavBar${isHovering ? " hovering" : ""}`}
        onMouseEnter={this.handleHoverTrue}
        onMouseLeave={this.handleHoverFalse}
      >
        <NavLinks />
      </nav>
    );
  }
}

NavBar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
