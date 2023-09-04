import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductBrandName from '../documents/productDetailCard/ProductBrandName'; 
import '@testing-library/jest-dom'

test('ProductBrandName component renders correctly', () => {
  const mkName = 'Apple';

  render(<ProductBrandName mkName={mkName} />);

  const element = screen.getByText(mkName);

  expect(element).toBeInTheDocument();
});
