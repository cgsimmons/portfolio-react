import React from 'react';
import PropTypes from 'prop-types';
import './TechIcon.scss';

const TechIcon = (props) => {
  const {
    title,
    source,
  } = props;
  return (
    <div className="techIcon-container">
      <img className="techIcon" alt={title} src={source} />
      <h3 className="techIcon-title">{title}</h3>
    </div>
  );
};

TechIcon.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default TechIcon;
