import "./ServingDestination.css";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const ServingDestination = () => {
  return (
    <div className="serving-bg">
      <div className="serving-container">
        <div className="serving-map">
          <h1 className="serving-name">Serving Destinations</h1>
          <img
            src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676113935/world-map_1_fk30vg.png"
            alt="worldmap"
            className="worldmap"
          />
        </div>
        <div className="serving-List">
          {/* <IoIosArrowDropleftCircle className="prv"/> */}
          <RiArrowDropLeftLine className="prv-btn" />
          <div className="serving-place" id="place-Delhi">
            <div className="place-list">
              <img
                className="place-img"
                src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_4dlh_dwqdvs.png"
                alt="delhi"
                id="delhi"
              />
            </div>
            <h3 className="place-name">Delhi</h3>
            <p className="place-price">Lowest Price $10.00</p>
          </div>
          <div className="serving-place">
            <div className="place-list">
              <img
                className="place-img"
                src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_5nyk_vwxg2w.png"
                alt="newyork"
                id="newyork"
              />
            </div>
            <h3 className="place-name">Newyork</h3>
            <p className="place-price">Lowest Price $25.00</p>
          </div>
          <div className="serving-place">
            <div className="place-list">
              <img
                className="place-img"
                src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_6ldn_lwtrp2.png"
                alt="london"
                id="london"
              />
            </div>
            <h3 className="place-name">London</h3>
            <p className="place-price">Lowest Price $15.00</p>
          </div>
          <div className="serving-place">
            <div className="place-list">
              <img
                className="place-img"
                src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_6fkf_uffo3m.png"
                alt="frankfurt"
                id="frankfurt"
              />
            </div>
            <h3 className="place-name">Frankfurt</h3>
            <p className="place-price">Lowest Price $18.00</p>
          </div>
          <div className="serving-place">
            <div className="place-list">
              <img
                className="place-img"
                src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_5ams_nonaxp.png"
                alt="amsterdam"
                id="amsterdam"
              />
            </div>
            <h3 className="place-name">Amsterdam</h3>
            <p className="place-price">Lowest Price $17.00</p>
          </div>
          <RiArrowDropRightLine className="nxt-btn" />
        </div>
      </div>
    </div>
  );
};

export default ServingDestination;
