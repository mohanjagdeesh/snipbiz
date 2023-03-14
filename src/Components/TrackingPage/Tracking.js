import { useMediaQuery } from "react-responsive";
import "./Tracking.scss";
import {useFormik} from "formik"
import * as Yup from "yup";

import { TrackingFive, TrackingFour, TrackingThree,TrackingTwo,TrackingOne } from "../Constants/Tracking";
const TrackingSection = () =>{
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
    <div className="tracking-main">
    <div className="tracking-heading">
      <h1>Track Your Order</h1>
    </div>

    <div className="tracking-data">
        <div className={isTabletOrMobile? "traking-phone" :  "tracking-data-head"}>
        <h1>Track Your Shipment</h1>
      </div>
      <div className={isTabletOrMobile? "traking-label-phone" :  "tracking-label-web"}>
      <form className={isTabletOrMobile? "tracking-leftside" : "tracking-left"} onSubmit={formik.handleSubmit}>
          <label htmlFor="phone">Track Your Shipment By Phone Number/Email</label> 
          <select onChange={formik.handleChange} value={formik.values.phone}  onBlur={formik.handleBlur} id="phone" name="phone">
            <option> Phone</option>
            <option>Mobile</option>
          </select>
          {formik.errors.phone && formik.touched.phone ? formik.errors.phone: null}
          <label htmlFor="tracking">Select Tracking Number</label>
          <select onChange={formik.handleChange} value={formik.values.trackingnumber} onBlur={formik.handleBlur} id="trackingnumber" name="trackingnumber">
          <option>XDCF123450K1</option>
          <option>XDCF123450K2</option>
          </select>
          {formik.errors.trackingnumber && formik.touched.trackingnumber ? formik.errors.trackingnumber: null}

          <div className={isTabletOrMobile?"btn-position-phn":"btn-position"}>
          <button className={isTabletOrMobile? "button-phone" : "button-web"} type="submit">Track</button>
          </div>
        </form>
        <hr/>
        <form className={isTabletOrMobile? "tracking-rightside" : "tracking-right"} onBlur={formik2.handleBlur} onSubmit={formik2.handleSubmit}>
          <label htmlFor="carrier">Track your Shipment by Carrier</label>
          <select onChange={formik2.handleChange} value={formik2.values.carrier} id="carrier" name="carrier">
            <option> Select Carrier</option>
            <option> Select Carrier 2</option>
          </select>
          {formik2.errors.carrier && formik2.touched.carrier ? formik2.errors.carrier: null}
          <label htmlFor="text">Enter Your Tracking number</label>
          <input type="text" placeholder="XVCI287089" onChange={formik2.handleChange} value={formik2.values.tracking} onBlur={formik2.handleBlur} id="text" name="tracking" />
          {formik2.errors.tracking && formik2.touched.tracking ? formik2.errors.tracking: null}
          <div className={isTabletOrMobile?"btn-position-phn":"btn-position"}>
          <button className={isTabletOrMobile? "button-phone" : "button-web"} type="submit">Track</button>
          </div>
        </form>
      </div>
    </div>
    <div className="tracking-para">
      <h3>How to track your shipment</h3>
      <ul>
        <li>
        {TrackingOne}
        </li>
        <li>
        {TrackingTwo}
        </li>
        <li>
        {TrackingThree}
        </li>
        <li>
        {TrackingFour}
        </li>
      <li>
        {TrackingFive}
        </li>
        </ul>
    </div>
  </div>
  )
}

export default TrackingSection;
