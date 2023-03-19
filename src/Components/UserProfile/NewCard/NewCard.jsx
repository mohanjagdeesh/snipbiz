import { useFormik } from "formik";
import * as Yup from "yup";

import "./newcard.scss";

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
      addingNewCard(values);
      submitProps.resetForm();
    },
  });

  return (
    <div className="new-card-main-cont" data-testid='new-card-form'>
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
              type="text"
              {...formik.getFieldProps("cardNumber")}
              data-testid="cardnumber-input"
            />
            <p className="error-message" data-testid="error-messag">
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
                id="cvv"
                name="cvv"
                placeholder="Enter CVV"
                type="password"
                {...formik.getFieldProps("cvv")}
                data-testid="cvv-input"
              />
              <p className="error-message" data-testid="error-messag0">
                {formik.touched.cvv && formik.errors.cvv ? "*Required" : ""}
              </p>
            </div>
            <div className="card-inputs-container"  >
              <label className="card-input-label" htmlFor="expiry">
                Expiry
              </label>
              <input
                className="cvv-cont"
                id="expiry"
                name="expiry"
                placeholder="MM/YYYY"
                type="text"
                {...formik.getFieldProps("expiry")}
                data-testid="expiry-input"
              />
              <p className="error-message" data-testid="error-messag1">
                {formik.touched.expiry && formik.errors.expiry
                  ? "*Required"
                  : ""}
              </p>
            </div>
          </div>
          <div className="card-inputs-container">
            <label className="card-input-label" htmlFor="cardName">
              Name on card
            </label>
            <input
              className="card-input-el"
              id="cardName"
              name="cardHolderName"
              placeholder="Enter Name"
              type="text"
              {...formik.getFieldProps("cardHolderName")}
              data-testid="cardname-input"
            />
            <p className="error-message" data-testid="error-messag2">
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
                {...formik.getFieldProps("addressType")}
                data-testid="addresstype-input"
              >
                <option>Select</option>
                <option>Home</option>
                <option>Work</option>
              </select>
              <p className="error-message" data-testid="error-messag3">
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
                {...formik.getFieldProps("firstAddress")}
                data-testid="addressline1-input"
              />
              <p className="error-message" data-testid="error-messag4">
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
                type="text"
                {...formik.getFieldProps("secondAddress")}
                data-testid="addressline2-input"
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
                id="city"
                name="city"
                placeholder="Enter City"
                type="text"
                {...formik.getFieldProps("city")}
                data-testid="city-input"
              />
              <p className="error-message" data-testid="error-messag">
                {formik.touched.city && formik.errors.city ? "*Required" : ""}
              </p>
            </div>
            <div className="card-inputs-container">
              <label className="card-input-label" htmlFor="state">
                State
              </label>
              <select
                name="state"
                id="state"
                className="card-input-el"
                {...formik.getFieldProps("state")}
                data-testid="state-input"
              >
                <option>Select</option>
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
              </select>
              <p className="error-message" data-testid="error-messag">
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
                placeholder="Enter Country Name"
                type="text"
                {...formik.getFieldProps("country")}
                data-testid="country-input"
              />
              <p className="error-message" data-testid="error-messag">
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
                name="zipCode"
                id="zipcode"
                className="card-input-el"
                {...formik.getFieldProps("zipCode")}
                data-testid="zip-input"
              >
                <option>Select</option>

                <option>535161</option>
                <option>535145</option>
              </select>
              <p className="error-message" data-testid="error-messag">
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
        <button type="submit" className="add-card-button" data-testid='submit-button'>
          Add This Card
        </button>
      </form>
    </div>
  );
};

export default NewCard;
