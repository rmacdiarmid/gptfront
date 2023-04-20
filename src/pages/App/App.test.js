import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header component', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner'); // Assuming the Header component has a 'banner' role
  expect(headerElement).toBeInTheDocument();
});
