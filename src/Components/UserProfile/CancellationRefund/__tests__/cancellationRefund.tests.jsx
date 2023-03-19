import React from 'react';
import { render , screen} from "@testing-library/react";

import Cancellation from '../cancellationRefund';

test('renders user profile component without crashing', () => {
  render(<Cancellation />);
});


test('renders all required items in user profile list', () => {
  const { getByTestId } = render(<Cancellation />);
});




  
  test('renders correct data in user profile table', () => {
    const { getByTestId } = render(<Cancellation />);
    const CancellationTable = screen.getByTestId('user-profile-table');
    expect(CancellationTable).toHaveTextContent('02/14/2023');
    expect(CancellationTable).toHaveTextContent('XB1234VIOUSAIN');
    expect(CancellationTable).toHaveTextContent('Edison, NJ US');
    expect(CancellationTable).toHaveTextContent('Mumbai');
    expect(CancellationTable).toHaveTextContent('Victor');
    expect(CancellationTable).toHaveTextContent('DHL');
    expect(CancellationTable).toHaveTextContent('$52.68');
    expect(CancellationTable).toHaveTextContent('Pending');
    expect(CancellationTable).toHaveTextContent('In Progress');
    expect(CancellationTable).toHaveTextContent('Completed');
  });
  
  
  
  
