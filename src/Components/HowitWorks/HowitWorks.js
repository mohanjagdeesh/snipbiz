import "./HowitWorks.scss";

const HowitWorks = () => (
    <div className="howitworks-main" data-testid="howitworks-main">
        <div className="howitworks-heading" data-testid="howitworks-heading">
            <h1>How it Works</h1>
        </div>

        <nav>
            <ul>
                <li data-testid="courier-service">Courier Service</li>
                <li data-testid="forward-shipping">Forward Shipping</li>
                <li data-testid="us-debit-cards">US Debit Cards</li>
            </ul>
        </nav>

        <div className="howitworks-video">
            <img className="video-pic" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676890000/Rectangle_652_rok78s.png" alt="video-play" />
            <img className="play-btn" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676890370/Vector_3_nuv89i.png" alt="play-btn"/>
        </div>
        
        <div className="howitworks-data">
            <img id="process-direction" src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676373099/Vector_2_w9lwmc.png" alt="process-direction" />

            <div className="howitworks-process" data-testid="signup-process">
                <div className="process-data-info">
                    <h3>Signup & get USA Address</h3>
                    <p>SnipBiz offers a solution to your every shopping and shipping need from the USA including, Repacking, Consolidation, And Detail Images of Packages. Moreover, check your electronic items before shipping them to your doorstep. We promise to display the highest degree of integrity towards our customers and fellow employees.</p>
                </div>
                <div className="process-number">1</div>
                <img src="https://res.cloudinary.com/dgkb0snud/image/upload/v1675771584/Rectangle_606hiw1_eyuyag.png" alt="howitworks-img" data-testid="signup-img"/>
            </div>

            <div className="howitworks-process" data-testid="shop-process">
                <img src="https://res.cloudinary.com/dgkb0snud/image/upload/v1675771584/Rectangle_606hiw2_lw193c.png" alt="howitworks-img" data-testid="shop-img"/>
                <div className="process-number">2</div>
                <div  className="process-data-info">
                    <h3>Shop Online & Ship to Our Ware House</h3>
                    <p>SnipBiz offers a solution to your every shopping and shipping need from the USA including, Repacking, Consolidation, And Detail Images of Packages. Moreover, check your electronic items before shipping them to your doorstep. We promise to display the highest degree of integrity towards our customers and fellow employees.</p>
                </div>
            </div>

            <div className="howitworks-process" data-testid="consolidate-process">
                <div className="process-data-info">
                    <h3>We Consolidate Your Packages</h3>
                    <p>SnipBiz offers a solution to your every shopping and shipping need from the USA including, Repacking, Consolidation, And Detail Images of Packages. Moreover, check your electronic items before shipping them to your doorstep. We promise to display the highest degree of integrity towards our customers and fellow employees.</p>
                </div>
            </div>
        </div>
    </div>
);

export default HowitWorks;