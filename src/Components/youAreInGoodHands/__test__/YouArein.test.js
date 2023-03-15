import React from "react";
import { render, fireEvent } from "@testing-library/react";
import YouAreInGoodHands from "../YouArein";



describe("YouAreInGoodHands component", () => {
    it("should render without error", () => {
      const { getByTestId } = render(<YouAreInGoodHands />);
      expect(getByTestId("good-right")).toBeInTheDocument();
    });
  });

  
describe("YouAreInGoodHands component", () => {
    it("should be able to click the 'Know more' button", () => {
      const { getByText } = render(<YouAreInGoodHands />);
      const button = getByText("Know more");
      fireEvent.click(button);
      // Add an expectation to check that the click action results in the expected behavior.
    });
  });

describe("YouAreInGoodHands component", () => {
  it("should be able to click the 'Shopnow' button", () => {
    const { getByText } = render(<YouAreInGoodHands />);
    const button = getByText("Shopnow");
    fireEvent.click(button);
    // Add an expectation to check that the click action results in the expected behavior.
  });
});
