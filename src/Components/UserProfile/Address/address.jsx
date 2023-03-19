

import { AiOutlinePlus } from "react-icons/ai";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as Yup from "yup";

import "./address.css";

const Address = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:1124px)" });
  const [flag, setFlag] = useState(true);
  const [address, setAddress] = useState([]);
  const [defAdd, setDef] = useState({});

  const formik = useFormik({
    initialValues: {
      addressType: "",
      address1: "",
      address2: "",
      country: "",
      city: "",
      state: "",
      code: "",
    },
    validationSchema: Yup.object({
      addressType: Yup.string().min(4).required(),
      address1: Yup.string().min(5).required("required"),
      address2: Yup.string().min(5).required("lgfdgxdff"),
      city: Yup.string().min(4).required("lgfdgxdfxf"),
      country: Yup.string().min(4).required("lgfdgxdfxf"),
      state: Yup.string().min(3).required("lgfdgxdfxf"),
      code: Yup.number().min(6).required("lgfdgxdfxf"),
    }),
    onSubmit: (values, submitProps) => {
      console.log(values);

      submitProps.resetForm();
    },
  });

  useEffect(()=>{
    console.log(address);

  },[address])
  const addAnotherAddress = () => {
    setAddress([
      ...address,
      {
        anotherAddress: formik.values,
      },
    ]);

  };
useEffect(()=>{
    console.log(JSON.stringify(defAdd));

},[defAdd])
  const defaultAddress = (flag) => {
    setFlag(!flag);
    if (flag) {
      setDef({
        addressType: formik.values.addressType,
        address1: formik.values.address1,
        address2: formik.values.address2,
        city: formik.values.city,
        country: formik.values.country,
        state: formik.values.state,
        code: formik.values.code,
      });
    }
  };
  return (
        <div className="address-container">
          <div
            className={
              isTabletOrMobile ? "form-container-mobile" : "form-container"
            }
          >
            <form onSubmit={formik.handleSubmit}>
              <div
                className={
                  isTabletOrMobile
                    ? "address-type-container-mobile"
                    : "address-type"
                }
              >
                <label htmlFor="home" className="label-element">
                  Address Type (Home,Work)
                </label>
                <select
                className="select"
                  onChange={formik.handleChange}
                  value={formik.values.addressType}
                  id="addressType"
                  name="addressType"
                >
                  <option>Home</option>
                  <option>Work</option>
                </select>
                <p className="error-message">
                  {formik.touched.addressType && formik.errors.addressType
                    ? "*Required"
                    : null}
                </p>
              </div>
              <div
                className={
                  isTabletOrMobile
                    ? "address-type-container-mobile"
                    : "address-type-container"
                }
              >
                <div className="address-type">
                  <label htmlFor="address1" className="label-element">
                    Address 1
                  </label>
                  <input
                  className="input"
                    type="text"
                    placeholder="Enter Address"
                    value={formik.values.address1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="address1"
                    name="address1"
                  />
                  <p className="error-message">
                    {formik.touched.address1 && formik.errors.address1
                      ? "*Required"
                      : null}
                  </p>
                </div>
                <div className="address-type">
                  <label htmlFor="address2" className="label-element">
                    Address 2
                  </label>
                  <input
                  className="input"
                    type="text"
                    placeholder="Enter Address2"
                    value={formik.values.address2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="address2"
                    name="address2"
                  />
                  <p className="error-message">
                    {formik.touched.address2 && formik.errors.address2
                      ? "*Required"
                      : null}
                  </p>
                </div>
              </div>
              <div
                className={
                  isTabletOrMobile
                    ? "address-type-container-mobile"
                    : "address-type-container"
                }
              >
                <div className="address-type">
                  <label htmlFor="city" className="label-element">
                    City
                  </label>
                  <input
                  className="input"
                    type="text"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="city"
                    name="city"
                    placeholder="Enter City"
                  />
                  <p className="error-message">
                    {formik.touched.city && formik.errors.city
                      ? "*Required"
                      : null}
                  </p>
                </div>
                <div className="address-type">
                  <label htmlFor="state" className="label-element">
                    State
                  </label>
                  <select
                  className="select"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    id="state"
                    name="state"
                  >
                    <option>Guntur</option>
                    <option>Vizag</option>
                    <option>Hyderabad</option>
                  </select>
                  <p className="error-message">
                    {formik.touched.state && formik.errors.state
                      ? "*Required"
                      : null}
                  </p>
                </div>
              </div>
              <div
                className={
                  isTabletOrMobile
                    ? "address-type-container-mobile"
                    : "address-type-container"
                }
              >
                <div className="address-type">
                  <label htmlFor="country" className="label-element">
                    Country
                  </label>
                  <input
                  className="input"
                    type="text"
                    placeholder="Enter Country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="country"
                    name="country"
                  />
                  <p className="error-message">
                    {formik.touched.country && formik.errors.country
                      ? "*Required"
                      : null}
                  </p>
                </div>
                <div className="address-type">
                  <label htmlFor="code" className="label-element">
                    Portal/Zip Code
                  </label>
                  <select
                  className="select"
                    onChange={formik.handleChange}
                    value={formik.values.code}
                    id="code"
                    name="code"
                  >
                    <option>50090</option>
                    <option>50080</option>
                    <option>50070</option>
                  </select>
                  <p className="error-message">
                    {formik.touched.code && formik.errors.code
                      ? "*Required"
                      : null}
                  </p>
                </div>
              </div>
              <div
                className={
                  isTabletOrMobile ? "button-container-mobile" : "buttons"
                }
              >
                <label htmlFor="checkbox">
                  {" "}
                  <input
                    type="checkbox"
                    id="checkbox"
                    onChange={() => {
                      defaultAddress(flag);
                    }}
                  />
                  Set as default address
                </label>
                <button
                  onClick={addAnotherAddress}
                  className="add-button"
                  type="reset"
                >
                  <AiOutlinePlus /> Add Another Addresss
                </button>
                <input
                  className="save-button"
                  type="submit"
                  placeholder="Save"
                  value="Save"
                />
              </div>
            </form>
          </div>
        </div>

  );
};
export default Address;
