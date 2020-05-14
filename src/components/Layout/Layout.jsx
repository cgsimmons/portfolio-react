import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../navigation/NavBar/NavBar';
import NavHam from '../navigation/NavHam/NavHam';
import Footer from '../Footer/Footer';
import IndexPage from '../IndexPage/IndexPage';
import { setNavBarHover } from '../../actions/NavBarActions';
import './style.scss';

class Layout extends React.Component {
  handleClick = () => {
    const { setHover } = this.props;
    setHover(false);
  };

  render() {
    const { isNavBarHovering } = this.props;
    return (
      <div className="app-container">
        <header>
          <NavHam />
        </header>
        <div className="app-body">
          <NavBar />
          <div
            className={`app-content${isNavBarHovering ? ' shift-content' : ''}`}
            onClick={this.handleClick}
            role="presentation"
          >
            <IndexPage />
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  setHover: PropTypes.func.isRequired,
  isNavBarHovering: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isNavBarHovering: state.navBar.hovering,
});

const mapDispatchToProps = (dispatch) => ({
  setHover: (hover) => {
    dispatch(setNavBarHover(hover));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
