import Blogdetails from "./Components/blogdetails/Blog";
import BlogPages from "./Components/BlogPages/BlogPage";
import Contact from "./Components/contact/Contacts";
import FooterSection from "./Components/footerSection/Footer";
import Carousel from "./Components/Carousel/Carousel";
import Forms from "./Components/Forms/Form";
import Home from "./Components/Home/Home";
import HowitWorks from "./Components/HowitWorks/HowitWorks";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/NavbarDropdownItem";
import OurPartners from "./Components/ourPartners/OurPartners";
import Partners from "./Components/Partners/Partners";
import PrivacyPolicy from "./Components/privacyPolicy/PrivacyPolicy";
import Responsive from "./Components/Responsive/ResponsiveView";
import ServicesInfo from "./Components/servicesInfo/ServicesInfo";
import ServingDestiny from "./Components/servicingDestiny/ServicingDestiny";
import ShipForwarding from "./Components/ShipForwarding/ShipForwarding";
import UserProfileDashboard from "./Components/UserProfileDashboard/UserProfileDashboard";

import renderer from "react-test-renderer";

it("it Should Match Contact Page snapshot", () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match FooterSection Page snapshot", () => {
  const tree = renderer.create(<FooterSection />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Blog Page snapshot", () => {
  const tree = renderer.create(<BlogPages />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Carousel Page snapshot", () => {
  const tree = renderer.create(<Carousel />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match BlogDetails Page snapshot", () => {
  const tree = renderer.create(<Blogdetails />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Forms Page snapshot", () => {
  const tree = renderer.create(<Forms />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Home Page snapshot", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Howit Works Page snapshot", () => {
  const tree = renderer.create(<HowitWorks />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Landing Page snapshot", () => {
  const tree = renderer.create(<LandingPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Navbar Page snapshot", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match OurOartners Page snapshot", () => {
  const tree = renderer.create(<OurPartners />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Partners Page snapshot", () => {
  const tree = renderer.create(<Partners />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Privacy Polict Page snapshot", () => {
  const tree = renderer.create(<PrivacyPolicy />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Responsive Page snapshot", () => {
  const tree = renderer.create(<Responsive />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match ServicesInfo Page snapshot", () => {
  const tree = renderer.create(<ServicesInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match Serving Destiny Page snapshot", () => {
  const tree = renderer.create(<ServingDestiny />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match ShipForwarding Page snapshot", () => {
  const tree = renderer.create(<ShipForwarding />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("it Should Match UserProfile Dashboard Page snapshot", () => {
  const tree = renderer.create(<UserProfileDashboard />).toJSON();
  expect(tree).toMatchSnapshot();
});
