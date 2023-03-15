import { render, screen } from '@testing-library/react';
import CouponCard from '../CouponCard';

describe('CouponCard', () => {
  const eachOffer = {
    offerPercent: '10% off',
    offerType: 'All products',
    expiry: 'Expires in 2 days',
  };

  it('should render the offer percent', () => {
    render(<CouponCard eachOffer={eachOffer} />);
    const offerPercent = screen.getByText(/10% off/i);
    expect(offerPercent).toBeInTheDocument();
  });

  it('should render the offer type', () => {
    render(<CouponCard eachOffer={eachOffer} />);
    const offerType = screen.getByText(/All products/i);
    expect(offerType).toBeInTheDocument();
  });

  it('should render the expiry', () => {
    render(<CouponCard eachOffer={eachOffer} />);
    const expiry = screen.getByText(/Expires in 2 days/i);
    expect(expiry).toBeInTheDocument();
  });

  it('should render the copy promo code button', () => {
    render(<CouponCard eachOffer={eachOffer} />);
    const copyPromoBtn = screen.getByRole('button', { name: /Copy Promo Code/i });
    expect(copyPromoBtn).toBeInTheDocument();
  });

  it('should have a unique test attribute for the card', () => {
    render(<CouponCard eachOffer={eachOffer} />);
    const card = screen.getByTestId('coupon-card');
    expect(card).toBeInTheDocument();
  });

  it('should have a unique test attribute for the offer percent', () => {
    render(<CouponCard eachOffer={eachOffer} />);
    const offerPercent = screen.getByTestId('offer-percent');
    expect(offerPercent).toBeInTheDocument();
  });

  it('should have a unique test attribute for the offer type', () => {
    render(<CouponCard eachOffer={eachOffer} />);
    const offerType = screen.getByTestId('offer-type');
    expect(offerType).toBeInTheDocument();
  });

  it('should have a unique test attribute for the expiry', () => {
    render(<CouponCard eachOffer={eachOffer} />);
    const expiry = screen.getByTestId('expiry');
    expect(expiry).toBeInTheDocument();
  });

  it('should have a unique test attribute for the copy promo code button', () => {
    render(<CouponCard eachOffer={eachOffer} />);
    const copyPromoBtn = screen.getByTestId('copy-promo-btn');
    expect(copyPromoBtn).toBeInTheDocument();
  });
});