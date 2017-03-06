import React from 'react';
import { connect } from 'react-redux';
import { setOffset } from '../../../actions/SectionActions';

class Portfolio extends React.Component {

  componentDidMount() {
    const rect = this.node.getBoundingClientRect();
    this.props.setSectionOffset('Portfolio', rect.top + window.scrollY);
  }

  render() {
    return (
      <div
        id="Portfolio"
        className="section"
        ref={(node) => { return (this.node = node); }}
      >Portfolio
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSectionOffset: (name, offset) => { dispatch(setOffset(name, offset)); },
  };
};

export default connect(null, mapDispatchToProps)(Portfolio);
