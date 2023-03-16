import { render, screen, fireEvent } from "@testing-library/react";
import AddressForm from "../AddressForm";



test("renders AddressForm without errors", () => {
    render(<AddressForm />);
  });


test("renders all form elements correctly", () => {
    render(<AddressForm />);
    expect(screen.getByLabelText(/Address Type/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Address 1/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Address 2/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter City Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/)).toBeInTheDocument();;
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

test("displays error message when required fields are not filled", () => {
  render(<AddressForm />);
  fireEvent.submit(screen.getByRole("button"));
});

test("displays error message when zipcode field is not a positive integer", () => {
  render(<AddressForm />);
  fireEvent.submit(screen.getByRole("button"));
});

test("does not display error message when all required fields are filled", () => {
  render(<AddressForm />);
  fireEvent.change(screen.getByTestId("address-type"), { target: { value: "Home Address" } });
  fireEvent.change(screen.getByTestId("address-1"), { target: { value: "123 Main St" } });
  fireEvent.change(screen.getByTestId("address-2"), { target: { value: "Apt 4B" } });
  fireEvent.change(screen.getByTestId("city"), { target: { value: "Anytown" } });
  fireEvent.change(screen.getByTestId("state"), { target: { value: "andhrapradesh" } });
  fireEvent.submit(screen.getByRole("button"));
  expect(screen.queryByText(/Required/)).toBeNull();
});
