import { render, fireEvent, screen } from '@testing-library/react';
import SavedCards from '../SavedCards';

describe('SavedCards component', () => {
  test('renders the "My Saved Cards" heading', () => {
    render(<SavedCards />);
    const headingElement = screen.getByTestId('cards-heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.textContent).toBe('My Saved Cards');
  });

  test('displays "Add Another Card" button', () => {
    render(<SavedCards />);
    const addButton = screen.getByTestId('plus-button');
    expect(addButton).toBeInTheDocument();
    expect(addButton.firstChild).toHaveAttribute('alt', 'plus-icon');
    expect(screen.getByTestId('add-another-card')).toBeInTheDocument();
  });

  test('opens the new card form when "Add Another Card" button is clicked', () => {
    render(<SavedCards />);
    const addButton = screen.getByTestId('plus-button');
    fireEvent.click(addButton);
    const formElement = screen.getByTestId('new-card-form');
    expect(formElement).toBeInTheDocument();
  });

  test('adds a new card when form is submitted', () => {
    render(<SavedCards />);
    const addButton = screen.getByTestId('plus-button');
    fireEvent.click(addButton);

    const cardNumberInput = screen.getByRole("textbox",{name:/Card Number/i});
    fireEvent.change(cardNumberInput, { target: { value: '1234 5678 9012 3456' } });

    const nameOnCardInput = screen.getByRole("textbox",{name:/Name on Card/i});
    fireEvent.change(nameOnCardInput, { target: { value: 'John Doe' } });

    const expiryInput = screen.getByRole("textbox",{name:/Expiry/i});
    fireEvent.change(expiryInput, { target: { value: '12/23' } });

    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
  });

  test('deletes a card when delete button is clicked', () => {
    render(<SavedCards />);

    const addButton = screen.getByTestId('plus-button');
    fireEvent.click(addButton);

    const cardNumberInput = screen.getByRole("textbox",{name:/Card Number/i});
    fireEvent.change(cardNumberInput, { target: { value: '1234 5678 9012 3456' } });

    const nameOnCardInput = screen.getByRole("textbox",{name:/Name on Card/i});
    fireEvent.change(nameOnCardInput, { target: { value: 'John Doe' } });

    const expiryInput = screen.getByRole("textbox",{name:/Expiry/i});
    fireEvent.change(expiryInput, { target: { value: '12/23' } });

    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    expect(screen.queryByTestId('bg-card')).not.toBeInTheDocument();
  });
});
