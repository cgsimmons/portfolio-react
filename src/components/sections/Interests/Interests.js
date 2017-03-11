import React from 'react';
import { connect } from 'react-redux';
import { setOffset } from '../../../actions/SectionActions';

class Interests extends React.Component {

  componentDidMount() {
    const rect = this.node.getBoundingClientRect();
    this.props.setSectionOffset('Interests', rect.top + window.scrollY);
  }

  render() {
    return (
      <div
        id="Interests"
        className="section"
        ref={(node) => { return (this.node = node); }}
      >
        <h2 className="section-title">Interests</h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSectionOffset: (name, offset) => { dispatch(setOffset(name, offset)); },
  };
};

export default connect(null, mapDispatchToProps)(Interests);
