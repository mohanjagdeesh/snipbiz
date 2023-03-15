import { render, screen, fireEvent } from "@testing-library/react";
import Messages, { tablesData as tableData } from "../Messages";

test("renders messages profile heading", () => {
  render(<Messages />);
  const headingElement = screen.getByTestId("messages-heading");
  expect(headingElement).toBeInTheDocument();
});

test("renders message table", () => {
  render(<Messages />);
  const messageTable = screen.getByTestId("message-table");
  expect(messageTable).toBeInTheDocument();
});

test("displays message details when table row is clicked", () => {
  render(<Messages />);
  const tableRow = screen.getByTestId("table-row-" + tableData[0].id);
  fireEvent.click(tableRow);
  const messageDetails = screen.getByTestId("message-details");
  expect(messageDetails).toBeInTheDocument();
});

test("displays correct subject in table row", () => {
  render(<Messages />);
  const tableRow = screen.getByTestId("table-row-" + tableData[0].id);
  const subjectElement = screen.getByTestId("table-row-subject-" + tableData[0].id);
  expect(subjectElement).toHaveTextContent(tableData[0].subject);
});

test("displays message details for correct table row", () => {
  render(<Messages />);
  const firstTableRow = screen.getByTestId("table-row-" + tableData[0].id);
  const secondTableRow = screen.getByTestId("table-row-" + tableData[1].id);
  fireEvent.click(firstTableRow);
  const messageDetails1 = screen.getByTestId("message-details");
  expect(messageDetails1).toBeInTheDocument();
  fireEvent.click(secondTableRow);
  const messageDetails2 = screen.getByTestId("message-details");
  expect(messageDetails2).toBeInTheDocument();
  expect(messageDetails1).not.toBeInTheDocument();
});
