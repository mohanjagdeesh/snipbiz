import "./LandingPage.css";
import React, { useState } from "react";
import Form from "../Forms/Form";
const LandingPage = () => {
  const [data,setData]= useState()

  return (
    <div className="top-container">
      <div className="main-container">
        <div className="left-container">
          <h3 className="shop">
            Ship your package with best rates from reliable shipping companies.
          </h3>
          <img
            className="shipping"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676020937/discount-design-copy_2_ipmdoe.png"
            alt="off"
          />
         <Form formData={(e)=>setData(e)} />
          <a className="question" href="/">
            Do you need help for get approximate weight and measurements?
          </a>
          <div className="stars">
            <button className="quote" onClick={console.log(data)}>
              Get Quote
            </button>
            <img
              className="star-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1675425560/Untitled-1_1_s6_vughy5.png"
              alt="star"
            />
          </div>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Need to book multiple shipments?
          </a>
        </div>
        <div className="right-container">
          <img
            className="box"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1676020325/warehouse-flights---Copy_1_vp9wtn.png"
            alt="box"
          />
          <h4 className="shop">
            Shop anywhere in US let us ship to your doorstep in your country*{" "}
            <span className="tax">Tax free*</span>
          </h4>
          <button className="howit-works" onClick={()=>alert("data")}>How it works</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
