import { useState } from "react";
import { useFormik } from "formik";
import "./UpPersonalInfo.scss"
import * as Yup from "yup";
// import Ellipse14 from "./Ellipse14";

//for mobile version
const isMobile = false;

const UpPersonalInfo = () => {
  const [addAnotherEmail, setAddAnotherEmail] = useState(false);
  const [addAnotherPhone, setAddAnotherPhone] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    gender: Yup.string().required(),
    age: Yup.number().required().positive().integer(),
    email: Yup.string().email().required(),
    secondEmail: Yup.string().email(),
    emailAddressType: Yup.string().required(),
    mobileNumber: Yup.number().required().positive().integer(),
    secondMobileNumber: Yup.number().positive().integer(),
    mobileNumberType: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      email: "",
      secondEmail: "",
      emailAddressType: "",
      mobileNumber: "",
      secondMobileNumber: "",
      mobileNumberType: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
    validationSchema,
  });

  const renderAnotherEmail = () => (
    <div className={isMobile ? "mobile-form-card" : "form-card"}>
    <div className={isMobile ? "mobile-input-card" : "input-card"}>
      <label className="label-element" htmlFor="secondEmail">
        Email Address
      </label>
      <br />
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="secondEmail"
        value={formik.values.secondEmail}
        id="secondEmail"
        className={isMobile ? "mobile-input-element" : "input-element"}
        type="secondEmail"
        placeholder="Enter Another Email"
        data-testid="second-email-input"
      />
      <p className="error-msg">
        {formik.touched.secondEmail && formik.errors.secondEmail
          ? "*Required"
          : ""}
      </p>
    </div>
    <p onClick={onClickRemoveEmail} className="remove-email-phone">
      {" "}
      - Remove
    </p>
  </div>
  
  );

  const renderAnotherPhone = () => (
    <div className={isMobile ? "mobile-form-card" : "form-card"} data-testid="secondMobileNumber-card">
    <div className={isMobile ? "mobile-input-card" : "input-card"}>
      <label className="label-element" htmlFor="secondMobileNumber">
        Mobile Number
      </label>
      <br />
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="secondMobileNumber"
        value={formik.values.secondMobileNumber}
        id="secondMobileNumber"
        className={isMobile ? "mobile-input-element" : "input-element"}
        type="number"
        placeholder="Enter Another Mobile Number"
        data-testid="secondMobileNumber-input"
      />
      <p className="error-msg" data-testid="secondMobileNumber-error">
        {formik.touched.secondMobileNumber && formik.errors.secondMobileNumber
          ? "*Required & Must be a Number"
          : ""}
      </p>
    </div>
    <p onClick={onClickRemovePhone} className="remove-email-phone" data-testid="secondMobileNumber-remove">
      {" "}
      - Remove
    </p>
  </div>
  
  );

  const onClickAddPhone = () => setAddAnotherPhone(true);

  const onClickRemovePhone = () => setAddAnotherPhone(false);

  const onClickAddEmail = () => setAddAnotherEmail(true);

  const onClickRemoveEmail = () => setAddAnotherEmail(false);

  const personalInfoCrad = () => {
    return (
      <form
  className="form-container"
  onSubmit={formik.handleSubmit}
  data-testid="form"
>
  <div
    className={
      isMobile ? "mobile-upload-img-container" : "upload-img-container"
    }
  >
    <div
      className={
        isMobile ? "mobile-upload-img-card" : "upload-img-card"
      }
      data-testid="upload-img-card"
    >
      <img
        // src={Ellipse14}
        className="upload-img"
        alt="Profile"
        data-testid="upload-img"
      />
      <div
        className={
          isMobile ? "mobile-add-plus" : "add-plus"
        }
        data-testid="add-plus"
      >
        +
      </div>
      <h3 className="photo-head" data-testid="photo-head">
        Upload Photo
      </h3>
    </div>
    <div
      className={
        isMobile ? "mobile-company-info-card" : "company-info-card"
      }
      data-testid="company-info-card"
    >
      <input
        type="checkbox"
        className="checkbox-input"
        id="companyInfo"
        data-testid="checkbox-input"
      />
      <label
        htmlFor="companyInfo"
        className="lable-emailDefault"
        data-testid="label-emailDefault"
      >
        Company Information
      </label>
    </div>
  </div>


  <div className={isMobile ? "mobile-form-card" : "form-card"}>
  <div className={isMobile ? "mobile-input-card" : "input-card"}>
    <label className="label-element" htmlFor="firstName">
      First Name
    </label>
    <br />
    <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="firstName"
      value={formik.values.firstName}
      id="firstName"
      className={isMobile ? "mobile-input-element" : "input-element"}
      type="text"
      placeholder="Enter First Name"
      data-testid="firstNameInput"
    />
    <p className="error-msg">
      {formik.touched.firstName && formik.errors.firstName
        ? "*Required"
        : ""}
    </p>
  </div>
  <div className="input-card">
    <label className="label-element" htmlFor="lastName">
      Last Name
    </label>
    <br />
    <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="lastName"
      value={formik.values.lastName}
      className={isMobile ? "mobile-input-element" : "input-element"}
      id="lastName"
      type="text"
      placeholder="Enter Last Name"
      data-testid="lastNameInput"
    />
    <p className="error-msg">
      {formik.touched.lastName && formik.errors.lastName
        ? "*Required"
        : ""}
    </p>
  </div>
</div>
<div className={isMobile ? "mobile-form-card" : "form-card"} data-testid="personal-info">
  <div className={isMobile ? "mobile-input-card" : "input-card"}>
    <label className="label-element" htmlFor="gender">
      Gender
    </label>
    <br />
    <select
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="gender"
      value={formik.values.gender}
      className={
        isMobile
          ? "mobile-select-element"
          : "input-element select-input"
      }
      id="gender"
      data-testid="gender"
    >
      <option>select</option>
      <option>male</option>
      <option>female</option>
      <option>other</option>
    </select>
    <p className="error-msg" data-testid="gender-error">
      {formik.touched.gender && formik.errors.gender
        ? "*Select Gender"
        : ""}
    </p>
  </div>
  <div className={isMobile ? "mobile-input-card" : "input-card"}>
    <label className="label-element" htmlFor="age">
      Age
    </label>
    <br />
    <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="age"
      value={formik.values.age}
      id="age"
      className={isMobile ? "mobile-input-element" : "input-element"}
      type="number"
      placeholder="Enter Age"
      data-testid="age"
    />
    <p className="error-msg" data-testid="age-error">
      {formik.touched.age && formik.errors.age ? "*Required" : ""}
    </p>
  </div>
</div>

<div className={isMobile ? "mobile-form-card" : "form-card"} data-testid="contact-info">
  <div className={isMobile ? "mobile-input-card" : "input-card"}>
    <label className="label-element" htmlFor="email">
      Email Address
    </label>
    <br />
    <input
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name="email"
      value={formik.values.email}
      id="email"
      className={isMobile ? "mobile-input-element" : "input-element"}
      type="email"
      placeholder="Enter Email"
      data-testid="email"
    />
    <p className="error-msg" data-testid="email-error">
      {formik.touched.email && formik.errors.email ? "*Required" : ""}
    </p>
  </div>
  <div className={isMobile ? "mobile-input-card" : "input-card"}>
  <label className="label-element" htmlFor="emailType">
    Email Address Type
  </label>
  <br />
  <select
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    name="emailAddressType"
    value={formik.values.emailAddressType}
    className={
      isMobile
        ? "mobile-select-element"
        : "input-element select-input"
    }
    id="emailType"
    data-testid="emailTypeSelect"
  >
    <option>select</option>
    <option>Gmail</option>
    <option>Yahoo</option>
  </select>
  <p className="error-msg" data-testid="emailTypeErrorMessage">
    {formik.touched.emailAddressType && formik.errors.emailAddressType
      ? "*Select Email Address Type"
      : ""}
  </p>
</div>
<div className="default-checkbox-card">
  <div className="default-card">
    <input
      type="checkbox"
      className="checkbox-input"
      id="emailDefault"
      data-testid="emailDefaultCheckbox"
    />
    <label htmlFor="emailDefault" className="lable-emailDefault">
      Default
    </label>
  </div>
  <div className="default-card">
    <input
      type="checkbox"
      className="checkbox-input"
      id="emailAllowNotification"
      data-testid="emailAllowNotificationCheckbox"
    />
    <label
      htmlFor="emailAllowNotification"
      className="lable-emailDefault"
    >
      Allow Notifications
    </label>
  </div>
</div>
</div>
<p onClick={onClickAddEmail} className="add-email-phone" data-testid="addAnotherEmail">
  + Add Another Email
</p>
{addAnotherEmail && renderAnotherEmail()}


  {/* form inputs */}
  <button className="save-btn" type="submit" data-testid="save-button">
    Save
  </button>
</form>

    );
  };

  return (
    <div
      className={
        isMobile ? "mobile-information-container" : "information-container"
      }
    >
      {personalInfoCrad()}
    </div>
  );
};

export default UpPersonalInfo;
