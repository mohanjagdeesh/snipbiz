import "./PrivacyPolicy.scss";
import { RxDotFilled } from "react-icons/rx";
import { useGlobalStore } from "../../store/useGlobalStore";

import {
  access,
  disclosureOne,
  disclosureTwo,
  information,
  obligations,
  ParaEight,
  ParaEleven,
  ParaFive,
  ParaFour,
  ParaFourteen,
  ParaNine,
  ParaOne,
  ParaSeven,
  ParaSix,
  ParaTen,
  ParaThirteen,
  ParaThree,
  ParaTwleve,
  ParaTwo,
  permit,
  rightOne,
  rightThree,
  rightTwo,
} from "../Constants/PrivacyPolicy";

const PrivacyPolicy = () => {
  const isMobile = useGlobalStore((state) => state.isMobile);
  return (
    <div className="privacyPolicy-main">
      <div className={isMobile ? "privacyPolicy-heading-phn":"privacyPolicy-heading"}>
        <h1>Privacy Policy</h1>
      </div>

      <div className="privacyPolicy-data" data-testid="privacy-policy">
        <ol>
          <li data-testid="policy-item-1">
            General
            <ol>
              <li>{ParaOne}</li>
            </ol>
          </li>
          <li data-testid="policy-item-2">
            Information about us
            <ol>
              <li>{ParaTwo}</li>
            </ol>
          </li>

          <li data-testid="policy-item-3">
            Information we may collect from you
            <ol>
              <li>{ParaThree}</li>
            </ol>
          </li>

          <li data-testid="policy-item-4">
            IP addresses and cookies
            <ol>
              <li>{ParaFour}</li>
              <li>{ParaFive}</li>
              <li>{ParaSix}</li>
            </ol>
          </li>
          <li data-testid="policy-item-5">
            How we process and store your information
            <ol>
              <li>{ParaSeven}</li>
              <li>{ParaEight}</li>
              <li>{ParaNine}</li>
              <li>{ParaTen}</li>
              <li>{ParaEleven}</li>
              <li>{ParaTwleve}</li>
              <li>{ParaThirteen}</li>
            </ol>
          </li>
          <li data-testid="policy-item-6">
            Transfers of your Personal Information Overseas
            <ol>
              <li>{ParaFourteen}</li>
            </ol>
          </li>
          <li data-testid="policy-item-7">
            Uses made of your information
            <ol>
              <li>{obligations}</li>
              <li>{information}</li>
              <li>{permit}</li>
            </ol>
          </li>
          <li data-testid="policy-item-8">
            Disclosure of your information
            <ol>
              <li>{disclosureOne}</li>
              <li>{disclosureTwo}</li>
            </ol>
          </li>
          <li data-testid="policy-item-9">
            Your rights
            <ol>
              <li>{rightOne}</li>
              <li>{rightTwo}</li>
              <li>{rightThree}</li>
            </ol>
          </li>
          <li data-testid="policy-item-10">
            Access to your information
            <ol>
              <li>{access}</li>
            </ol>
          </li>
          <li data-testid="policy-item-11">
            How to contact us
            <ol>
              <li className=".privacy-points" data-testid="contact-us">
                If you have any questions, comments or requests regarding this
                privacy policy, please feel free to contact us in any of the
                following ways:
                <p>
                  <RxDotFilled />
                  by email at info@website.com;
                </p>
                <p>
                  <RxDotFilled />
                  by telephone on +44 (0) 1995 606060 between the hours of 9:00am
                  and 5:30pm; or
                </p>
                <p>
                  <RxDotFilled />
                  by writing to us at website Ltd., York House, Green Lane West,
                  Preston, PR3 1NJ.
                </p>
              </li>
            </ol>
          </li>
          <li data-testid="policy-item-12">
            Updates
            <ol>
              <li>
                We reserve the right to change this privacy policy from time to
                time by changing it on the Site.
              </li>
            </ol>
          </li>
        </ol>
        <p>This privacy policy was last updated on 14th September 2020.</p>
      </div>
    </div>
)};
export default PrivacyPolicy;