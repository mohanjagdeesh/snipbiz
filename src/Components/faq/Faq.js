import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiSearch } from "react-icons/fi";
import {
  AccordionGeneral,
  AccordionPopular,
  AccordionDelivery,
  AccordionCustom,
  AccordionPayments,
  AccordionLogin,
  AccordionCourier,
  AccordionForwardShipping,
  AccordionOther,
  AccordionDeliver,
} from "./accordion/AllAccordions";
import { v4 as uuidv4 } from "uuid";
import delivery from "./carbon_delivery.png";
import forwardShipping from "./Group.png";
import other from "./image 16.png";
import general from "./image 17.png";
import custom from "./Rectangle 633.png";
import courier from "./Rectangle 636.png";
import payments from "./Vector (5).png";
import Login from "./Vector (6).png";
import "./Faq.css";

/*Frequently Asked Questions Services List*/

const servicesFaq = [
  {
    id: uuidv4(),
    serviceName: "Courier Service",
  },
  {
    id: uuidv4(),
    serviceName: "Forward Shipping",
  },
  {
    id: uuidv4(),
    serviceName: "US Debit Card",
  },
];

const courierServiceFaqList = [
  {
    id: uuidv4(),
    nameOfService: "General",
    serviceImage: general,
  },
  {
    id: uuidv4(),
    nameOfService: "Delivery",
    serviceImage: delivery,
  },
  {
    id: uuidv4(),
    nameOfService: "Custom",
    serviceImage: custom,
  },
  {
    id: uuidv4(),
    nameOfService: "Payments",
    serviceImage: payments,
  },
  {
    id: uuidv4(),
    nameOfService: "Login",
    serviceImage: Login,
  },
  {
    id: uuidv4(),
    nameOfService: "Courier",
    serviceImage: courier,
  },
  {
    id: uuidv4(),
    nameOfService: "Forward Shipping",
    serviceImage: forwardShipping,
  },
  {
    id: uuidv4(),
    nameOfService: "Other",
    serviceImage: other,
  },
];

const forwardShippingFaqList = [
  {
    id: uuidv4(),
    nameOfService: "General",
    serviceImage: "1",
  },
  {
    id: uuidv4(),
    nameOfService: "Delivery",
    serviceImage: "2",
  },
  {
    id: uuidv4(),
    nameOfService: "Custom",
    serviceImage: "3",
  },
  {
    id: uuidv4(),
    nameOfService: "Payments",
    serviceImage: "4",
  },
  {
    id: uuidv4(),
    nameOfService: "Login",
    serviceImage: "5",
  },
  {
    id: uuidv4(),
    nameOfService: "Courier",
    serviceImage: "6",
  },
  {
    id: uuidv4(),
    nameOfService: "Forward Shipping",
    serviceImage: "7",
  },
  {
    id: uuidv4(),
    nameOfService: "Other",
    serviceImage: "8",
  },
];

const uSDebitCardFaqList = [
  {
    id: uuidv4(),
    nameOfService: "General",
    serviceImage: "A",
  },
  {
    id: uuidv4(),
    nameOfService: "Delivery",
    serviceImage: "B",
  },
  {
    id: uuidv4(),
    nameOfService: "Custom",
    serviceImage: "C",
  },
  {
    id: uuidv4(),
    nameOfService: "Payments",
    serviceImage: "D",
  },
  {
    id: uuidv4(),
    nameOfService: "Login",
    serviceImage: "E",
  },
  {
    id: uuidv4(),
    nameOfService: "Courier",
    serviceImage: "F",
  },
  {
    id: uuidv4(),
    nameOfService: "Forward Shipping",
    serviceImage: "G",
  },
  {
    id: uuidv4(),
    nameOfService: "Other",
    serviceImage: "H",
  },
];

