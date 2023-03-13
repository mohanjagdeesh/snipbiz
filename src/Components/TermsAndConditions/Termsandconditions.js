import { useMediaQuery } from "react-responsive";
import "./TermsAndConditions.scss";
import { TCParaOne,TCParaTwo,TCParaThree,TCParaFive,TCParaSix,TCParaSeven,TCParaEight, TCParaNine,TCParaTen,TCParaEleven,TCParaTwleve,TCParaThirteen,TCParaSixteen,TCParaSeventeen,TCParaEighteen,TCParaNineteen,TCParaTwenty,TCParaTwentyOne,TCParaTwentyTwo,TCParaTwentyThree,TCParaTwentyFour,TCParaTwentyFive,TCParaTwentySix,TCParaTwentySeven, TCParaFiftteen, TCParaFourteen} from "../Constants/TermsAndConditions";

const TermsAndConditions = () => {

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="termsAndConditions-main">
      <div className={isTabletOrMobile ?"tnc-head-phone" :"termsandconditions-heading"}>
        <h1>Terms And Conditions</h1>
      </div>
      <div className={isTabletOrMobile ? "phone" : "termsandconditiondata"}>

        
        <ol>
          <li>
          Updates to the TermsAndConditions
            <ol>
          
              <li>
                {TCParaOne}
              </li>
              <li>
                {TCParaTwo}
                </li>
                <li>
                <a href="https://www.google.com "> Trading Terms</a>. You should
                also read our
                <a href="https://www.google.com"> Privacy Policy.</a>
              </li>
              <li>
                {TCParaThree}
               
              </li>
            </ol>
          </li>

          <li>
          Agreement:
            <ol>
              <li>
                {TCParaFive}
              </li>
              <li>
               {TCParaSix}
              </li>
              <li>
                {TCParaSeven}
              </li>
              <li>
                {TCParaEight}
              </li>
            </ol>
          </li>

          <li>
          Splice Packages Terms of Service:
            <ol>
              <li>
                {TCParaNine}
              </li>
            </ol>
          </li>

          <li>
          Terms Of Account:
            <ol>
              <li>
                {TCParaTen}
              </li>
              <li>
                {TCParaEleven}
              </li>
              <li>
                {TCParaTwleve}
              </li>
            </ol>
          </li>

          <li>
          Pricing:
            <ol>
              <li>
                {TCParaThirteen}
              </li>
              <li>
                {TCParaFourteen}
              </li>
              <li>
                {TCParaFiftteen}
              </li>
            </ol>
          </li>

          <li>
          Funding Your Account
            <ol>
              <li>
                {TCParaSixteen}
              </li>
              <li>
                {TCParaSeventeen}
              </li>
            </ol>
          </li>

          <li>
          Package Refusal/Return to Sender:
            <ol>
              <li>
                {TCParaEighteen}
              </li>
              <li>
                {TCParaNineteen}
              </li>
              <li>
               {TCParaTwenty}
              </li>
              <li>
                {TCParaTwentyOne}
              </li>
            </ol>
          </li>

          <li>
          Performance of services:
            <ol>
              <li>
                {TCParaTwentyTwo}
              </li>
              <li>
                {TCParaTwentyThree}
              </li>
              <li>
                {TCParaTwentyFour}
              </li>
              <li>
                {TCParaTwentyFive}
              </li>
            </ol>
          </li>
          <li>
            Updates
            <ol>
              <li>
               {TCParaTwentySix}
              </li>
            
            </ol>
          </li>
        </ol>
        <p>{TCParaTwentySeven}</p>
      </div>
    </div>
  );
};
export default TermsAndConditions;