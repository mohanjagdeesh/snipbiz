import { render, screen } from "@testing-library/react";
import BlogPage from "../BlogPage";

describe("BlogPage", () => {
  it("renders all cards correctly", () => {
    render(<BlogPage />);

    const cards = screen.getAllByTestId(/card-\d+/);

    expect(cards).toHaveLength(9);
  });

  it("renders card title correctly", () => {
    render(<BlogPage />);

    const cardTitles = screen.getAllByTestId(/card-title-\d+/);

    expect(cardTitles[0]).toHaveTextContent("Contrary to popular relief");
  });

  it("renders card date correctly", () => {
    render(<BlogPage />);

    const cardDates = screen.getAllByTestId(/card-date-\d+/);

    expect(cardDates[0]).toHaveTextContent("12-01-2022");
  });

  it("renders card body correctly", () => {
    render(<BlogPage />);

    const cardBodies = screen.getAllByTestId(/card-body-\d+/);

    expect(cardBodies[0]).toHaveTextContent(
      "lorem ipsum whichh has done with work as a devloper"
    );
  });

  it("renders card button correctly", () => {
    render(<BlogPage />);

    const cardButtons = screen.getAllByTestId(/card-button-\d+/);

    expect(cardButtons[0]).toHaveTextContent("Read more");
  });
});
