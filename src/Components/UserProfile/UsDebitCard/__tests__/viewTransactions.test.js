import { render, fireEvent , screen} from "@testing-library/react";
import ViewTransactions from "../viewTransactions";

describe("UsDebitCard", () => {
  it("should render the debit card title", () => {
    const { getByTestId } = render(<ViewTransactions />);
    expect(screen.getByTestId("debit-card-title")).toBeInTheDocument();
  });

  it("should render the debit card tabs", () => {
    const { getByTestId } = render(<ViewTransactions />);
    expect(screen.getByTestId("debit-card-tabs")).toBeInTheDocument();
  });

  it("should activate the selected tab on click", () => {
    const { getByTestId } = render(<ViewTransactions />);
    const tabItemOne = screen.getByTestId("tab-item-1");
    const tabItemTwo = screen.getByTestId("tab-item-2");

    expect(tabItemOne).toHaveClass("tab-item-button");
    expect(tabItemTwo).toHaveClass("tab-item-button");
    expect(tabItemTwo).not.toHaveClass("tab-activated");

    fireEvent.click(tabItemTwo);

    expect(tabItemOne).toHaveClass("tab-item-button");
    expect(tabItemOne).not.toHaveClass("tab-activated");
    expect(tabItemTwo).toHaveClass("tab-item-button");
    expect(tabItemTwo).toHaveClass("tab-activated");
  });
});
