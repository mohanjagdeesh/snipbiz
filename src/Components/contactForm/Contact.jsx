import { useFormik } from "formik";
import * as Yup from 'yup';
import { useMediaQuery } from "react-responsive";
import { ContactData } from "../Constants/Contact";
import "./Contact.scss";

const contactList = [
  "Preston",
  "PR3 1NJ",
  "United Kingdom"
];
const contactList1 = [
  "Preston",
  "PR3 1NJ",
  "United Kingdom",
  "Phone Number"
];

const ContactForm = () => {

  const isTabletOrMobile = useMediaQuery ({query:"(max-width: 1224px)"})

  const formik = useFormik({
    initialValues: {
      careers:"",
      country : "",
      fname: "",
      lname: "",
      company: "",
      email: "",
      phone: "",
      jobname: "",
      cityname: "",
      comment: ""
    },
    validationSchema: Yup.object({
      careers: Yup.string().min(4).required(),
      country: Yup.string().min(4).required(),
      fname: Yup.string().min(4).required(),
      lname: Yup.string().min(4).required(),
      company: Yup.string().min(4).required(),
      email: Yup.string().email('Not a proper email'),
      phone: Yup.number().positive().integer().min(10).required(),
      jobname: Yup.string().min(4).required(),
      cityname: Yup.string().min(4).required(),
      comment: Yup.string().min(4).required(),
  }),
  onSubmit:(values, {resetForm}) => {
    console.log(values)
    // addNewAddress(formik.values)
    resetForm({values:''})
    
},
  })
  return (
    <div className="contact-main">
      <div className="contact-heading" data-testid="contact-heading">
        <h1>Contact</h1>
      </div>
      <div className="contact-paragraph" data-testid="contact-paragraph">
        <h2>
          {ContactData}
        </h2>
      </div>
      <div className={isTabletOrMobile ? "contact-data-phn" :"contact-data"} data-testid="contact-data">
        <form onSubmit={formik.handleSubmit} className="contact-data-form" data-testid="contact-form">
          <h2>I am interested in...</h2>
          <select value={formik.values.careers}
            onChange={formik.handleChange} onBlur={formik.handleBlur} id="careers" name="careers" data-testid="contact-select">
            <option value="careers">Careers</option>
            <option value="contact1">Reason for Contact 1</option>
            <option value="contact2">Reason for Contact 2</option>
            <option value="contact3">Reason for Contact 3</option>
            <option value="contact4">Reason for Contact 4</option>
          </select>
          <p className="error-message">
                {formik.touched.careers && formik.errors.careers
                  ? "*Required"
                  : ""}
              </p>
          <div className="form-input-fields">
            <div className={isTabletOrMobile ? "each-input-field-phn" : "each-input-field"}>
              <section>
                <label htmlFor="fname">First Name*</label>
                <input value={formik.values.fname} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      type="text" placeholder="First Name" id="fname" name="fname" data-testid="contact-firstname" />
                <p className="error-message">
                {formik.touched.fname && formik.errors.fname
                  ? "*Required"
                  : ""}
              </p>
              </section>
              <section>
                <label htmlFor="lname">Last Name*</label>
                <input value={formik.values.lname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="text" placeholder="Last Name" id="lname" name="lname" />
                      <p className="error-message" data-testid="contact-lastname">
                {formik.touched.lname && formik.errors.lname
                  ? "*Required"
                  : ""}
              </p>
              </section>
            </div>
            <div className={isTabletOrMobile ? "each-input-field-phn" : "each-input-field"}>
              <section>
                <label htmlFor="company">Company*</label>
                <input value={formik.values.company}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} type="text" placeholder="Company Name" id="company" name="company" data-testid="contact-companyname"/>
                      <p className="error-message">
                {formik.touched.company && formik.errors.company
                  ? "*Required"
                  : ""}
              </p>
              </section>
              <section>
                <label htmlFor="email">Email*</label>
                <input value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} type="email" placeholder="Your E-mail" id="email" name="email" data-testid="contact-emailinput"/>
              </section>
              <p className="error-message">
                {formik.touched.email && formik.errors.email
                  ? "*Required"
                  : ""}
              </p>
            </div>
            <div className={isTabletOrMobile ? "each-input-field-phn" : "each-input-field"}>
              <section>
                <label>Country</label>
                <select value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} id="country" name="country" data-testid="contact-country">
                  <option value="country">Select Country</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="australia">Australia</option>
                </select>
                <p className="error-message">
                {formik.touched.country && formik.errors.country
                  ? "*Required"
                  : ""}
              </p>
              </section>
              <section>
                <label htmlFor="phone">Phone</label>
                <input value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} type="number" placeholder="Your Phone Number" id="phone" name="phone" data-testid="contact-phoneNumber" />
                      <p className="error-message">
                {formik.touched.phone && formik.errors.phone
                  ? "*Required"
                  : ""}
              </p>
              </section>
            </div>
            <div className={isTabletOrMobile ? "each-input-field-phn" : "each-input-field"}>
              <section>
                <label htmlFor="jobname">Job Title</label>
                <input value={formik.values.jobname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} type="text" placeholder="Job Title" id="jobname" name="jobname" data-testid="job-title"/>
                      <p className="error-message">
                {formik.touched.jobname && formik.errors.jobname
                  ? "*Required"
                  : ""}
              </p>
              </section>
              <section>
                <label htmlFor="cityname">City</label>
                <input value={formik.values.cityname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} type="text" placeholder="City Name" id="cityname" name="cityname" data-testid="city-name"/>
                      <p className="error-message">
                {formik.touched.cityname && formik.errors.cityname
                  ? "*Required"
                  : ""}
              </p>
              </section>
            </div>
          </div>
          <div className={isTabletOrMobile ? "each-input-field-phn" : "each-input-field"}>
            <section>
              <label htmlFor="comment">Comments</label>
              <textarea value={formik.values.comment}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur} rows={6} cols={30} id="comment" name="comment" data-testid="comments"/>
                      <p className="error-message">
                {formik.touched.comment && formik.errors.comment
                  ? "*Required"
                  : ""}
              </p>
            </section>
          </div>
          <button type="submit" className={isTabletOrMobile ?"submit-btn-phn":"submit-btn"} data-testid="submit-btn">Submit</button>
        </form>
      </div>
      <div className={isTabletOrMobile ? "contact-bottom-data-phn" : "contact-bottom-data"} data-testid="contact-map-data">
        <div className={isTabletOrMobile ?"contact-bottom-list-phn":"contact-bottom-list"}>
          <div>
            <h6>Office</h6>
            <p> {contactList1.map((list) => (
                  <li key={list}>{list}</li>
                ))}
            </p>
          </div>
          <div>
            <h6>Warehouse</h6>
            <p> {contactList.map((list) => (
                  <li key={list}>{list}</li>
                ))}
            </p>
          </div>
          <div>
            <h6>IT Development Center</h6>
            <p> {contactList.map((list) => (
                  <li key={list}>{list}</li>
                ))}
            </p>
          </div>
          <div>
            <h6>Customer Care</h6>
            <p> {contactList.map((list) => (
                  <li key={list}>{list}</li>
                ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;