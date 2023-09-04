import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductPrice from '../documents/common/ProductPrice'; 
import '@testing-library/jest-dom'

test('ProductPrice component renders correctly', () => {
  const price = 13284.99; 

  render(<ProductPrice price={price} />);

  const beforeDecimalElement = screen.getByText('13.284', { exact: false }); 
  const afterDecimalElement = screen.getByText(',99 TL', { exact: false });

  expect(beforeDecimalElement).toBeInTheDocument();
  expect(afterDecimalElement).toBeInTheDocument();
});
