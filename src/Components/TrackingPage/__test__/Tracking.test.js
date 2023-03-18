import { render, screen, fireEvent } from "@testing-library/react";
import TrackingPage from "../Tracking";

describe("TrackingSection component", () => {
  test("renders track order heading", () => {
    render(<TrackingPage />);
    const headingElement = screen.getByTestId("track-order");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders two forms for tracking", () => {
    render(<TrackingPage />);
    const leftFormElement = screen.getByTestId("tracking-leftside");
    const rightFormElement = screen.getByTestId("tracking-rightside");
    expect(leftFormElement).toBeInTheDocument();
    expect(rightFormElement).toBeInTheDocument();
  });

  test("tracks shipment by carrier", async () => {
    render(<TrackingPage />);
    const carrierSelectElement = screen.getByLabelText(
      "Track your Shipment by Carrier"
    );
    fireEvent.change(carrierSelectElement, {
      target: { value: "Select Carrier 2" },
    });

    const trackingInputElement = screen.getByLabelText(
      "Enter Your Tracking number"
    );
    fireEvent.change(trackingInputElement, { target: { value: "1234567890" } });
  });
});
