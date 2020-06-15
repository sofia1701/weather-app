import React from 'react';
import { render, cleanup } from "@testing-library/react";
import ForecastDetails from '../../components/forecast-details';

afterEach(cleanup);

describe("ForecastDetails", () => {
  const mockForecast = {
    date: 1525046400000,
    temperature: {
      max: 11,
      min: 4,
    },
    humidity: 30,
    wind: {
      speed: 13,
    }
  }
  
  it("renders correctly" , () => {
    const { asFragment } = render(<ForecastDetails forecast={mockForecast}/>)
    expect(asFragment).toMatchSnapshot();
  })
  it('renders the correct amount of props', () => {
    const { getByText } = render(
      <ForecastDetails forecast={mockForecast}/>
    )

    expect(getByText('Monday 30th Apr')).toHaveClass('detailed-date');
    expect(getByText('Max Temperature: 11°c')).toHaveClass('max-temp');
    expect(getByText('Min Temperature: 4°c')).toHaveClass('min-temp');
    expect(getByText('Humidity: 30%')).toHaveClass('detailed-humidity');
    expect(getByText('Wind: 13mph')).toHaveClass('detailed-wind');
  })
})