import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => {
  return (
    <>
      <div className="date">
        {props.date}
      </div>
      <div className="temperature">
        {props.temperature}
      </div>
      <div className="description">
        {props.description}
      </div>
      <div className="icon">
        {props.icon}
      </div>
    </>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired,
};

export default ForecastSummary;