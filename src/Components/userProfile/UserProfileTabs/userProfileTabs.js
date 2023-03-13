import { useState } from "react";
import { useFormik } from "formik";

import { v4 as uuidv4 } from "uuid";
import UPPersonnelInfo from "../upPersonalInfo/UpPersonalInfo";

import * as Yup from "yup";

import "./userProfileTabs.css";

const tabsList = [
  { id: uuidv4(), tabName: "Personal Information" },
  { id: uuidv4(), tabName: "Address" },
  { id: uuidv4(), tabName: "Company Information" },
  { id: uuidv4(), tabName: "ChangePassword" },
];

const Tabs = () => {
  const [activeTabId, setTabSelection] = useState(tabsList[0].id);

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("*Required"),
      newPassword: Yup.string().required("*Required"),
      confirmPassword: Yup.string().required("*Required"),
    }),
    onSubmit: (values, submitProps) => {
      console.log(values);
      submitProps.resetForm();
    },
  });

  const renderUserProfileInformation = () => {
    const activatedUserProfile = tabsList.filter(
      (eachUserProfile) => eachUserProfile.id === activeTabId
    );

    const userProfileSection = activatedUserProfile[0].tabName;

    const renderChangePasswordSection = () => {
      return (
        <div className="main-cont">
          <form onSubmit={formik.handleSubmit} className="inputs-cont">
            <div className="input-cont">
              <label className="label" htmlFor="currentPassword">
                Current Password
              </label>
              <input
                placeholder="Enter Current Password"
                className="input-el"
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="error-message">
                {formik.touched.currentPassword && formik.errors.currentPassword
                  ? formik.errors.currentPassword
                  : ""}
              </p>
            </div>
            <div className="new-pass-cont">
              <div className="input-cont">
                <label className="label" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  placeholder="Enter New Password"
                  className="input-el"
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <p className="error-message">
                  {formik.touched.newPassword && formik.errors.newPassword
                    ? formik.errors.newPassword
                    : ""}
                </p>
              </div>
              <div className="input-cont">
                <label className="label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  placeholder="Confirm New Password"
                  className="input-el"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <p className="error-message">
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : ""}
                </p>
              </div>
            </div>
            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        </div>
      );
    };

    if (userProfileSection === "Personal Information") {
      return <UPPersonnelInfo />;
    } else if (userProfileSection === "Address") {
      return "Address";
    } else if (userProfileSection === "Company Information") {
      return "Company Information";
    } else if (userProfileSection === "ChangePassword") {
      return renderChangePasswordSection();
    }
  };

  const renderTabItems = () => {
    return (
      <div>
        <ul className="tabs-cont">
          {tabsList.map((tab) => {
            const active = tab.id === activeTabId;
            return (
              <li key={tab.id} className="tab-item">
                <button
                  className={`button-item-tab ${active ? "active-tab" : ""}`}
                  type="button"
                  onClick={() => setTabSelection(tab.id)}
                >
                  {tab.tabName}
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {renderUserProfileInformation()}
      </div>
    );
  };

  return <div>{renderTabItems()}</div>;
};

export default Tabs;