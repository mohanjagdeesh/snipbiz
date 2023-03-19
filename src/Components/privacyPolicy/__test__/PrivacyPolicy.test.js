import React from "react";
import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../PrivacyPolicy";

describe("PrivacyPolicy", () => {
  it("renders the privacy policy header", () => {
    render(<PrivacyPolicy />);
    const heading = screen.getByRole("heading", { name: "Privacy Policy" });
    expect(heading).toBeInTheDocument();
  });

  it("renders the privacy policy items", () => {
    render(<PrivacyPolicy />);
    const policyItems = screen.getAllByTestId(/^policy-item-/);
    expect(policyItems).toHaveLength(12);
  });

  it("renders the contact information", () => {
    render(<PrivacyPolicy />);
    const contactUs = screen.getByTestId("contact-us");
    expect(contactUs).toBeInTheDocument();
    expect(contactUs).toHaveTextContent(/info@website\.com/);
    expect(contactUs).toHaveTextContent(/\+44 \(0\) 1995 606060/);
    expect(contactUs).toHaveTextContent(/York House, Green Lane West/);
  });
});