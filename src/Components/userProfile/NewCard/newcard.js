import { useFormik } from "formik";
import * as Yup from "yup";

import "./newcard.css";

const NewCard = (props) => {
  const { addingNewCard } = props;

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cvv: "",
      expiry: "",
      cardHolderName: "",
      addressType: "",
      firstAddress: "",
      secondAddress: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      defaultCard: "",
    },

    validationSchema: Yup.object({
      cardNumber: Yup.number().positive().integer().required(),
      cvv: Yup.number().positive().integer().required(),
      expiry: Yup.number().positive().integer().required(),
      cardHolderName: Yup.string().required(),
      addressType: Yup.string().required(),
      firstAddress: Yup.string().required(),
      secondAddress: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      country: Yup.string().required(),
      zipCode: Yup.number().positive().integer().required(),
    }),

    onSubmit: (values, submitProps) => {
      console.log(values);
      addingNewCard(values);
      submitProps.resetForm();
    },
  });

  return (
    <div className="new-card-main-cont">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="card-inputs-container">
            <label className="card-input-label" htmlFor="cardnumber">
              Card Number
            </label>
            <input
              className="card-input-el"
              id="cardnumber"
              name="cardNumber"
              placeholder="Enter Card Number"
              value={formik.values.cardNumber}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="error-message">
              {formik.touched.cardNumber && formik.errors.cardNumber
                ? "*Required"
                : ""}
            </p>
          </div>
          <div className="cvv-expiry-cont">
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="cvv">
                CVV
              </label>
              <input
                className="cvv-cont"
                value={formik.values.cvv}
                id="cvv"
                name="cvv"
                placeholder="Enter CVV"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="error-message">
                {formik.touched.cvv && formik.errors.cvv ? "*Required" : ""}
              </p>
            </div>
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="expiry">
                Expiry
              </label>
              <input
                className="cvv-cont"
                value={formik.values.expiry}
                id="expiry"
                name="expiry"
                placeholder="MM/YYYY"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="error-message">
                {formik.touched.expiry && formik.errors.expiry
                  ? "*Required"
                  : ""}
              </p>
            </div>
          </div>
          <div className="card-inputs-container">
            <label className="card-input-label" htmlFor="cardName">
              Name on the card
            </label>
            <input
              className="card-input-el"
              id="cardName"
              name="cardHolderName"
              placeholder="Enter Name"
              type="text"
              value={formik.values.cardHolderName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="error-message">
              {formik.touched.cardHolderName && formik.errors.cardHolderName
                ? "*Required"
                : ""}
            </p>
          </div>
        </div>
        <div>
          <div>
            <h4 className="cards-heading">Billing Address</h4>
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="addresstype">
                Address Type (Home, Work)
              </label>
              <select
                name="addressType"
                id="addresstype"
                className="card-input-el"
                value={formik.values.addressType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option>Select</option>
                <option>Home</option>
                <option>Work</option>
              </select>
              <p className="error-message">
                {formik.touched.addressType && formik.errors.addressType
                  ? "*Select Address"
                  : ""}
              </p>
            </div>
          </div>
          <div className="cvv-expiry-cont">
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="address1">
                Address1
              </label>
              <input
                className="address-input-el"
                id="address1"
                name="firstAddress"
                placeholder="Enter Address1"
                type="text"
                value={formik.values.firstAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="error-message">
                {formik.touched.firstAddress && formik.errors.firstAddress
                  ? "*Required"
                  : ""}
              </p>
            </div>
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="address2">
                Address2
              </label>
              <input
                className="address-input-el"
                id="address2"
                placeholder="Enter Address2"
                name="secondAddress"
                value={formik.values.secondAddress}
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="error-message">
                {formik.touched.secondAddress && formik.errors.secondAddress
                  ? "*Required"
                  : ""}
              </p>
            </div>
          </div>
          <div className="cvv-expiry-cont">
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="city">
                City
              </label>
              <input
                className="address-input-el"
                value={formik.values.city}
                id="city"
                name="city"
                placeholder="Enter City"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="error-message">
                {formik.touched.city && formik.errors.city ? "*Required" : ""}
              </p>
            </div>
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="state">
                State
              </label>
              <select
                value={formik.values.state}
                name="state"
                id="state"
                className="card-input-el"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option>Select</option>
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
              </select>
              <p className="error-message">
                {formik.touched.state && formik.errors.state
                  ? "*Select State"
                  : ""}
              </p>
            </div>
          </div>
          <div className="cvv-expiry-cont">
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="country">
                Country
              </label>
              <input
                className="address-input-el"
                id="country"
                name="country"
                value={formik.values.country}
                placeholder="Enter Country Name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="error-message">
                {formik.touched.country && formik.errors.country
                  ? "*Required"
                  : ""}
              </p>
            </div>
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="zipcode">
                Portal/ Zip Code
              </label>
              <select
                value={formik.values.zipCode}
                name="zipCode"
                id="zipcode"
                className="card-input-el"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option>Select</option>

                <option>535161</option>
                <option>535145</option>
              </select>
              <p className="error-message">
                {formik.touched.zipCode && formik.errors.zipCode
                  ? "*Select ZipCode"
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="default-address-cont">
          <input className="checkbox-el" id="defaultaddress" type="checkbox" />
          <label className="checkbox-label" htmlFor="defaultaddress">
            Set as default
          </label>
        </div>
        <button type="submit" className="add-card-button">
          Add This Card
        </button>
      </form>
    </div>
  );
};

export default NewCard;
