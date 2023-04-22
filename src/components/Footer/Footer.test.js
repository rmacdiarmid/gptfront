import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with copyright text', () => {
  render(<Footer />);
  expect(screen.getByText(/GPTonfire 2023. All rights reserved./i)).toBeInTheDocument();
});
