import {HiLocationMarker} from "react-icons/hi";
import {GiWeight} from "react-icons/gi";
import {IoIosLocate} from "react-icons/io";

import "./ShipmentSection.css";

const ShipmentSection = () => (
    <div className="main">
        <div className="shipment-container">
            <div className="left-section">
                <h2>Ship your package with best rates from reliable shipping companies. </h2>
                <img className="shipment-image" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676036721/discount-design-copy_2_rfnexh.png" alt="discount"/>
                <label><IoIosLocate className="ico"/>
                <input type={Text} placeholder="Enter Pickup Location"/></label>
                <label><HiLocationMarker className="ico" id="l-ico"/>
                <input type={Text} placeholder="Enter Destination"/></label>
                <label><GiWeight className="ico"/>
                <input type={Text} placeholder="Enter Approximate Weight"/></label>
                <p className="weight-help">Do you need help for get approximate weight and measurements?</p>
                <div className="btn-review">
                    <button className="get-quote-btn"> Get Quote</button>
                    <img className="review" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676047453/Untitled-1_1_a2tten.png" alt="review"/>
                </div>
            </div>
            <div className="right-section">
                <img className="shipment-image" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676036721/warehouse-flights---Copy_1_j82vqf.png" alt="warehouse"/>
                <h2>Shop any where in US, let us ship to your doorstep in your country* <span>Tax free*</span></h2>
                
                <button className="howit-works-btn">How it works?</button>
            </div>
        </div>
    </div>
);
export default ShipmentSection;