import React from 'react';
import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../TermAndConditions.jsx';

describe('TermsAndConditions', () => {
  it('renders terms and conditions heading', () => {
    render(<TermsAndConditions />);
    const heading = screen.getByTestId('terms-and-conditions-heading');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('Terms And Conditions');
  });

  it('renders terms and conditions data container', () => {
    render(<TermsAndConditions />);
    const dataContainer = screen.getByTestId('terms-and-conditions-data-container');
    expect(dataContainer).toBeInTheDocument();
  });

  it('renders terms and conditions list', () => {
    render(<TermsAndConditions />);
    const list = screen.getByTestId('terms-and-conditions-list');
    expect(list).toBeInTheDocument();
  });

  it('renders section 1 of terms and conditions', () => {
    render(<TermsAndConditions />);
    const section1 = screen.getByTestId('terms-and-conditions-section');
    expect(section1).toBeInTheDocument();
    expect(section1.textContent).toContain('Updates to the TermsAndConditions');
    expect(screen.getByTestId('terms-and-conditions-section-1-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('terms-and-conditions-section-1-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('terms-and-conditions-section-1-item-3')).toBeInTheDocument();
    expect(screen.getByTestId('terms-and-conditions-section-1-item-4')).toBeInTheDocument();
  });

  it('renders section 2 of terms and conditions', () => {
    render(<TermsAndConditions />);
    const section2 = screen.getByTestId('terms-and-conditions-section-2');
    expect(section2).toBeInTheDocument();
    expect(section2.textContent).toContain('Agreement:');
    expect(screen.getByTestId('terms-and-conditions-section-2-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('terms-and-conditions-section-2-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('terms-and-conditions-section-2-item-3')).toBeInTheDocument();
    expect(screen.getByTestId('terms-and-conditions-section-2-item-4')).toBeInTheDocument();
  });

  it('renders section 3 of terms and conditions', () => {
    render(<TermsAndConditions />);
    const section3 = screen.getByTestId('terms-and-conditions-section-3');
    expect(section3).toBeInTheDocument();
    expect(section3.textContent).toContain('Splice Packages Terms of Service:');
    expect(screen.getByTestId('terms-and-conditions-section-3-item-1')).toBeInTheDocument();
  });

  it('renders section 4 of terms and conditions', () => {
    render(<TermsAndConditions />);
    const section4 = screen.getByTestId('terms-and-conditions-section-4');
    expect(section4).toBeInTheDocument();
    expect(section4.textContent).toContain('Terms Of Account:');
    expect(screen.getByTestId('terms-and-conditions-section-4-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('terms-and-conditions-section-4-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('terms-and-conditions-section-4-item-3')).toBeInTheDocument();
  });


})