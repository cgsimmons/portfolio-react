import React from 'react';
import { connect } from 'react-redux';
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
