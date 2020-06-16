import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries'; 
import ForecastDetails from './components/forecast-details';
import './styles/app.css';

const App = () => {
  const [forecasts, setForecasts] = useState([]);

  const [location, setLocation] = useState({city: '', country: ''});

  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

  const handleForecastSelect = (date) => {
    setSelectedDate(date)
  }

  useEffect(() => {
    axios 
      .get('https://mcr-codes-weather.herokuapp.com/forecast/')
      .then(response => {
        setForecasts(response.data.forecasts)
        setLocation(response.data.location)
      })
  })

  return (
    <div className="forecast">
    <LocationDetails 
      city={location.city} 
      country={location.country} 
    />
    <ForecastSummaries 
      forecasts={forecasts}
      onForecastSelect={handleForecastSelect}
    />
    {
      selectedForecast && <ForecastDetails forecast={selectedForecast}/>
    }  
    </div>
  )
}

export default App;