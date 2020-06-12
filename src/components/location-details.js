import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = props => 
  <div>
     <h1 className='location-details'>
      {props.city}, {props.country} 
    </h1>
  </div>
 
LocationDetails.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

export default LocationDetails;