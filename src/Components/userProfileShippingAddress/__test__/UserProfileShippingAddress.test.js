import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserProfileShippingAddress from '../UserProfileShippingAddress';

describe('UserProfileShippingAddress', () => {
  it('renders without crashing', () => {
    render(<UserProfileShippingAddress />);
  });

  it('displays the user profile heading', () => {
    render(<UserProfileShippingAddress />);
    expect(screen.getByTestId('user-profile-heading')).toHaveTextContent('User Profile');
  });

  it('displays the "Add Address" button', () => {
    render(<UserProfileShippingAddress />);
    expect(screen.getByTestId('add-address-button')).toHaveTextContent('Add Address');
  });

  it('displays the address form when the "Add Address" button is clicked', () => {
    render(<UserProfileShippingAddress />);
    fireEvent.click(screen.getByText('Add Address'));
  });


});