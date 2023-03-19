// Import dependencies
import { render, screen, fireEvent } from "@testing-library/react";
import HowitWorks from '../HowitWorks';

// Test suite
describe("HowitWorks component", () => {

  // Test case: Renders HowitWorks component without errors
  it("should render HowitWorks component", () => {
    render(<HowitWorks />);
    expect(screen.getByTestId("howitworks-main")).toBeInTheDocument();
  });

  // Test case: Clicking on a navigation tab should display its information
  it("should display the information of the selected tab", () => {
    render(<HowitWorks />);
    fireEvent.click(screen.getByText("Courier Service"));
    expect(screen.getByAltText("video-play")).toBeInTheDocument();
  });

  // Test case: Clicking on a navigation tab should toggle it
  it("should toggle the selected tab", () => {
    render(<HowitWorks />);
    fireEvent.click(screen.getByText("Courier Service"));
    fireEvent.click(screen.getByText("Courier Service"));
    expect(screen.queryByText("video-play")).toBeNull();
  });

  // Test case: Clicking on a navigation tab should toggle it
  it("should toggle the selected tab", () => {
    render(<HowitWorks />);
    fireEvent.click(screen.getByText("US Debit Cards"));
    fireEvent.click(screen.getByText("US Debit Cards"));
    expect(screen.queryByText("video-play")).toBeNull();
  });

  // Test case: Renders all navigation tabs
  it("should render all navigation tabs", () => {
    render(<HowitWorks />);
    expect(screen.getByText("Courier Service")).toBeInTheDocument();
    expect(screen.getByText("Forward Shipping")).toBeInTheDocument();
    expect(screen.getByText("US Debit Cards")).toBeInTheDocument();
  });

  // Test case: Renders all information of the Forward Shipping tab
  it("should render all information of the Forward Shipping tab", () => {
    render(<HowitWorks />);
    fireEvent.click(screen.getByText("Forward Shipping"));
    expect(screen.getByTestId("howitworks-process-1")).toBeInTheDocument();
    expect(screen.getByTestId("howitworks-process-2")).toBeInTheDocument();
    expect(screen.getByTestId("howitworks-process-3")).toBeInTheDocument();
    expect(screen.getByTestId("howitworks-process-4")).toBeInTheDocument();
    expect(screen.getByTestId("howitworks-process-5")).toBeInTheDocument();
    expect(screen.getByTestId("howitworks-process-6")).toBeInTheDocument();
  });

});