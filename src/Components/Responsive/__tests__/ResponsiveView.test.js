import React from "react";
import { render, screen } from "@testing-library/react";
import { useGlobalStore } from "../../../store/useGlobalStore";
import ResponsiveView from "../ResponsiveView";

jest.mock("../../../store/useGlobalStore");

describe("ResponsiveView component", () => {
  test("renders column view when isMobile is true", () => {
    const isMobileMock = true;
    useGlobalStore.mockImplementation((selector) => selector({ isMobile: isMobileMock }));
    render(<ResponsiveView>Hello world</ResponsiveView>);
    const wrapper = screen.getByTestId("wrapper");
    expect(wrapper).toHaveClass("column-view");
  });

  test("renders row view when isMobile is false", () => {
    const isMobileMock = false;
    useGlobalStore.mockImplementation((selector) => selector({ isMobile: isMobileMock }));
    render(<ResponsiveView>Hello world</ResponsiveView>);
    const wrapper = screen.getByTestId("wrapper");
    expect(wrapper).toHaveClass("row-view");
  });
});
