import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from '../Contacts';

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

test('renders Contact data', () => {
  const { getByTestId } = render(<Contact />);
  const contactData = getByTestId('contact-data');
  expect(contactData).toBeInTheDocument();
  expect(contactData.querySelector('.contact-data-left')).toBeInTheDocument();
  expect(contactData.querySelector('.contact-data-right-form')).toBeInTheDocument();
});

test('renders Contact chat icon, phone number and label', () => {
  const { getByTestId } = render(<Contact />);
  const contactChat = getByTestId('contact-chat');
  expect(contactChat).toBeInTheDocument();
  expect(contactChat.querySelector('p').textContent).toBe('CHAT');
  expect(contactChat.querySelector('h4').textContent).toBe('987-654-3210');
});

test('renders Contact email icon, email address and label', () => {
  const { getByTestId } = render(<Contact />);
  const contactEmail = getByTestId('contact-email');
  expect(contactEmail).toBeInTheDocument();
  expect(contactEmail.querySelector('p').textContent).toBe('E-MAIL');
  expect(contactEmail.querySelector('h4').textContent).toBe('help@snipbiz.com');
});

test('renders Contact call icon, phone number and label', () => {
  const { getByTestId } = render(<Contact />);
  const contactCall = getByTestId('contact-call');
  expect(contactCall).toBeInTheDocument();
  expect(contactCall.querySelector('p').textContent).toBe('CALL');
  expect(contactCall.querySelector('h4').textContent).toBe('+01 123 456 7890');
});
