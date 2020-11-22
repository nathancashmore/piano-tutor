import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders keyboard and stave', () => {
  render(<App />);
  const keyboardElement = screen.getByTestId("keyboard");
  const staveElement = screen.getByTestId("staff");
  expect(keyboardElement).toBeInTheDocument();
  expect(staveElement).toBeInTheDocument();
});
