import React from 'react';
import { render } from "@testing-library/react";

import UserProfile from '../Cancellation';

test('renders user profile component without crashing', () => {
  render(<UserProfile />);
});


test('renders all required items in user profile list', () => {
  const { getByTestId } = render(<UserProfile />);
  const userProfileList = getByTestId('user-profile-list');
  expect(userProfileList.children.length).toBe(11);
  expect(userProfileList.children[2]).toHaveTextContent('Cancellation/Refund');
});



test('renders all required rows and columns in user profile table', () => {
    const { getByTestId } = render(<UserProfile />);
    const userProfileTable = getByTestId('user-profile-table');
    const tableRows = userProfileTable.getElementsByTagName('tr');
    expect(tableRows.length).toBe(5);
    expect(tableRows[0].getElementsByTagName('th').length).toBe(10);
    expect(tableRows[1].getElementsByTagName('td').length).toBe(10);
    expect(tableRows[2].getElementsByTagName('td').length).toBe(10);
    expect(tableRows[3].getElementsByTagName('td').length).toBe(10);
    expect(tableRows[4].getElementsByTagName('td').length).toBe(10);
  });
  
  test('renders correct data in user profile table', () => {
    const { getByTestId } = render(<UserProfile />);
    const userProfileTable = getByTestId('user-profile-table');
    expect(userProfileTable).toHaveTextContent('02/14/2023');
    expect(userProfileTable).toHaveTextContent('XB1234VIOUSAIN');
    expect(userProfileTable).toHaveTextContent('Edison, NJ US');
    expect(userProfileTable).toHaveTextContent('Mumbai');
    expect(userProfileTable).toHaveTextContent('Victor');
    expect(userProfileTable).toHaveTextContent('DHL');
    expect(userProfileTable).toHaveTextContent('$52.68');
    expect(userProfileTable).toHaveTextContent('Pending');
    expect(userProfileTable).toHaveTextContent('In Progress');
    expect(userProfileTable).toHaveTextContent('Completed');
  });
  
  
  
  
test('renders correct data in user profile table', () => {
    const { getByTestId } = render(<UserProfile />);
    const userProfileTable = getByTestId('user-profile-table');
    expect(userProfileTable).toHaveTextContent('02/14/2023');
    expect(userProfileTable).toHaveTextContent('XB1234VIOUSAIN');
    expect(userProfileTable).toHaveTextContent('Edison, NJ US');
    expect(userProfileTable).toHaveTextContent('Mumbai');
    expect(userProfileTable).toHaveTextContent('Victor');
    expect(userProfileTable).toHaveTextContent('DHL');
    expect(userProfileTable).toHaveTextContent('$52.68');
    expect(userProfileTable).toHaveTextContent('Pending');
    expect(userProfileTable).toHaveTextContent('In Progress');
    expect(userProfileTable).toHaveTextContent('Completed');
  });
  