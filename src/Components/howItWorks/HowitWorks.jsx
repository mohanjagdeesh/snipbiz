import "./HowitWorks.scss";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import React, { useState } from "react";
import { useGlobalStore } from "../../store/useGlobalStore";
import { HiWPara, Acc_Data } from "../Constants/HowItWorks";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import video from "./video.png";
import play from "./play.png";
import process from "./process.png";

const navigationList = [
  {
    id: 1,
    tabName: "Courier Service",
  },
  {
    id: 2,
    tabName: "Forward Shipping",
  },
  {
    id: 3,
    tabName: "US Debit Cards",
  },
];

const tabData = () => (
  <div className="howitworks-video">
    <img className="video-pic" src={video} alt="video-play" />
    <img className="play-btn" src={play} alt="play-btn" />
  </div>
);
const HowitWorks = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const isMobile = useGlobalStore((state) => state.isMobile);
  const [activeTab, setActiveTab] = useState("");
  const renderTabInformation = () => {
    switch (activeTab) {
      case "Courier Service":
        return tabData();
      case "Forward Shipping":
        return (
          <div className="howitworks-data" data-testid="how-it-works-data">
            <img
              id={isMobile ? "process-direction-phn" : "process-direction"}
              src={process}
              alt="process-direction"
            />

            <div
              className={
                isMobile ? "howitworks-process-mobile" : "howitworks-process"
              }
              data-testid="howitworks-process-1"
            >
              <div
                className={
                  isMobile ? "process-data-info-phn" : "process-data-info"
                }
              >
                <h3 data-testid="step-title-1">Signup & get USA Address</h3>
                <p data-testid="step-description-1">{HiWPara}</p>
              </div>
              <div
                className={isMobile ? "process-num-phn" : "process-number"}
                data-testid="step-number-1"
              >
                1
              </div>
              <img src={img1} alt="howitworks-img" data-testid="step-image-1" />
            </div>
            <div
              className={
                isMobile ? "howitworks-process-mobile" : "howitworks-process"
              }
              data-testid="howitworks-process-2"
            >
              <img src={img2} alt="howitworks-img" data-testid="step-image-2" />
              <div
                className={isMobile ? "process-num-phn" : "process-number"}
                data-testid="step-number-2"
              >
                2
              </div>
              <div
                className={
                  isMobile ? "process-data-info-phn" : "process-data-info"
                }
                data-testid="step-info-2"
              >
                <h3 data-testid="step-title-2">
                  Shop Online & Ship to Our Ware House
                </h3>
                <p data-testid="step-description-2">{HiWPara}</p>
              </div>
            </div>
            <div
              className={
                isMobile ? "howitworks-process-mobile" : "howitworks-process"
              }
              data-testid="howitworks-process-3"
            >
              <div
                className={
                  isMobile ? "process-data-info-phn" : "process-data-info"
                }
                data-testid="step-info-3"
              >
                <h3 data-testid="step-title-3">We Consolidate Your Packages</h3>
                <p data-testid="step-description-3">{HiWPara}</p>
              </div>
              <div
                className={isMobile ? "process-num-phn" : "process-number"}
                data-testid="step-number-3"
              >
                3
              </div>
              <img src={img3} alt="howitworks-img" data-testid="step-image-3" />
            </div>

            <div
              className={
                isMobile ? "howitworks-process-mobile" : "howitworks-process"
              }
              data-testid="howitworks-process-4"
            >
              <img src={img4} alt="howitworks-img" data-testid="step-image-4" />
              <div className={isMobile ? "process-num-phn" : "process-number"}>
                4
              </div>
              <div
                className={
                  isMobile ? "process-data-info-phn" : "process-data-info"
                }
              >
                <h3 data-testid="step-title-4">
                  We Ship Your Goods to Your Country
                </h3>
                <p data-testid="step-description-4">{HiWPara}</p>
              </div>
            </div>

            <div
              className={
                isMobile ? "howitworks-process-mobile" : "howitworks-process"
              }
              data-testid="howitworks-process-5"
            >
              <div
                className={
                  isMobile ? "process-data-info-phn" : "process-data-info"
                }
              >
                <h3 data-testid="step-title-5">We Deliver to Your Doorsteps</h3>
                <p data-testid="step-description-5">{HiWPara}</p>
              </div>
              <div className={isMobile ? "process-num-phn" : "process-number"}>
                5
              </div>
              <img src={img5} alt="howitworks-img" data-testid="step-image-5" />
            </div>

            <div
              className={
                isMobile ? "howitworks-process-mobile" : "howitworks-process"
              }
              data-testid="howitworks-process-6"
            >
              <img src={img6} alt="howitworks-img" data-testid="step-image-6" />
              <div className={isMobile ? "process-num-phn" : "process-number"}>
                6
              </div>
              <div
                className={
                  isMobile ? "process-data-info-phn" : "process-data-info"
                }
              >
                <h3 data-testid="step-title-6">CustomerSupport</h3>
                <p data-testid="step-description-6">{HiWPara}</p>
              </div>
            </div>
          </div>
        );
      case "US Debit Cards":
        return tabData();
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="howitworks-main" data-testid="howitworks-main">
        <div
          className={isMobile ? "howitworks-heading-phn" : "howitworks-heading"}
        >
          <h1 data-testid="howitworks-heading">How it Works</h1>
        </div>

        <nav className={isMobile ? "hiw-nav-mobile" : "hiw-nav"}>
          <ul>
            {navigationList.map((list) => {
              const tabActivated = list.tabName === activeTab;
              return (
                <li key={list.id}>
                  <button
                    className={`nav-btn ${
                      tabActivated ? "howitworks-active-tab" : "activeTab"
                    }`}
                    onClick={() => setActiveTab(list.tabName)}
                  >
                    {list.tabName}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div
        className="data-accord-container"
        data-testid="data-accord-container"
      >
        {renderTabInformation()}
        <div className="hiw-accordion" data-testid="hiw-accordion">
          <h3 data-testid="popular-questions-heading">Popular Questions</h3>
          <div>
            {Acc_Data.map((item, i) => (
              <div className="acc-container" data-testid="acc-container">
                <div
                  className="question-acc"
                  onClick={() => toggle(i)}
                  data-testid="question-acc"
                >
                  <h4 data-testid={`question-${i}`} key={item}>{item.question}</h4>
                  <span>
                    {" "}
                    {selected === i ? (
                      <FiChevronDown />
                    ) : (
                      <FiChevronRight />
                    )}{" "}
                  </span>
                </div>
                <p
                  className={selected === i ? "answer-acc show" : "answer-acc"}
                  data-testid={`answer-${i}` } key={item}
                >
                  {" "}
                  {item.answer}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowitWorks;
