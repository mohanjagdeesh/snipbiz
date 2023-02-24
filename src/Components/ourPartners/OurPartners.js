import "./OurPartners.css";

import {RiArrowDropLeftLine, RiArrowDropRightLine} from "react-icons/ri";

const ourPartners = () => (
    <div className="ourpartner-bg">
        <div className="ourpartner-main">
            <h1 className="ourpartner-heading">Our Partners</h1>
            <div className="courierList">
            <RiArrowDropLeftLine className="prv-btn"/>
                <div className="courierService">
                <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676106119/dhl-png-logo-icon-5997_xdet0d.png" alt="dhl" id="dhl"/>
                    </div>
                </div>
                <div className="courierService">
                    <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676105925/image_2_cnwbdk.png" alt="fedex" id="fedex"/>                    
                    </div>
                </div>
                <div className="courierService">
                    <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676105925/1200px-United_Parcel_Service_logo_2014_1_dn24o7.png" alt="ups" id="ups"/>
                    </div>
                </div>
                <div className="courierService">
                    <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676110102/Aramex_Logo_d9ko3y.png" alt="aramex" id="aramex"/>
                    </div>
                </div>
                <div className="courierService">
                    <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676105890/fgfg_1_foktrt.png" alt="usps" id="usps"/>
                    </div>
                </div>
                <RiArrowDropRightLine className="nxt-btn"/>
            </div>

        </div>
    </div>
);

export default ourPartners;