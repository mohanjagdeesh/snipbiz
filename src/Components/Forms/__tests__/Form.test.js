import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../Form';

describe('Form', () => {
  test('renders form fields correctly', () => {
    render(<Form />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('pickup-input')).toBeInTheDocument();
    expect(screen.getByTestId('destination-input')).toBeInTheDocument();
    expect(screen.getByTestId('weight-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });
});
