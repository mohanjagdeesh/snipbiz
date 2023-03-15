import "./OurPartners.css";

import {RiArrowDropLeftLine, RiArrowDropRightLine} from "react-icons/ri";

const ourPartners = () => (
    <div className="ourpartner-bg" data-testid="our-partners-container">
        <div className="ourpartner-main">
            <h1 className="ourpartner-heading" data-testid="our-partners-heading">Our Partners</h1>
            <div className="courierList" data-testid="courier-list-container">
            <RiArrowDropLeftLine className="prv-btn" data-testid="prev-button"/>
                <div className="courierService">
                <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676106119/dhl-png-logo-icon-5997_xdet0d.png" alt="dhl" id="dhl" data-testid="dhl-logo"/>
                    </div>
                </div>
                <div className="courierService">
                    <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676105925/image_2_cnwbdk.png" alt="fedex" id="fedex" data-testid="fedex-logo"/>                    
                    </div>
                </div>
                <div className="courierService">
                    <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676105925/1200px-United_Parcel_Service_logo_2014_1_dn24o7.png" alt="ups" id="ups" data-testid="ups-logo"/>
                    </div>
                </div>
                <div className="courierService">
                    <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676110102/Aramex_Logo_d9ko3y.png" alt="aramex" id="aramex" data-testid="aramex-logo"/>
                    </div>
                </div>
                <div className="courierService">
                    <div className="img-list">
                        <img className="partner-img" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676105890/fgfg_1_foktrt.png" alt="usps" id="usps" data-testid="usps-logo"/>
                    </div>
                </div>
                <RiArrowDropRightLine className="nxt-btn" data-testid="next-button"/>
            </div>

        </div>
    </div>
);

export default ourPartners;
