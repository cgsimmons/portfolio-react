import React from 'react';
import { connect } from 'react-redux';
import { setOffset } from '../../../actions/SectionActions';

class Education extends React.Component {

  componentDidMount() {
    const rect = this.node.getBoundingClientRect();
    this.props.setSectionOffset('Education', rect.top + window.scrollY);
  }

  render() {
    return (
      <div
        id="Education"
        className="section"
        ref={(node) => { return (this.node = node); }}
      >Education
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSectionOffset: (name, offset) => { dispatch(setOffset(name, offset)); },
  };
};

export default connect(null, mapDispatchToProps)(Education);
