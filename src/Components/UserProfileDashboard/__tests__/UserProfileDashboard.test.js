import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfileDashboard from "../UserProfileDashboard";

describe("UserProfileDashboard", () => {
 

  it("should render user dashboard container", () => {
    render(<UserProfileDashboard />);
    const userDashboardContainer = screen.getByTestId(
      "user-dashboard-container"
    );
    expect(userDashboardContainer).toBeInTheDocument();
  });

  it("should render order details container", () => {
    render(<UserProfileDashboard />);
    const orderDetailsContainer = screen.getByTestId(
      "order-details-container"
    );
    expect(orderDetailsContainer).toBeInTheDocument();
  });

  it("should render order details main heading", () => {
    render(<UserProfileDashboard />);
    const orderDetailsMainHeading = screen.getByTestId(
      "order-details-main-heading"
    );
    expect(orderDetailsMainHeading).toBeInTheDocument();
    expect(orderDetailsMainHeading).toHaveTextContent("Order Detail");
  });

  it("should render order details table", () => {
    render(<UserProfileDashboard />);
    const orderDetailsTable = screen.getByTestId("order-details-table");
    expect(orderDetailsTable).toBeInTheDocument();
  });


  it("should render help desk main heading", () => {
    render(<UserProfileDashboard />);
    const helpDeskMainHeading = screen.getByTestId("help-desk-heading");
    expect(helpDeskMainHeading).toBeInTheDocument();
    expect(helpDeskMainHeading).toHaveTextContent("Help Desk Items");
  });

  it("should render help desk table", () => {
    render(<UserProfileDashboard />);
    const helpDeskTable = screen.getByTestId("help-desk-table");
    expect(helpDeskTable).toBeInTheDocument();
  });

  it("should render help desk table header", () => {
    render(<UserProfileDashboard />);
    const helpDeskTableHeader = screen.getByTestId("help-desk-table-header");
    expect(helpDeskTableHeader).toBeInTheDocument();
  });

  it("should render help desk table row", () => {
    render(<UserProfileDashboard />);
    const helpDeskTableRow = screen.getAllByTestId("help-desk-table-row");
    expect(helpDeskTableRow).toHaveLength(2);
  });
});
