import React from 'react';
import { connect } from 'react-redux';
import NavLinks from './NavLinks/NavLinks';
import { setNavBarHover } from '../../../actions/NavBarActions';
import './NavBar.scss';

class NavBar extends React.Component {

  handleHoverTrue = () => {
    this.props.setHover(true);
  }
  handleHoverFalse = () => {
    this.props.setHover(false);
  }

  render() {
    return (
      <nav className={`NavBar${this.props.isHovering ? ' hovering' : ''}`} onMouseEnter={this.handleHoverTrue} onMouseLeave={this.handleHoverFalse}>
        <NavLinks />
      </nav>
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
    setHover: (hover) => {
      dispatch(setNavBarHover(hover));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
