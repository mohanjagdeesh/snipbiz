import './UserProfileShippingAddress.scss';
import { useState } from 'react';
import {MdModeEdit} from 'react-icons/md';
import { useGlobalStore } from '../../store/useGlobalStore';
import AddressForm from './AddressForm';

const UserProfileShippingAddress = () => {
    const isMobile = useGlobalStore((state) => state.isMobile);
    const [addAddress, setAddAddress] = useState(false);
    const [addressList , setAddressList] = useState([])

    const onAddingNewAddress = (value) => {
      const {addresstype , address1 , address2 , city , state , country , zipcode} = value
      const newAddress = {
        addresstype,
        address1,
        address2,
        city,
        state,country,zipcode
      }
      setAddressList([...addressList , newAddress])
    }

    return (
      <div className="User-Profile">
        <div className="User-Profile-Heading">
          <h1>User Profile</h1>
        </div>
        
  
        <div className={isMobile? "user-prof-phn": "User-Profile-data"}>
          <div className="User-Profile-container">
            <h4>Shipping Address</h4>
            <div className={isMobile ? 'addressList-phone': 'addressList'}>
                {addressList.map(eachAddress => (
              <div key = {eachAddress.id} className={isMobile ? 'eachAddress-phn':'eachAddress'}>
                <h3 className='address-top'>{eachAddress.addresstype} <MdModeEdit/></h3>
                <p>{eachAddress.address1},</p>
                <p>{eachAddress.address2},</p>
                <p>{eachAddress.city},</p>
                <p>{eachAddress.state}, {eachAddress.country},</p>
                <p>{eachAddress.zipcode}</p>
                <label className='checkbx' htmlFor='chk-box' ><input type="checkbox" className="chk-box" name="chk-box" id="chk-box" /> Set Default Address </label>
              </div>
              ))}
              <div className={isMobile ? 'eachAddressBtn-phn':'eachAddressBtn'}>
                  <button className="add-btn" onClick={()=>setAddAddress(true) }> + <span>Add Address</span></button> 
              </div>
            </div>
            {addAddress ? <AddressForm addNewAddress = {onAddingNewAddress}/> : null}

          </div>
        </div>
      </div>
    );
  };
  export default UserProfileShippingAddress;