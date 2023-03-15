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
          value={formik.values.cardNumber}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
            value={formik.values.cvv}
            id="cvv"
            name="cvv"
            placeholder="Enter CVV"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            data-testid="cvv-input"
          />
          <p className="error-message" data-testid="error-messag1">
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
            data-testid="expiry-input"
          />
          <p className="error-message" data-testid="error-messag2">
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
          value={formik.values.cardHolderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          data-testid="cardname-input"
        />
        <p className="error-message" data-testid="error-messag3">
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
            data-testid="addresstype-input"
          >
            <option>Select</option>
            <option>Home</option>
            <option>Work</option>
          </select>
          <p className="error-message" data-testid="error-messag4">
            {formik.touched.addressType && formik.errors.addressType ? "*Required"
        : ""}
      </p>
    </div>
    <div className="card-inputs-container">
      <label className="card-input-label" htmlFor="addressline1">
        Address Line 1
      </label>
      <input
        className="card-input-el"
        id="addressline1"
        name="addressLine1"
        placeholder="Enter Address Line 1"
        type="text"
        value={formik.values.addressLine1}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        data-testid="addressline1-input"
      />
      <p className="error-message" data-testid="error-messag5">
        {formik.touched.addressLine1 && formik.errors.addressLine1
          ? "*Required"
          : ""}
      </p>
    </div>
    <div className="card-inputs-container">
      <label className="card-input-label" htmlFor="addressline2">
        Address Line 2
      </label>
      <input
        className="card-input-el"
        id="addressline2"
        name="addressLine2"
        placeholder="Enter Address Line 2"
        type="text"
        value={formik.values.addressLine2}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        data-testid="addressline2-input"
      />
    </div>
    <div className="card-inputs-container">
      <label className="card-input-label" htmlFor="city">
        City
      </label>
      <input
        className="card-input-el"
        id="city"
        name="city"
        placeholder="Enter City"
        type="text"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        data-testid="city-input"
      />
      <p className="error-message" data-testid="error-messag6">
        {formik.touched.city && formik.errors.city ? "*Required" : ""}
      </p>
    </div>
    <div className="card-inputs-container">
      <label className="card-input-label" htmlFor="state">
        State
      </label>
      <input
        className="card-input-el"
        id="state"
        name="state"
        placeholder="Enter State"
        type="text"
        value={formik.values.state}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        data-testid="state-input"
      />
      <p className="error-message" data-testid="error-messag7">
        {formik.touched.state && formik.errors.state ? "*Required" : ""}
      </p>
    </div>
    <div className="card-inputs-container">
      <label className="card-input-label" htmlFor="zip">
        Zip
      </label>
      <input
        className="card-input-el"
        id="zip"
        name="zip"
        placeholder="Enter Zip"
        type="text"
        value={formik.values.zip}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        data-testid="zip-input"
      />
      <p className="error-message" data-testid="error-messag8">
        {formik.touched.zip && formik.errors.zip ? "*Required" : ""}
      </p>
    </div>
  </div>
</div>
<button className="btn btn-primary btn-lg" type="submit" data-testid="submit-button">
  Submit
</button>
</form>
</div>
             

  );
};

export default NewCard;
