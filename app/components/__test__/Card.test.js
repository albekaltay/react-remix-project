import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../ui/Card'; 
import "@testing-library/jest-dom";


test('Card component renders correctly', () => {
  const sampleContent = 'Content'; 

  render(
    <Card>
      <p>{sampleContent}</p>
    </Card>
  );

  const element = screen.getByText(sampleContent);

  expect(element).toBeInTheDocument();
});
