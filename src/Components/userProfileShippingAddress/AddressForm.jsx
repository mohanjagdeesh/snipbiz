import './AddressForm.scss'
import { useGlobalStore } from '../../store/useGlobalStore';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';

const AddressForm = (props) => {
    const {addNewAddress} = props

    const [flag, setFlag] = useState(true);
    const [defAdd, setDef] = useState([])

    const isMobile = useGlobalStore((state) => state.isMobile);
    const formik = useFormik({
        initialValues: {
          addresstype: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          country: "",
          zipcode: "",
          checkbox:""
        },
        validationSchema: Yup.object({
            addresstype: Yup.string().min(4).required(),
            address1: Yup.string().min(4).required(),
            address2: Yup.string().min(4).required(),
            city: Yup.string().min(4).required(),
            state: Yup.string().min(4).required(),
            country: Yup.string().min(4).required(),
            zipcode: Yup.number().positive().integer().required()
        }),
        onSubmit:(values, {resetForm}) => {
            console.log(values)
            addNewAddress(formik.values)
            resetForm({values:''})
            
        },
      });

useEffect(()=>
 {
    console.log(JSON.stringify(defAdd));
 }, [defAdd])
 const defaultAddress = (flag) => {
    setFlag(!flag);
    if(flag){
        setDef({
            addresstype: formik.values.addresstype,
            address1: formik.values.address1,
            address2: formik.values.address2,
            city: formik.values.city,
            country: formik.values.country,
            state: formik.values.state,
            zipcode: formik.values.zipcode,
        });
    }
 };

return (    
    <div className={isMobile?"UsrPrf-form-cont-phn" :"User-Profile-form-container"}>
  <form
    onSubmit={formik.handleSubmit}
    className={isMobile ? "UsrPrf-form-phn" : "UsrPrf-data-form"}
  >
    <div className="each-input-fields">
      <label htmlFor="addresstype">Address Type (Home,Work)</label>
      <select className='select-field'
        name="addresstype"
        id="addresstype"
        value={formik.values.addresstype}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        data-testid="address-type"
      >
        <option value="select" hidden>Select</option>
        <option value="Home Address">Home</option>
        <option value="Work Address">Work</option>
      </select>
      <p className="error-message">
        {formik.touched.addresstype && formik.errors.addresstype ? "*Select Address" : ""}
      </p>
    </div>
    <div className="form-input-fields">
      <div className={isMobile ? "input-phn" : "each-input-field"}>
        <section>
          <label htmlFor="address1">Address 1</label>
          <input className='input-field'
            type="text"
            name="address1"
            id="address1"
            value={formik.values.address1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Address 1"
            data-testid="address-1"
          />
          <p className="error-message">
            {formik.touched.address1 && formik.errors.address1 ? "*Required" : ""}
          </p>
        </section>
        <section>
          <label htmlFor="address2">Address 2</label>
          <input className='input-field'
            type="text"
            name="address2"
            id="address2"
            value={formik.values.address2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Address 2"
            data-testid="address-2"
          />
          <p className="error-message">
            {formik.touched.address2 && formik.errors.address2 ? "*Required" : ""}
          </p>
        </section>
      </div>
      <div className={isMobile ? "input-phn" : "each-input-field"}>
        <section>
          <label htmlFor="city">City</label>
          <input className='input-field'
            type="text"
            name="city"
            id="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter City Name"
            data-testid="city"
          />
          <p className="error-message">
            {formik.touched.city && formik.errors.city ? "*Required" : ""}
          </p>
        </section>
        <section>
          <label htmlFor="state">State</label>
          <select className='select-field'
            name="state"
            id="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            data-testid="state"
          >
            <option value="select">Select</option>
            <option value="andhrapradesh">AndhraPradesh</option>
            <option value="telangana">Telangana</option>
            <option value="tamilnadu">TamilNadu</option>
          </select>
          <p className="error-message">
            {formik.touched.state && formik.errors.state ? "*Select State" : ""}
          </p>
    
            </section>
            </div>
            <div className={isMobile ? "input-phn" : "each-input-field"} data-testid="address-inputs">
    <section>
        <label htmlFor="country">Country</label>
        <input className='input-field'
        type="text"
        name="country"
        id="country"
        value={formik.values.country}
        onChange={formik.handleChange} onBlur={formik.handleBlur}
        placeholder="Enter Country Name"
        />
        <p className="error-message">
        {formik.touched.country && formik.errors.country
          ? "*Required"
          : ""}
        </p>
    </section>
    <section>
        <label htmlFor="zipcode">Postal/Zip Code</label>
        <select className='select-field'
        name="zipcode"
        id="zipcode"
        value={formik.values.zipcode}
        onChange={formik.handleChange} onBlur={formik.handleBlur}
        >
        <option value="select">Select</option>
        <option value="506070">506070</option>
        <option value="506080">506080</option>
        </select>
        <p className="error-message">
        {formik.touched.zipcode && formik.errors.zipcode
          ? "*Select ZipCode"
          : ""}
        </p>
    </section>

</div>
<div className="check-box" data-testid="default-address-checkbox">
    <input
        type="checkbox"
        className="chk-box"
        name="chk-box"
        id="chk-box"
        onChange={()=> { defaultAddress(flag) }}
    />
    <label htmlFor="chk-box"> Set as default address </label>
</div>
<button type="submit" className="submit-btn" data-testid="save-button">
    Save
</button>
</div>
</form>
</div>

)}
export default AddressForm;