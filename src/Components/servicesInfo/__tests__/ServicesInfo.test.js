import React from 'react';
import { render } from '@testing-library/react';
import ServicesInfo from '../ServicesInfo';

describe('ServicesInfo', () => {
  test('renders the component', () => {
    const { getByTestId } = render(<ServicesInfo />);
    const serviceBg = getByTestId('service-bg');
    expect(serviceBg).toBeInTheDocument();
  });

  test('renders deliveries information', () => {
    const { getByTestId } = render(<ServicesInfo />);
    const deliveries = getByTestId('deliveries');
    expect(deliveries).toHaveTextContent('50K+');
    expect(deliveries).toHaveTextContent('Deliveries');
  });

  test('renders customers served information', () => {
    const { getByTestId } = render(<ServicesInfo />);
    const customersServed = getByTestId('customers-served');
    expect(customersServed).toHaveTextContent('2M+');
    expect(customersServed).toHaveTextContent('Customers Served');
  });

  test('renders countries served information', () => {
    const { getByTestId } = render(<ServicesInfo />);
    const countriesServed = getByTestId('countries-served');
    expect(countriesServed).toHaveTextContent('50+');
    expect(countriesServed).toHaveTextContent('Countries Served');
  });

  test('renders partners information', () => {
    const { getByTestId } = render(<ServicesInfo />);
    const partners = getByTestId('partners');
    expect(partners).toHaveTextContent('5');
    expect(partners).toHaveTextContent('Partners');
  });
});
