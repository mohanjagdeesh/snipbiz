import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  test("renders navbar", () => {
    render(<Navbar />);
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("renders navbar logo", () => {
    render(<Navbar />);
    const logo = screen.getByTestId("navbar-logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders navbar menu items", () => {
    render(<Navbar />);
    const menuIcon = screen.getByTestId("navbar-menu-icon");
    fireEvent.click(menuIcon);
    const menuItems = screen.getAllByTestId(/navbar-menu-item-.*/);
    expect(menuItems).toHaveLength(5);
  });

  test("renders how it works button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("how-it-works-btn");
    expect(button).toHaveTextContent("How It Works");
  });

  test("renders partners button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("partners-btn");
    expect(button).toHaveTextContent("Partners");
  });

  test("renders tracking button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("tracking-btn");
    expect(button).toHaveTextContent("Tracking");
  });

  test("renders FAQ button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("faq-btn");
    expect(button).toHaveTextContent("FAQ");
  });

  test("renders US debit card button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("us-debit-card-btn");
    expect(button).toHaveTextContent("Us Debit Card");
  });

  test("renders contact button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("contact-btn");
    expect(button).toHaveTextContent("Contact");
  });

  test("renders sign in button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("signin-btn");
    expect(button).toBeInTheDocument();
  });

  test("renders grocery store icon button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("grocery-store-icon-btn");
    expect(button).toBeInTheDocument();
  });

  test("renders EN button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("en-btn");
    expect(button).toHaveTextContent("EN");
  });

  test("renders search icon button", () => {
    render(<Navbar />);
    const button = screen.getByTestId("search-icon-btn");
    expect(button).toBeInTheDocument();
  });
});
