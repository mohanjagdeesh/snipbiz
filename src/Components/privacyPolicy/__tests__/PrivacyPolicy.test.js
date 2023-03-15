import React from "react";
import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../PrivacyPolicy";

describe("Privacy Policy Component", () => {
  beforeEach(() => {
    render(<PrivacyPolicy />);
  });

  it("renders the privacy policy main div", () => {
    const privacyPolicyMain = screen.getByTestId("privacy-policy-main");
    expect(privacyPolicyMain).toBeInTheDocument();
  });

  it("renders the privacy policy heading", () => {
    const privacyPolicyHeading = screen.getByTestId("privacy-policy-heading");
    expect(privacyPolicyHeading).toBeInTheDocument();
  });

  it("renders the privacy policy", () => {
    const privacyPolicy = screen.getByTestId("privacy-policy");
    expect(privacyPolicy).toBeInTheDocument();
  });

  it("renders the information about us", () => {
    const informationAboutUs = screen.getByTestId("information-about-us");
    expect(informationAboutUs).toBeInTheDocument();
  });

  it("renders the information we may collect", () => {
    const informationWeMayCollect = screen.getByTestId("information-we-may-collect");
    expect(informationWeMayCollect).toBeInTheDocument();
  });

  it("renders the IP addresses and cookies section", () => {
    const ipAddressInfo = screen.getByTestId("ip-address-info");
    const cookieInfo = screen.getByTestId("cookie-info");
    const cookieAcceptance = screen.getByTestId("cookie-acceptance");

    expect(ipAddressInfo).toBeInTheDocument();
    expect(cookieInfo).toBeInTheDocument();
    expect(cookieAcceptance).toBeInTheDocument();
  });

  it("renders the processing and storage section", () => {
    const dataControllerInfo = screen.getByTestId("data-controller-info");
    const staffInfo = screen.getByTestId("staff-info");
    const informationSecurityInfo = screen.getByTestId("information-security-info");
    const checkoutInfo = screen.getByTestId("checkout-info");

    expect(dataControllerInfo).toBeInTheDocument();
    expect(staffInfo).toBeInTheDocument();
    expect(informationSecurityInfo).toBeInTheDocument();
    expect(checkoutInfo).toBeInTheDocument();
  });
});
