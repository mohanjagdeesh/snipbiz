import "./index.css";

import {FiUsers} from "react-icons/fi";
import {CiGlobe} from "react-icons/ci";
import {BsTruck} from "react-icons/bs";


const servicesInfo = () => (

    <div className="service-bg">
        <div className="service-container">
            <div className="service-list">
                <BsTruck className="service-ico"/>
                <h1>50K+</h1>
                <p>Deliveries</p>
            </div>
            <div className="service-list">
                <FiUsers className="service-ico"/>
                <h1>2M+</h1>
                <p>Customers Served</p>
            </div>
            <div className="service-list">
                <CiGlobe className="service-ico"/>
                <h1>50+</h1>
                <p>Countries Served</p>
            </div>
            <div className="service-list">
                <FiUsers className="service-ico"/>
                <h1>5</h1>
                <p>Partners</p>
            </div>
        </div>

    </div>

);

export default servicesInfo;