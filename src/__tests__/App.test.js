import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders location details link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Manchester, uk/i);
  expect(linkElement).toBeInTheDocument();
});
