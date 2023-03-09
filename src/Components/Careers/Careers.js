import { useState } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

import * as Yup from "yup";

import "./Careers.css";

const isMobile = false;

const listOfCareers = [
  {
    id: uuidv4(),
    jobType: "Full Time",
    jobRole: "Fullstack Developer",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
  },
  {
    id: uuidv4(),
    jobType: "Full Time",
    jobRole: "Business Manager",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
  },
  {
    id: uuidv4(),
    jobType: "Full Time",
    jobRole: "ReactJs Developer",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
  },
  {
    id: uuidv4(),
    jobType: "Full Time",
    jobRole: "NodeJs Developer",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
  },
  {
    id: uuidv4(),
    jobType: "Full Time",
    jobRole: "US IT Recruiter",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
  },
  {
    id: uuidv4(),
    jobType: "Full Time",
    jobRole: ".Net Developer",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
  },
  {
    id: uuidv4(),
    jobType: "Full Time",
    jobRole: "Frontend Developer",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
  },
  {
    id: uuidv4(),
    jobType: "Full Time",
    jobRole: "Backend Developer",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
  },
  {
    id: uuidv4(),
    jobType: "Full Time",
    jobRole: "Business Analyst",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
  },
];

const Careers = () => {
  const [values, setValues] = useState({
    booleanValue: false,
    applyingJobFor: "",
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      emailAddress: "",
      fileUpload: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      mobileNumber: Yup.number().positive().integer().required(),
      emailAddress: Yup.string().email().required(),
    }),
    onSubmit: (values, submitProps) => {
      submitProps.resetForm();
    },
  });

  const careersList = () => (
    <ul className={isMobile ? "careers-list-mob" : "careers-list-web"}>
      {listOfCareers.map((eachCareer) => {
        return (
          <li
            className={
              isMobile ? "career-item-cont-mob" : "career-item-cont-web"
            }
          >
            <div>
              <p className="type">{eachCareer.jobType}</p>
              <p className="role">{eachCareer.jobRole}</p>
            </div>
            <div>
              <p className="type">Location</p>
              <p className="city">
                {eachCareer.city},{eachCareer.state},{eachCareer.country}
              </p>
            </div>
            <button
              onClick={() =>
                setValues({
                  ...values,
                  booleanValue: !values.booleanValue,
                  applyingJobFor: eachCareer.jobRole,
                })
              }
              className="apply-button"
            >
              Apply Now
            </button>
          </li>
        );
      })}
    </ul>
  );

  const careersContainer = () => (
    <div className="careers-cont">
      <h2 className={isMobile ? "we-hire-mob" : "we-hire-web"}>
        GREAT PEOPLE DESERVE GREAT BENEFITS
      </h2>
      <p className={isMobile ? "we-hire-para-mob" : "we-hire-para-web"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className={isMobile ? "tfg-list-mob" : "tfg-list-web"}>
        <div className={isMobile ? "tfg-cont-mob" : "tfg-cont-web"}>
          <img
            className={isMobile ? "tfg-img-mob" : "tfg-img-web"}
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676452432/Vector_1_lg6ygt.png"
            alt="teamwork"
          />
          <h3 className={isMobile ? "tfg-head-mob" : "tfg-head-web"}>
            TEAM WORK
          </h3>
          <p className={isMobile ? "tfg-para-mob" : "tfg-para-web"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={isMobile ? "tfg-cont-mob" : "tfg-cont-web"}>
          <img
            className={isMobile ? "tfg-img-mob" : "tfg-img-web"}
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676457126/Vector_2_v3zvhj.png"
            alt="teamwork"
          />
          <h3 className={isMobile ? "tfg-head-mob" : "tfg-head-web"}>
            FLEXIBLE
          </h3>
          <p className={isMobile ? "tfg-para-mob" : "tfg-para-web"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={isMobile ? "tfg-cont-mob" : "tfg-cont-web"}>
          <img
            className={isMobile ? "tfg-img-mob" : "tfg-img-web"}
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676457121/Vector_3_dbhlxw.png"
            alt="teamwork"
          />
          <h3 className={isMobile ? "tfg-head-mob" : "tfg-head-web"}>GROW</h3>
          <p className={isMobile ? "tfg-para-mob" : "tfg-para-web"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <h2 className={isMobile ? "we-hire-mob" : "we-hire-web"}>We’re Hiring</h2>
      <p className={isMobile ? "we-hire-para-mob" : "we-hire-para-web"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
  );

  const joinWithUs = () => (
    <div className={isMobile ? "join-with-us-mob" : "join-with-us-web"}>
      <img
        className={isMobile ? "direction-img-mob" : "direction-img-web"}
        src="https://res.cloudinary.com/duapyyftc/image/upload/v1676460393/Vector_4_ozhmqr.png"
        alt="map"
      />
      <div>
        <h1 className={isMobile ? "join-us-head-mob" : "join-us-head"}>
          Let’s join with us
        </h1>
        <p className={isMobile ? "join-us-para-mob" : "join-us-para"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <button className="join-now-button">Join Now</button>
    </div>
  );

  return (
    <div className="car-main-container">
      <div className={isMobile ? "car-heading-mob" : "car-heading-web"}>
        <h1 className={isMobile ? "car-head-mob" : "car-heading"}>Careers</h1>
      </div>
      {values.booleanValue ? (
        <div>
          <h1 className={isMobile ? "we-hire-mob" : "we-hire-web"}>
            Applying for {values.applyingJobFor}
          </h1>
          <p className={isMobile ? "we-hire-para-mob" : "we-hire-para-web"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="job-application-container">
            <form onSubmit={formik.handleSubmit}>
              <div className="inputs-container">
                <div className="career-input-container">
                  <label className="input-label-text" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    placeholder="Enter first name"
                    className="input-element"
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  <p className="error-message">
                    {formik.touched.firstName && formik.errors.firstName
                      ? "*Required"
                      : ""}
                  </p>
                </div>
                <div className="career-input-container">
                  <label className="input-label-text" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    placeholder="Enter last name"
                    className="input-element"
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  <p className="error-message">
                    {formik.touched.lastName && formik.errors.lastName
                      ? "*Required"
                      : ""}
                  </p>
                </div>
              </div>
              <div className="inputs-container">
                <div className="career-input-container">
                  <label className="input-label-text" htmlFor="mobieNumber">
                    Mobile
                  </label>
                  <input
                    placeholder="Enter mobile number"
                    className="input-element"
                    id="mobieNumber"
                    type="text"
                    name="mobileNumber"
                    value={formik.values.mobileNumber}
                    onChange={formik.handleChange}
                  />
                  <p className="error-message">
                    {formik.touched.mobileNumber && formik.errors.mobileNumber
                      ? "*Required or Must be a Number"
                      : ""}
                  </p>
                </div>
                <div className="career-input-container">
                  <label className="input-label-text" htmlFor="emailAddress">
                    Email Address
                  </label>
                  <input
                    placeholder="Enter email address"
                    className="input-element"
                    id="emailAddress"
                    type="text"
                    name="emailAddress"
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                  />
                  <p className="error-message">
                    {formik.touched.emailAddress && formik.errors.emailAddress
                      ? "*Required"
                      : ""}
                  </p>
                </div>
              </div>
              <div className="career-input-container">
                <label className="input-label-text" htmlFor="uplaodFile">
                  Upload Resume
                </label>
                <input
                  className="upload-file-input"
                  id="uploadFile"
                  type="file"
                  name="fileUpload"
                  value={formik.values.fileUpload}
                  onChange={formik.handleChange}
                />
              </div>
              <button className="apply-now-button" type="submit">
                Apply Now
              </button>
            </form>
          </div>

          {joinWithUs()}
        </div>
      ) : (
        <div>
          {careersContainer()}
          {careersList()}
          {joinWithUs()}
        </div>
      )}
    </div>
  );
};

export default Careers;
