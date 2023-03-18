import { useMediaQuery } from "react-responsive";
import "./Tracking.scss";
import {useFormik} from "formik"
import * as Yup from "yup";

import { TrackingFive, TrackingFour, TrackingThree,TrackingTwo,TrackingOne } from "../Constants/Tracking";
const TrackingPage = () => {
  const isTabletOrMobile = useMediaQuery({query: "(max-width:1124px)"});
  
  const formik =useFormik({
    initialValues:{ 
      phone:" ",
      trackingnumber:" "
    },
  onSubmit:(values)=>{
   console.log(values)  
  }
})
const formik2 =useFormik({
  initialValues:{
    
  },
onSubmit:(values)=>{
 console.log(values)  
  
},
validationSchema:Yup.object({
  tracking:Yup.string().min(10).required("Required!"),
  carrier:Yup.string().min(10).required("Required!")
})
})

  return(
    <div className="tracking-main" data-testid="tracking-main">
  <div className="tracking-heading" data-testid="tracking-heading">
    <h1 data-testid="track-order">Track Your Order</h1>
  </div>

  <div className="tracking-data" data-testid="tracking-data">

    <div className={isTabletOrMobile ? "traking-phone" : "tracking-data-head"} data-testid="tracking-label">
      <h1>Track Your Shipment</h1>
    </div>

    <div className={isTabletOrMobile ? "traking-label-phone" : "tracking-label-web"}>
      <form className={isTabletOrMobile ? "tracking-leftside" : "tracking-left"} data-testid="tracking-leftside" onSubmit={formik.handleSubmit}>
        <label htmlFor="email" for="email-select" >Track Your Shipment By Phone Number/Email</label>
        <select className="select1"  onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} id="phone" name="phone">
          <option hidden>Select Email</option>
          <option aria-labelledby="email-label">email</option>
        </select>
        {formik.errors.phone && formik.touched.phone ? formik.errors.phone : null}
        <label htmlFor="tracking">Select Tracking Number</label>
        <select className="select1" onChange={formik.handleChange} value={formik.values.trackingnumber} onBlur={formik.handleBlur} id="trackingnumber" name="trackingnumber">
          <option>XDCF123450K1</option>
          <option>XDCF123450K2</option>
        </select>
        {formik.errors.trackingnumber && formik.touched.trackingnumber ? formik.errors.trackingnumber : null}

        <div className={isTabletOrMobile ? "btn-position-phn" : "btn-position"}>
          <button className={isTabletOrMobile ? "button-phone" : "button-web"} data-testid="btn-track" type="submit">Track</button>
        </div>
      </form>
      <hr />

      <form className={isTabletOrMobile ? "tracking-rightside" : "tracking-right"} data-testid="tracking-rightside" onBlur={formik2.handleBlur} onSubmit={formik2.handleSubmit}>
        <label htmlFor="carrier">Track your Shipment by Carrier</label>
        <select className="select1" onChange={formik2.handleChange} value={formik2.values.carrier} id="carrier" name="carrier">
          <option>Select Carrier</option>
          <option>Select Carrier 2</option>
        </select>
        {formik2.errors.carrier && formik2.touched.carrier ? formik2.errors.carrier : null}
        <label htmlFor="tracking"  aria-labelledby="input">Enter Your Tracking number</label>
        <input className="input1"  onChange={formik2.handleChange} value={formik2.values.tracking} onBlur={formik2.handleBlur} id="tracking" name="tracking" placeholder="Tracking Number" />
        {formik2.errors.tracking && formik2.touched.tracking ? formik2.errors.tracking : null}

        <div className={isTabletOrMobile ? "btn-position-phn" : "btn-position"}>
          <button className={isTabletOrMobile ? "button-phone" : "button-web"} data-testid="btn-track" type="submit">Track</button>
        </div>
      </form>

    </div>
  </div>
  <div className="tracking-para" data-testid="tracking-para">
  <h3 data-testid="tracking-heading">How to track your shipment</h3>
  <ul data-testid="tracking-list">
    <li data-testid="tracking-item-1">
      {TrackingOne}
    </li>
    <li data-testid="tracking-item-2">
      {TrackingTwo}
    </li>
    <li data-testid="tracking-item-3">
      {TrackingThree}
    </li>
    <li data-testid="tracking-item-4">
      {TrackingFour}
    </li>
    <li data-testid="tracking-item-5">
      {TrackingFive}
    </li>
  </ul>
</div>
</div>
 )
}

export default TrackingPage;
 