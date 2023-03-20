import { useMediaQuery } from "react-responsive";
import "./TermsAndConditions.scss";
import {
  TCParaOne,
  TCParaTwo,
  TCParaThree,
  TCParaFive,
  TCParaSix,
  TCParaSeven,
  TCParaEight,
  TCParaNine,
  TCParaTen,
  TCParaEleven,
  TCParaTwleve,
  TCParaThirteen,
  TCParaSixteen,
  TCParaSeventeen,
  TCParaEighteen,
  TCParaNineteen,
  TCParaTwenty,
  TCParaTwentyOne,
  TCParaTwentyTwo,
  TCParaTwentyThree,
  TCParaTwentyFour,
  TCParaTwentyFive,
  TCParaTwentySix,
  TCParaTwentySeven,
  TCParaFiftteen,
  TCParaFourteen,
} from "../Constants/TermsAndConditions";

const TermsAndConditions = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      className="termsAndConditions-main"
      data-testid="terms-and-conditions-main"
    >
      <div
        className={
          isTabletOrMobile ? "tnc-head-phone" : "termsandconditions-heading"
        }
        data-testid="terms-and-conditions-heading-container"
      >
        <h1 className="tc-heading" data-testid="terms-and-conditions-heading">
          Terms And Conditions
        </h1>
      </div>
      <div
        className={isTabletOrMobile ? "phone" : "termsandconditiondata"}
        data-testid="terms-and-conditions-data-container"
      >
        <ol data-testid="terms-and-conditions-list">
          <li data-testid="terms-and-conditions-section">
            Updates to the TermsAndConditions
            <ol data-testid="terms-and-conditions-section-1-list">
              <li data-testid="terms-and-conditions-section-1-item-1">
                {TCParaOne}
              </li>
              <li data-testid="terms-and-conditions-section-1-item-2">
                {TCParaTwo}
              </li>
              <li data-testid="terms-and-conditions-section-1-item-3">
                <a
                  href="https://www.google.com"
                  data-testid="terms-and-conditions-section-1-link-1"
                >
                  Trading Terms
                </a>
                . You should also read our{" "}
                <a
                  href="https://www.google.com"
                  data-testid="terms-and-conditions-section-1-link-2"
                >
                  Privacy Policy.
                </a>
              </li>
              <li data-testid="terms-and-conditions-section-1-item-4">
                {TCParaThree}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-2">
            Agreement:
            <ol data-testid="terms-and-conditions-section-2-list">
              <li data-testid="terms-and-conditions-section-2-item-1">
                {TCParaFive}
              </li>
              <li data-testid="terms-and-conditions-section-2-item-2">
                {TCParaSix}
              </li>
              <li data-testid="terms-and-conditions-section-2-item-3">
                {TCParaSeven}
              </li>
              <li data-testid="terms-and-conditions-section-2-item-4">
                {TCParaEight}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-3">
            Splice Packages Terms of Service:
            <ol data-testid="terms-and-conditions-section-3-list">
              <li data-testid="terms-and-conditions-section-3-item-1">
                {TCParaNine}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-4">
            Terms Of Account:
            <ol data-testid="terms-and-conditions-section-4-list">
              <li data-testid="terms-and-conditions-section-4-item-1">
                {TCParaTen}
              </li>
              <li data-testid="terms-and-conditions-section-4-item-2">
                {TCParaEleven}
              </li>
              <li data-testid="terms-and-conditions-section-4-item-3">
                {TCParaTwleve}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-5">
            Pricing:
            <ol data-testid="terms-and-conditions-section-5-list">
              <li data-testid="terms-and-conditions-section-5-item-1">
                {TCParaThirteen}
              </li>
              <li data-testid="terms-and-conditions-section-5-item-2">
                {TCParaFourteen}
              </li>
              <li data-testid="terms-and-conditions-section-5-item-3">
                {TCParaFiftteen}
              </li>
              <li data-testid="terms-and-conditions-section-5-item-4">
                {TCParaSixteen}
              </li>
              <li data-testid="terms-and-conditions-section-5-item-5">
                {TCParaSeventeen}
              </li>
              <li data-testid="terms-and-conditions-section-5-item-6">
                {TCParaEighteen}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-6">
            Termination:
            <ol data-testid="terms-and-conditions-section-6-list">
              <li data-testid="terms-and-conditions-section-6-item-1">
                {TCParaNineteen}
              </li>
              <li data-testid="terms-and-conditions-section-6-item-2">
                {TCParaTwenty}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-7">
            Warranty Disclaimer:
            <ol data-testid="terms-and-conditions-section-7-list">
              <li data-testid="terms-and-conditions-section-7-item-1">
                {TCParaTwentyOne}
              </li>
              <li data-testid="terms-and-conditions-section-7-item-2">
                {TCParaTwentyTwo}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-8">
            Limitation of Liability:
            <ol data-testid="terms-and-conditions-section-8-list">
              <li data-testid="terms-and-conditions-section-8-item-1">
                {TCParaTwentyThree}
              </li>
              <li data-testid="terms-and-conditions-section-8-item-2">
                {TCParaTwentyFour}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-9">
            Indemnification:
            <ol data-testid="terms-and-conditions-section-9-list">
              <li data-testid="terms-and-conditions-section-9-item-1">
                {TCParaTwentyFive}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-10">
            Governing Law and Jurisdiction:
            <ol data-testid="terms-and-conditions-section-10-list">
              <li data-testid="terms-and-conditions-section-10-item-1">
                {TCParaTwentySix}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-11">
            Entire Agreement:
            <ol data-testid="terms-and-conditions-section-11-list">
              <li data-testid="terms-and-conditions-section-11-item-1">
                {TCParaTwentySeven}
              </li>
            </ol>
          </li>
          <li data-testid="terms-and-conditions-section-12">
            Contact Us:
            <ol data-testid="terms-and-conditions-section-12-list">
              <li data-testid="terms-and-conditions-section-12-item-1">
                {TCParaTwentySeven}
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};
export default TermsAndConditions;
