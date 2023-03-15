import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LandingPage from "../LandingPage";

describe("LandingPage component", () => {
  it("renders the form component", () => {
    const { getByTestId } = render(<LandingPage />);
    const formElement = getByTestId("form");
    expect(formElement).toBeInTheDocument();
  });

  it("renders the help link", () => {
    const { getByTestId } = render(<LandingPage />);
    const helpLink = getByTestId("help-link");
    expect(helpLink).toBeInTheDocument();
    expect(helpLink.getAttribute("href")).toBe("/");
  });

  it("renders the get quote button", () => {
    const { getByTestId } = render(<LandingPage />);
    const getQuoteButton = getByTestId("get-quote-button");
    expect(getQuoteButton).toBeInTheDocument();
  });

  it("renders the star image", () => {
    const { getByTestId } = render(<LandingPage />);
    const starImage = getByTestId("star-image");
    expect(starImage).toBeInTheDocument();
  });

  it("renders the multiple shipments link", () => {
    const { getByTestId } = render(<LandingPage />);
    const multipleShipmentsLink = getByTestId("multiple-shipments-link");
    expect(multipleShipmentsLink).toBeInTheDocument();
    expect(multipleShipmentsLink.getAttribute("href")).toBe(
      "https://www.google.com"
    );
    expect(multipleShipmentsLink.getAttribute("target")).toBe("_blank");
    expect(multipleShipmentsLink.getAttribute("rel")).toBe("noreferrer");
  });

  it("renders the box image", () => {
    const { getByTestId } = render(<LandingPage />);
    const boxImage = getByTestId("box-image");
    expect(boxImage).toBeInTheDocument();
  });

  it("renders the tax span", () => {
    const { getByTestId } = render(<LandingPage />);
    const taxSpan = getByTestId("tax-span");
    expect(taxSpan).toBeInTheDocument();
    expect(taxSpan.textContent).toBe("Tax free*");
  });

  it("renders the how it works button", () => {
    const { getByTestId } = render(<LandingPage />);
    const howItWorksButton = getByTestId("how-it-works-button");
    expect(howItWorksButton).toBeInTheDocument();
  });
});
