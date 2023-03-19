import "./index.css";
import {FiSearch, FiShoppingCart} from "react-icons/fi";
import {BsCaretDownFill} from "react-icons/bs"

const navigationList = ['How It Works', 'Partners', 'Tracking','FAQ','US Debit Card','Contact'];

const headerSection = () => (
    <header>
        <nav>
            <img src="https://res.cloudinary.com/dgkb0snud/image/upload/v1675690735/SnipBiz-Logos_2snipbiz-logo_nshkcy.png" alt="logo"/>
            <ul>
                {navigationList.map((list) => (<li>{list}</li>))
                }
            </ul>
            <button>Login/Register</button>
            <FiShoppingCart className="icon" />
            <p>En <span><BsCaretDownFill className="icon" /></span></p>
            <FiSearch className="icon" />
        </nav>
    </header>
);
export default headerSection;