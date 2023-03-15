import { render, screen, fireEvent } from '@testing-library/react';
import ServicingDestiny from '../ServicingDestiny';

describe('ServicingDestiny', () => {
  test('renders "Serving Destinations" heading', () => {
    render(<ServicingDestiny />);
    const servingName = screen.getByTestId('serving-name');
    expect(servingName).toBeInTheDocument();
    expect(servingName.textContent).toBe('Serving Destinations');
  });

  test('renders all places with their images and details', () => {
    render(<ServicingDestiny />);
    const delhiImg = screen.getByTestId('delhi-img');
    const delhiName = screen.getByTestId('delhi-name');
    const delhiPrice = screen.getByTestId('delhi-price');
    const newyorkImg = screen.getByTestId('newyork-img');
    const newyorkName = screen.getByTestId('newyork-name');
    const newyorkPrice = screen.getByTestId('newyork-price');
    const londonImg = screen.getByTestId('london-img');
    const londonName = screen.getByTestId('london-name');
    const londonPrice = screen.getByTestId('london-price');
    const frankfurtImg = screen.getByTestId('frankfurt-img');
    const frankfurtName = screen.getByTestId('frankfurt-name');
    const frankfurtPrice = screen.getByTestId('frankfurt-price');
    const amsterdamImg = screen.getByTestId('place-img');
    const amsterdamName = screen.getByTestId('place-name');
    const amsterdamPrice = screen.getByTestId('place-price');

    expect(delhiImg).toBeInTheDocument();
    expect(delhiName).toBeInTheDocument();
    expect(delhiPrice).toBeInTheDocument();
    expect(delhiImg.alt).toBe('delhi');
    expect(delhiName.textContent).toBe('Delhi');
    expect(delhiPrice.textContent).toBe('Lowest Price $10.00');

    expect(newyorkImg).toBeInTheDocument();
    expect(newyorkName).toBeInTheDocument();
    expect(newyorkPrice).toBeInTheDocument();
    expect(newyorkImg.alt).toBe('newyork');
    expect(newyorkName.textContent).toBe('Newyork');
    expect(newyorkPrice.textContent).toBe('Lowest Price $25.00');

    expect(londonImg).toBeInTheDocument();
    expect(londonName).toBeInTheDocument();
    expect(londonPrice).toBeInTheDocument();
    expect(londonImg.alt).toBe('london');
    expect(londonName.textContent).toBe('London');
    expect(londonPrice.textContent).toBe('Lowest Price $15.00');

    expect(frankfurtImg).toBeInTheDocument();
    expect(frankfurtName).toBeInTheDocument();
    expect(frankfurtPrice).toBeInTheDocument();
    expect(frankfurtImg.alt).toBe('frankfurt');
    expect(frankfurtName.textContent).toBe('Frankfurt');
    expect(frankfurtPrice.textContent).toBe('Lowest Price $18.00');

    expect(amsterdamImg).toBeInTheDocument();
    expect(amsterdamName).toBeInTheDocument();
    expect(amsterdamPrice).toBeInTheDocument();
    expect(amsterdamImg.alt).toBe('amsterdam');
    expect(amsterdamName.textContent).toBe('Amsterdam');
    expect(amsterdamPrice.textContent).toBe('Lowest Price $17.00');
  });
})