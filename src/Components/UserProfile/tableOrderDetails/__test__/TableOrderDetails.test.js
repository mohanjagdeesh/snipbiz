import { render, screen } from '@testing-library/react';
import TableOrdersDetails from '../TableOrderDetails';

const orderDetails = {
  id: 1,
  date: '2023-03-13',
  orderId: '1234',
  from: 'Some address',
  destination: 'Another address',
  recipient: 'John Doe',
  carrierLog: 'Some carrier',
  item: [
    { name: 'Item 1', quantity: 1, price: 20.00, amount: 20.00 },
    { name: 'Item 2', quantity: 2, price: 10.00, amount: 20.00 },
  ],
  amount: 40.00,
  status: 'Pending',
  isOrderDisplay: true,
};

describe('TableOrdersDetails', () => {
  test('renders order details middle card', () => {
    render(<TableOrdersDetails orderDetails={orderDetails} />);
    const orderDetailsMiddleCard = screen.getByTestId('order-details-middle-card');
    expect(orderDetailsMiddleCard).toBeInTheDocument();
  });

  test('renders from address card', () => {
    render(<TableOrdersDetails orderDetails={orderDetails} />);
    const fromAddressCard = screen.getByTestId('from-address-card');
    expect(fromAddressCard).toBeInTheDocument();
  });

  test('renders to address card', () => {
    render(<TableOrdersDetails orderDetails={orderDetails} />);
    const toAddressCard = screen.getByTestId('to-address-card');
    expect(toAddressCard).toBeInTheDocument();
  });

  test('renders items table', () => {
    render(<TableOrdersDetails orderDetails={orderDetails} />);
    const itemsTable = screen.getByTestId('items-table');
    expect(itemsTable).toBeInTheDocument();
  });

  test('renders status table head', () => {
    render(<TableOrdersDetails orderDetails={orderDetails} />);
    const statusTableHead = screen.getByTestId('status-table-head');
    expect(statusTableHead).toBeInTheDocument();
    });
    });
    
    
    
    
    
    
    