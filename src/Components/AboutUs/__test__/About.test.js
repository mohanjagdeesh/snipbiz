import { render ,screen,fireEvent} from "@testing-library/react";
import Aboutus from "../Aboutus";

describe("Aboutus", () => {
  it("should render without crashing", () => {
    render(<Aboutus />);
  });
});


describe("Aboutus", () => {
    it("should display the correct heading", () => {
      render(<Aboutus />);
      const headingElement = screen.getByText(/About SnipBiz/i);
      expect(headingElement).toBeInTheDocument();
    });
  });

  

describe("Aboutus", () => {
    it("should display navigation buttons with the correct text", () => {
      render(<Aboutus />);
      const navigationButtons = screen.getAllByRole("button");
      expect(navigationButtons[0]).toHaveTextContent("Company");
      expect(navigationButtons[1]).toHaveTextContent("People");
      expect(navigationButtons[2]).toHaveTextContent("Partners");
    });
  });

  
describe("Aboutus", () => {
    it("should change the active tab and display the correct information when a navigation button is clicked", () => {
      render(<Aboutus />);
      const companyButton = screen.getByText("Company");
      fireEvent.click(companyButton);
   
    });
  });

  
describe("Aboutus component", () => {
    describe("Aboutus image", () => {
      it("should display the correct image", () => {
        render(<Aboutus />);
        const imageElement = screen.getByAltText("img");
        expect(imageElement.src).toBe(
          "https://res.cloudinary.com/dipjqwb5e/image/upload/v1676366159/adrian-sulyok-sczNLg6rrhQ-unsplash_1_bw7hss.png"
        );
      });
    });
  });
  
  
  