const Faq = () => {
  const [values, setValues] = useState({
    activeServiceFaq: servicesFaq[0].serviceName,
    activeCourierFaq: "",
    activeShipForwardingFaq: "",
    activeUSDebitCardFaq: "",
    searchScreen: true,
    searchKeyword: "",
  });

  const formik = useFormik({
    initialValues: {
      chat: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      chat: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.number().positive().integer().required(),
      message: Yup.string().required(),
    }),
    onSubmit: (values, submitProps) => {
      submitProps.resetForm();
    },
  });

  const renderCourierFaqList = () => {
    const renderCourierServiceFaqList = () => {
      switch (values.activeCourierFaq) {
        case "General":
          return <AccordionGeneral />;
        case "Delivery":
          return <AccordionDelivery />;
        case "Custom":
          return <AccordionCustom />;
        case "Payments":
          return <AccordionPayments />;
        case "Login":
          return <AccordionLogin />;
        case "Courier":
          return <AccordionCourier />;
        case "Forward Shipping":
          return <AccordionForwardShipping />;
        case "Other":
          return <AccordionOther />;
        default:
          return null;
      }
    };
    return (
      <div className="faq-services-container">
        <ul className="faq-services-list">
          {courierServiceFaqList.map((eachOf) => {
            return (
              <li
                key={eachOf.id}
                className={`faq-service-item ${
                  eachOf.nameOfService === values.activeCourierFaq
                    ? "active-faq-service-container"
                    : ""
                }`}
              >
                <button
                  className="faq-service-item-button"
                  type="button"
                  onClick={() =>
                    setValues({
                      ...values,
                      activeCourierFaq: eachOf.nameOfService,
                    })
                  }
                >
                  <img
                    className="faq-service-img"
                    src={eachOf.serviceImage}
                    alt={eachOf.nameOfService}
                  />
                  <p className="faq-service-text">{eachOf.nameOfService}</p>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="faq-accordion">{renderCourierServiceFaqList()}</div>
      </div>
    );
  };

  const renderForwardShippingFaqList = () => {
    const renderForwardShippingServiceFaqList = () => {
      switch (values.activeShipForwardingFaq) {
        case "General":
          return <AccordionGeneral />;
        case "Delivery":
          return <AccordionDelivery />;
        case "Custom":
          return <AccordionCustom />;
        case "Payments":
          return <AccordionPayments />;
        case "Login":
          return <AccordionLogin />;
        case "Courier":
          return <AccordionCourier />;
        case "Forward Shipping":
          return <AccordionForwardShipping />;
        case "Other":
          return <AccordionOther />;
        default:
          return null;
      }
    };
    return (
      <div className="faq-services-container">
        <ul className="faq-services-list">
          {forwardShippingFaqList.map((everyOne) => {
            return (
              <li
                key={everyOne.id}
                className={`faq-service-item ${
                  everyOne.nameOfService === values.activeShipForwardingFaq
                    ? "active-faq-service-container"
                    : ""
                }`}
              >
                <button
                  className="faq-service-item-button"
                  type="button"
                  onClick={() =>
                    setValues({
                      ...values,
                      activeShipForwardingFaq: everyOne.nameOfService,
                    })
                  }
                >
                  <h1>{everyOne.serviceImage}</h1>
                  <p className="faq-service-text">{everyOne.nameOfService}</p>
                </button>
              </li>
            );
          })}
        </ul>
        {renderForwardShippingServiceFaqList()}
      </div>
    );
  };

  const renderUSDebitCardFaqList = () => {
    const renderUSDebitCardServiceFaqList = () => {
      switch (values.activeUSDebitCardFaq) {
        case "General":
          return <AccordionGeneral />;
        case "Delivery":
          return <AccordionDelivery />;
        case "Custom":
          return <AccordionCustom />;
        case "Payments":
          return <AccordionPayments />;
        case "Login":
          return <AccordionLogin />;
        case "Courier":
          return <AccordionCourier />;
        case "Forward Shipping":
          return <AccordionForwardShipping />;
        case "Other":
          return <AccordionOther />;
        default:
          return null;
      }
    };
    return (
      <div className="faq-services-container">
        <ul className="faq-services-list">
          {uSDebitCardFaqList.map((eachOne) => {
            return (
              <li
                key={eachOne.id}
                className={`faq-service-item ${
                  eachOne.nameOfService === values.activeUSDebitCardFaq
                    ? "active-faq-service-container"
                    : ""
                }`}
              >
                <button
                  className="faq-service-item-button"
                  type="button"
                  onClick={() =>
                    setValues({
                      ...values,
                      activeUSDebitCardFaq: eachOne.nameOfService,
                    })
                  }
                >
                  <h1>{eachOne.serviceImage}</h1>
                  <p className="faq-service-text">{eachOne.nameOfService}</p>
                </button>
              </li>
            );
          })}
        </ul>
        {renderUSDebitCardServiceFaqList()}
      </div>
    );
  };

  const renderServicesList = () => {
    switch (values.activeServiceFaq) {
      case "Courier Service":
        return renderCourierFaqList();
      case "Forward Shipping":
        return renderForwardShippingFaqList();
      case "US Debit Card":
        return renderUSDebitCardFaqList();
      default:
        return null;
    }
  };

  const renderSearchKeywordFaqList = () => {
    switch (values.searchKeyword) {
      case "Deliver":
        return <AccordionDeliver />;
      case "General":
        return <AccordionGeneral />;
      default:
        return "No Such Faq's";
    }
  };
  const gettingSearchKeyWord = (event) => {
    setValues({ ...values, searchKeyword: event.target.value });
  };

  return (
    <div className="faq-main-cont">
      <div className="faq-head-cont">
        <h1 className="faq-head">Frequently Asked Questions</h1>
        <div className="faq-search">
          <input
            onChange={gettingSearchKeyWord}
            className="search-text"
            placeholder="Serach"
            type="search"
            value={values.searchKeyword}
          />
          <FiSearch
            onClick={() =>
              setValues({
                ...values,
                searchScreen: !values.searchScreen,
              })
            }
          />
        </div>
      </div>
      {values.searchScreen ? (
        <div>
          <div className="faq-services-main-cont">
            <div className="faq-services-sub-cont">
              <ul className="faq-services-names-cont">
                {servicesFaq.map((eachService) => {
                  return (
                    <li className="faq-service-name" key={eachService.id}>
                      <button
                        onClick={() =>
                          setValues({
                            ...values,
                            activeServiceFaq: eachService.serviceName,
                          })
                        }
                        className={`faq-service-button ${
                          values.activeServiceFaq === eachService.serviceName
                            ? "faq-active-button"
                            : ""
                        }`}
                        type="button"
                      >
                        {eachService.serviceName}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {renderServicesList()}
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="faq-contact-main-cont"
            >
              <div className="faq-contact-cont">
                <div className="faq-contact-img-cont">
                  <img
                    className="faq-contact-img"
                    src="https://res.cloudinary.com/duapyyftc/image/upload/v1676631223/Vector_7_w0obq0.png"
                    alt="chat"
                  />
                </div>
                <input
                  placeholder="Chat"
                  className="faq-contact-text"
                  type="Text"
                  name="chat"
                  value={formik.values.chat}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="faq-contact-cont">
                <div className="faq-contact-img-cont">
                  <img
                    className="faq-contact-img"
                    src="https://res.cloudinary.com/duapyyftc/image/upload/v1676631233/Vector_8_eayawc.png"
                    alt="email"
                  />
                </div>
                <input
                  placeholder="Email"
                  className="faq-contact-text"
                  type="Text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="faq-contact-cont">
                <div className="faq-contact-img-cont">
                  <img
                    className="faq-contact-img"
                    src="https://res.cloudinary.com/duapyyftc/image/upload/v1676631236/Vector_9_nwfekf.png"
                    alt="phone"
                  />
                </div>
                <input
                  placeholder="Phone"
                  className="faq-contact-text"
                  type="Text"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="faq-help-cont">
                <p className="faq-help-text">Need More Help?</p>
                <p className="faq-submit-text">Submit a Question</p>
                <textarea
                  placeholder="Enter Text Here"
                  cols="27"
                  rows="6"
                  className="faq-text-area"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                <br />
                <button type="submit" className="faq-submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="faq-questions-cont">
            <AccordionPopular />
          </div>
        </div>
      ) : (
        <div className="faq-search-keyword-container">
          <h2 className="faq-search-keyword">
            Your search keyword is ‘
            <span className="faq-span-keyword">{values.searchKeyword}</span>’
          </h2>
          <hr />
          {renderSearchKeywordFaqList()}
        </div>
      )}
    </div>
  );
};

export default Faq;
