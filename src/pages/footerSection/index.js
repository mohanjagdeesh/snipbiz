import "./index.css"

import {BsFacebook, BsTwitter, BsInstagram, BsYoutube} from "react-icons/bs";

const about = ['How It Works', 'Partners', 'Tracking','FAQ','US Debit Card','Contact'];
const siteMap = ['press', 'media', 'careers','partners','reviews/customer stories','volumetric weight','calculator'];
const shipForward = ['processing charges', 'prohibited items', 'assisted puchase','pack n ship in one box','US Debit Card','affiliate program','limits of liability'];
const legal = ['login', 'register', 'cancel/return policy','privacy policy','terms & conditions','legal disclaimer'];




const footerSection = () => (
    <footer>
        <div className="footer-main">
            
            <div className="footer-data">
            
                <div className="footer-link-data">
                    <div className="link-data-row">
                        <div>
                            <p>ABOUT</p>
                            <hr/>
                            <ul>
                                {about.map((list) => (<li>{list}</li>))}
                            </ul>
                        </div>
                        <div>
                            <p>SITEMAP</p>
                            <hr/>
                            <ul>{siteMap.map((list) => (<li>{list}</li>))}</ul>
                        </div>
                        <div>
                            <p>SHIP FORWARDING</p>
                            <hr/>
                            <ul>{shipForward.map((list) => (<li>{list}</li>))}</ul>
                        </div>
                    </div>
                    <div className="link-data-row">
                        <div>
                            <p>Legal</p>
                            <hr/>
                            <ul>
                                {legal.map((list) => (<li>{list}</li>))}
                            </ul>
                        </div>
                        <div>
                            <p>maryland, usa</p>
                            <hr/>                            
                            <p className="footer-link-address">
                                Corporate Headquarters<br/>
                                20059 Mattingly ter<br/>
                                gaithersburg, MD 28079<br/>
                                Phone: +1 732 447 9779
                            </p>
                            <section className="ico-share">
                                <span className="share">share:</span>
                                <BsFacebook/><BsTwitter/><BsInstagram/><BsYoutube/>
                            </section>
                        </div>
                        <div>
                            <p>delaware, usa</p>
                            <hr/>
                            <p className="footer-link-address">
                                Corporate Headquarters<br/>
                                20059 Mattingly ter<br/>
                                gaithersburg, MD 28079<br/>
                                Phone: +1 732 447 9779
                            </p>                            
                        </div>
                    </div>

                </div>

                <div className="footer-payment-data">
                    <div className="payment-data-row">
                        <p>pay with confidence</p>
                        <hr/>
                        <div className="payment-gateway">
                            <div className="payment-gateway-images">
                                <img src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676298223/paypal_1_bqr2uu.png" alt="paypal"/>
                                <img src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676298223/applepay_1_rkmkm7.png" alt="applepay"/>
                                <img src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676298223/amex_1_i1xpqi.png" alt="americanexp"/>
                            </div>
                            <div className="payment-gateway-images">
                                <img id="visa" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676298223/visa-mastercard_1_f6bwag.png" alt="visamaster"/>
                                <img id="alipay" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676298223/alipay_1_xmiwmk.png" alt="alipay"/>
                                <img id="discover" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676298223/Discover-logo_1_ieosck.png" alt="discover"/>
                            </div>
                        </div>
                    </div>
                    <div className="payment-data-row">
                            <p>know your data is protected</p>
                            <hr/>
                            <div className="data-protect">
                                <img src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676298443/lets-encrypt_2_hledei.png" alt="letsencrypt"/>
                                <img src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676298443/ssl_1_ho35cb.png" alt="fullysecure"/>
                            </div>
                    </div>
                    
                </div>
            
            </div>












            <hr className="last-line"/>

            <div className="copyright">
                <p>Copyright © 2023 SnipBiz. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default footerSection;