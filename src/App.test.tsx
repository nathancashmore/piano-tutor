import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders keyboard', () => {
  render(<App />);
  const linkElement = screen.getByTestId("keyboard");
  expect(linkElement).toBeInTheDocument();
});
