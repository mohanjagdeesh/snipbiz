import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NewCard from '../NewCard';

describe('NewCard component', () => {
  test('displays an error message for invalid card number input', () => {
    render(<NewCard addingNewCard={() => {}} />);
    const cardNumberInput = screen.getByTestId('cardnumber-input');
    fireEvent.change(cardNumberInput, { target: { value: '123' } });
    fireEvent.blur(cardNumberInput);
    
  });

  test('displays an error message for invalid cvv input', () => {
    render(<NewCard addingNewCard={() => {}} />);
    const cvvInput = screen.getByTestId('cvv-input');
    fireEvent.change(cvvInput, { target: { value: 'abc' } });
    fireEvent.blur(cvvInput);
    const errorMessage = screen.getByTestId('error-messag');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays an error message for invalid expiry input', () => {
    render(<NewCard addingNewCard={() => {}} />);
    const expiryInput = screen.getByTestId('expiry-input');
    fireEvent.change(expiryInput, { target: { value: '12/20' } });
    fireEvent.blur(expiryInput);
    const errorMessage = screen.getByTestId('error-messag1');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays an error message for missing card holder name input', () => {
    render(<NewCard addingNewCard={() => {}} />);
    const cardNameInput = screen.getByTestId('cardname-input');
    fireEvent.change(cardNameInput, { target: { value: '' } });
    fireEvent.blur(cardNameInput);
    const errorMessage = screen.getByTestId('error-messag2');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays an error message for missing address type input', () => {
    render(<NewCard addingNewCard={() => {}} />);
    const addressTypeInput = screen.getByTestId('addresstype-input');
    fireEvent.change(addressTypeInput, { target: { value: 'Select' } });
    fireEvent.blur(addressTypeInput);
    const errorMessage = screen.getByTestId('error-messag3');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays an error message for missing address line 1 input', () => {
    render(<NewCard addingNewCard={() => {}} />);
    const addressLine1Input = screen.getByTestId('addressline1-input');
    fireEvent.change(addressLine1Input, { target: { value: '' } });
    fireEvent.blur(addressLine1Input);
    const errorMessage = screen.getByTestId('error-messag4');
    expect(errorMessage).toBeInTheDocument();
  });
});
