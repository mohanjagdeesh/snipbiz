import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('should render all footer links', () => {
    render(<Footer />);
    const about = screen.getByTestId('about');
    const siteMap = screen.getByTestId('siteMap');
    const shipForward = screen.getByTestId('shipForward');
    const legal = screen.getByTestId('legal');
    expect(about).toBeInTheDocument();
    expect(siteMap).toBeInTheDocument();
    expect(shipForward).toBeInTheDocument();
    expect(legal).toBeInTheDocument();
  });

  it('should render Maryland and Delaware addresses', () => {
    render(<Footer />);
    const maryland = screen.getByTestId('maryland');
    const delaware = screen.getByTestId('delaware');
    expect(maryland).toHaveTextContent('maryland, usa');
    expect(delaware).toHaveTextContent('delaware, usa');
  });

  it('should render alipay and discover logos', () => {
    render(<Footer />);
    const alipayLogo = screen.getByTestId('alipay-logo');
    const discoverLogo = screen.getByTestId('discover-logo');
    expect(alipayLogo).toBeInTheDocument();
    expect(discoverLogo).toBeInTheDocument();
  });
});
