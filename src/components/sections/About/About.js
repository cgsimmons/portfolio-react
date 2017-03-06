import React from 'react';
import { connect } from 'react-redux';
import { setOffset } from '../../../actions/SectionActions';

class About extends React.Component {

  componentDidMount() {
    const rect = this.node.getBoundingClientRect();
    this.props.setSectionOffset('About', rect.top + window.scrollY);
  }

  render() {
    return (
      <div
        id="About"
        className="section"
        ref={(node) => { return (this.node = node); }}
      >About
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSectionOffset: (name, offset) => { dispatch(setOffset(name, offset)); },
  };
};

export default connect(null, mapDispatchToProps)(About);
