import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

test('renders Contact heading', () => {
  const { getByTestId } = render(<Contact />);
  const contactHeading = getByTestId('contact-heading');
  expect(contactHeading).toBeInTheDocument();
  expect(contactHeading.textContent).toBe('Contact');
});

test('renders Contact paragraph', () => {
  const { getByTestId } = render(<Contact />);
  const contactParagraph = getByTestId('contact-paragraph');
  expect(contactParagraph).toBeInTheDocument();
  expect(contactParagraph.querySelector('h2').textContent).toMatch(/If you have any questions/);
});
