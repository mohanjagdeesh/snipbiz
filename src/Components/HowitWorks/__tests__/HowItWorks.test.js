import React from "react";
import { render, screen } from "@testing-library/react";
import HowitWorks from "../HowitWorks";

describe("HowitWorks component", () => {
  test("renders the component", () => {
    render(<HowitWorks />);
    const mainElement = screen.getByTestId("howitworks-main");
    expect(mainElement).toBeInTheDocument();
  });

  test("renders the component heading", () => {
    render(<HowitWorks />);
    const headingElement = screen.getByTestId("howitworks-heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.querySelector("h1")).toHaveTextContent("How it Works");
  });

  test("renders the navigation items", () => {
    render(<HowitWorks />);
    const courierServiceItem = screen.getByTestId("courier-service");
    const forwardShippingItem = screen.getByTestId("forward-shipping");
    const usDebitCardsItem = screen.getByTestId("us-debit-cards");

    expect(courierServiceItem).toBeInTheDocument();
    expect(forwardShippingItem).toBeInTheDocument();
    expect(usDebitCardsItem).toBeInTheDocument();
  });

  test("renders the video and play button", () => {
    render(<HowitWorks />);
    const videoPicElement = screen.getByAltText("video-play");
    const playBtnElement = screen.getByAltText("play-btn");

    expect(videoPicElement).toBeInTheDocument();
    expect(playBtnElement).toBeInTheDocument();
  });

  test("renders the signup process section", () => {
    render(<HowitWorks />);
    const signupProcessElement = screen.getByTestId("signup-process");
    const signupImgElement = screen.getByTestId("signup-img");

    expect(signupProcessElement).toBeInTheDocument();
    expect(signupProcessElement).toHaveTextContent("Signup & get USA Address");
    expect(signupProcessElement).toHaveTextContent("SnipBiz offers a solution to your every shopping and shipping need from the USA including, Repacking, Consolidation, And Detail Images of Packages.");
    expect(signupImgElement).toBeInTheDocument();
  });

  test("renders the shop process section", () => {
    render(<HowitWorks />);
    const shopProcessElement = screen.getByTestId("shop-process");
    const shopImgElement = screen.getByTestId("shop-img");

    expect(shopProcessElement).toBeInTheDocument();
    expect(shopProcessElement).toHaveTextContent("Shop Online & Ship to Our Ware House");
    expect(shopProcessElement).toHaveTextContent("SnipBiz offers a solution to your every shopping and shipping need from the USA including, Repacking, Consolidation, And Detail Images of Packages.");
    expect(shopImgElement).toBeInTheDocument();
  });

  test("renders the consolidate process section", () => {
    render(<HowitWorks />);
    const consolidateProcessElement = screen.getByTestId("consolidate-process");

    expect(consolidateProcessElement).toBeInTheDocument();
    expect(consolidateProcessElement).toHaveTextContent("We Consolidate Your Packages");
    expect(consolidateProcessElement).toHaveTextContent("SnipBiz offers a solution to your every shopping and shipping need from the USA including, Repacking, Consolidation, And Detail Images of Packages.");
  });
});
