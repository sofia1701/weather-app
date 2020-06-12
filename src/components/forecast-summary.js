import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => {
  return (
  
    <div>
      <div className="date">
        {props.date}
      </div>
      <div className="temperature">
        {props.temperature}&deg;c
      </div>
      <div className="description">
        {props.description}
      </div>
      <div className="icon">
        {props.icon}
      </div>
    </div>
    
  )
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired,
};

export default ForecastSummary;