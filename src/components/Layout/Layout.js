import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../navigation/NavBar/NavBar';
import NavHam from '../navigation/NavHam/NavHam';
import './style.scss';

class Layout extends React.Component {
  render() {
    return (

      <div className="app-container">
        <header>
          <NavHam />
        </header>
        <div className="app-body">
          <NavBar />
          <div className={`app-content${this.props.isNavBarHovering ? ' shift-content' : ''}`}>
            {this.props.children}
          </div>
        </div>
        <footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isNavBarHovering: state.navBar.hovering,
  };
};

export default connect(mapStateToProps, null)(Layout);
