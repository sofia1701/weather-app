import React from 'react';
import PropTypes from 'prop-types';
import '../styles/forecast-summary.css'

const ForecastSummary = props => {
  return (
  
    <div className="forecast-summary">
      <div className="date" data-testid="date-id">
        {props.date}
      </div>
      <div className="temperature" data-testid="temperature-id">
        {props.temperature}&deg;c
      </div>
      <div className="description" data-testid="description-id">
        {props.description}
      </div>
      <div className="icon" data-testid="icon-id">
        {props.icon}
      </div>
    </div>
    
  )
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }),
};

export default ForecastSummary;