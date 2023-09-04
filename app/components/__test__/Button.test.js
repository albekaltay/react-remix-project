import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../ui/Button'; 
import "@testing-library/jest-dom";

test('Button component renders correctly', () => {
  const buttonText = 'Button';

  render(<Button>{buttonText}</Button>);

  const element = screen.getByText(buttonText);

  expect(element).toBeInTheDocument();
});
