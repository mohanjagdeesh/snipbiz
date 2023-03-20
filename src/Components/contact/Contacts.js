import { Component } from "react";

import "./Contact.css";
import { BsChatLeft } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

class contact extends Component {
  state = {
    interested: "",
    firstname: "",
    lastname: "",
    email: "",
    companyname: "",
    country: "",
    phone: "",
    jobtitle: "",
    city: "",
    comments: "",
    formsList: []
  };
  submitForm = (event) => {
    event.preventDefault()
    const {interested, firstname, lastname, email, companyname, country,phone,jobtitle,city,comments, formsList} = this.state
    const formData = {interested, firstname, lastname, email, companyname, country,phone,jobtitle,city,comments}
    formsList.unshift(formData)

    

    // console.log(formsList)

  }



  selectInterest = (event) => {
    this.setState({interested:event.target.value})
  }
  selectCountry =(event) => {
    this.setState({country:event.target.value})
  }
  firstName = (event) => {
    this.setState({firstname:event.target.value})
  }
  lastName = (event) => {
    this.setState({lastname:event.target.value})
  }
  companyName = (event) => {
    this.setState({companyname:event.target.value})
  }
  eMail = (event) => {
    this.setState({email:event.target.value})
  }
  phoneNumber = (event) => {
    this.setState({phone:event.target.value})
  }
  cityName = (event) => {
    this.setState({city:event.target.value})
  }
  commentSection = (event) => {
    this.setState({comments:event.target.value})
  }
  jobTitle = (event) => {
    this.setState({jobtitle:event.target.value})
  }



  render() {
    return (
      <div className="contact-main">
        <div className="contact-heading">
          <h1>Contact</h1>
        </div>
        <div className="contact-paragraph">
          <h2>
            If you have any questions, contact us using the form below and we’ll
            respond as soon as we can. The more information you provide, the
            quicker and more effectively we’ll be able to help you. You can also
            email customer services directly.
          </h2>
        </div>
        <div className="contact-data">
          <div className="contact-data-left">
            <div>
              <BsChatLeft className="contact-icon" />
              <p>CHAT</p>
              <h4>987-654-3210</h4>
            </div>
            <div className="contact-data-left-middle">
              <HiOutlineMail className="contact-icon" />
              <p>E-MAIL</p>
              <h4>help@snipbiz.com</h4>
            </div>
            <div>
              <FiPhoneCall className="contact-icon" />
              <p>CALL</p>
              <h4>+01 123 456 7890</h4>
            </div>
          </div>
          <form onSubmit={this.submitForm} className="contact-data-right-form" >
            <h2>I'm interested in...</h2>
            <select onChange={this.selectInterest}>
              <option value="careers">Careers</option>
              <option value="contact1">Reason for Contact 1</option>
              <option value="contact2">Reason for Contact 2</option>
              <option value="contact3">Reason for Contact 3</option>
              <option value="contact4">Reason for Contact 4</option>
            </select>
            <div className="form-input-fields">
              <div className="each-input-field">
                <section>
                  <label>First Name*</label>
                  <input onChange={this.firstName} type={"text"} placeholder="First Name" required />
                </section>
                <section>
                  <label>Last Name*</label>
                  <input onChange={this.lastName} type={"text"} placeholder="Last Name" required />
                </section>
              </div>
              <div className="each-input-field">
                <section>
                  <label>Company*</label>
                  <input onChange={this.companyName} type={"text"} placeholder="Company Name" required />
                </section>
                <section>
                  <label>Email*</label>
                  <input onChange={this.eMail} type={"email"} placeholder="Your E-mail" required />
                </section>
              </div>

              <div className="each-input-field">
                <section>
                  <label>Country</label>
                  <select onChange={this.selectCountry}>
                    <option value="country">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                  </select>
                </section>
                <section>
                  <label>Phone</label>
                  <input onChange={this.phoneNumber} type={"number"} placeholder="Your Phone Number" />
                </section>
              </div>

              <div className="each-input-field">
                <section>
                  <label>Job Title</label>
                  <input onChange={this.jobTitle} type={"text"} placeholder="Job Title" />
                </section>
                <section>
                  <label>City</label>
                  <input onChange={this.cityName} type={"text"} placeholder="City Name" />
                </section>
              </div>
            </div>
            <div className="each-input-field">
              <section>
                <label>Comments</label>
                <textarea onChange={this.commentSection} rows={3} cols={30} />
              </section>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-map-data">
          <h2>Forwarding warehouse locations</h2>
          <img
            src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676914848/Rectangle_648_mhmpny.png"
            alt="map"
          />

          <div className="contact-map-bottom-list">
            <div>
              <h6>UK Warehouse</h6>
              <p>Preston</p>
              <p>PR3 1NJ</p>
              <p>United Kingdom</p>
            </div>
            <div>
              <h6>UK Tax Free Warehouse</h6>
              <p>Forest</p>
              <p>GY8 ODJ</p>
              <p>Guernsey</p>
            </div>
            <div>
              <h6>Germany Warehouse</h6>
              <p>D-16303 Gewerbepark-Meyenberg</p>
              <p>DRD 587</p>
              <p>Germany</p>
            </div>
            <div>
              <h6>Turkey Warehouse</h6>
              <p>34413 Kagithane</p>
              <p>Istanbul</p>
              <p>Turkey</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
