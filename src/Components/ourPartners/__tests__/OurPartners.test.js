import React from 'react';
import { render, screen } from '@testing-library/react';
import OurPartners from '../OurPartners';

describe('OurPartners component', () => {
  test('renders "Our Partners" heading', () => {
    render(<OurPartners />);
    const headingElement = screen.getByTestId('our-partners-heading');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Our Partners');
  });

  test('renders all courier logos', () => {
    render(<OurPartners />);
    const dhlLogoElement = screen.getByTestId('dhl-logo');
    const fedexLogoElement = screen.getByTestId('fedex-logo');
    const upsLogoElement = screen.getByTestId('ups-logo');
    const aramexLogoElement = screen.getByTestId('aramex-logo');
    const uspsLogoElement = screen.getByTestId('usps-logo');
    expect(dhlLogoElement).toBeInTheDocument();
    expect(fedexLogoElement).toBeInTheDocument();
    expect(upsLogoElement).toBeInTheDocument();
    expect(aramexLogoElement).toBeInTheDocument();
    expect(uspsLogoElement).toBeInTheDocument();
  });

  test('renders previous and next buttons', () => {
    render(<OurPartners />);
    const prevButtonElement = screen.getByTestId('prev-button');
    const nextButtonElement = screen.getByTestId('next-button');
    expect(prevButtonElement).toBeInTheDocument();
    expect(nextButtonElement).toBeInTheDocument();
  });
});
