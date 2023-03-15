import { render, screen } from "@testing-library/react";
import ShipForwarding from "../ShipForwarding";

describe("ShipForwarding", () => {
  test("renders the ship heading", () => {
    render(<ShipForwarding />);
    const headingElement = screen.getByText(/Ship Forwarding/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the 'Know more' button", () => {
    render(<ShipForwarding />);
    const buttonElement = screen.getByTestId("know-more");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the 'Start shipping' button", () => {
    render(<ShipForwarding />);
    const buttonElement = screen.getByTestId("start-shipping");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 3 orange and 3 blue containers", () => {
    render(<ShipForwarding />);
    const orangeContElements = screen.getAllByTestId(/^orange-cont-\d$/);
    expect(orangeContElements.length).toBe(3);
    const blueContElements = screen.getAllByTestId(/^blue-cont-\d$/);
    expect(blueContElements.length).toBe(3);
  });

  test("renders USA Address text in the third blue container", () => {
    render(<ShipForwarding />);
    const usaAddressElement = screen.getByTestId("usa-address");
    expect(usaAddressElement).toBeInTheDocument();
  });
});
