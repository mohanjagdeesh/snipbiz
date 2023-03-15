import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard component', () => {
  test('renders list of dashboard items', () => {
    render(<Dashboard />);
    const listItems = screen.getAllByTestId(/^dashboard-list-item-/);
    expect(listItems).toHaveLength(11);
  });

  test('renders initial dashboard content', () => {
    render(<Dashboard />);
    const dashboardContent = screen.getByTestId('dashboard-main-container');
    expect(dashboardContent).toBeInTheDocument();
  });

  test('renders correct dashboard content when button is clicked', () => {
    render(<Dashboard />);
    const ordersButton = screen.getByTestId('list-button-1');
    fireEvent.click(ordersButton);
    const ordersContent = screen.getByTestId('orders-content');
    expect(ordersContent).toBeInTheDocument();
  });

  test('adds active-button class to button when clicked', () => {
    render(<Dashboard />);
    const ordersButton = screen.getByTestId('list-button-1');
    fireEvent.click(ordersButton);
    expect(ordersButton).toHaveClass('active-button');
  });
});
