import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../navigation/NavBar/NavBar';
import NavHam from '../navigation/NavHam/NavHam';
import Footer from '../Footer/Footer';
import { setNavBarHover } from '../../actions/NavBarActions';
import './style.scss';

class Layout extends React.Component {
  handleClick = () => {
    this.props.setHover(false);
  }
  render() {
    return (

      <div className="app-container">
        <header>
          <NavHam />
        </header>
        <div className="app-body">
          <NavBar />
          <div
            className={`app-content${this.props.isNavBarHovering ? ' shift-content' : ''}`}
            onClick={this.handleClick}
          >
            {this.props.children}
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isNavBarHovering: state.navBar.hovering,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHover: (hover) => {
      dispatch(setNavBarHover(hover));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
