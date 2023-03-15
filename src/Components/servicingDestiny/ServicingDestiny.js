import "./ServicingDestiny.css";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const ServicingDestiny = () => (
  <div className="serving-bg" data-testid="serving-bg">
    <div className="serving-container">
      <div className="serving-map">
        <h1 className="serving-name" data-testid="serving-name">
          Serving Destinations
        </h1>
        <img
          src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676113935/world-map_1_fk30vg.png"
          alt="worldmap"
          className="worldmap"
          data-testid="worldmap"
        />
      </div>
      <div className="serving-List" data-testid="serving-list">
        <RiArrowDropLeftLine className="prv-btn" data-testid="prv-btn" />
        <div
          className="serving-place"
          id="place-Delhi"
          data-testid="serving-place-Delhi"
        >
          <div className="place-list">
            <img
              className="place-img"
              src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_4dlh_dwqdvs.png"
              alt="delhi"
              id="delhi"
              data-testid="delhi-img"
            />
          </div>
          <h3 className="place-name" data-testid="delhi-name">
            Delhi
          </h3>
          <p className="place-price" data-testid="delhi-price">
            Lowest Price $10.00
          </p>
        </div>
        <div className="serving-place" data-testid="serving-place-newyork">
          <div className="place-list">
            <img
              className="place-img"
              src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_5nyk_vwxg2w.png"
              alt="newyork"
              id="newyork"
              data-testid="newyork-img"
            />
          </div>
          <h3 className="place-name" data-testid="newyork-name">
            Newyork
          </h3>
          <p className="place-price" data-testid="newyork-price">
            Lowest Price $25.00
          </p>
        </div>
        <div className="serving-place" data-testid="serving-place-london">
          <div className="place-list">
            <img
              className="place-img"
              src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_6ldn_lwtrp2.png"
              alt="london"
              id="london"
              data-testid="london-img"
            />
          </div>
          <h3 className="place-name" data-testid="london-name">
            London
          </h3>
          <p className="place-price" data-testid="london-price">
            Lowest Price $15.00
          </p>
        </div>
        <div className="serving-place" data-testid="serving-place-frankfurt">
          <div className="place-list">
            <img
              className="place-img"
              src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_6fkf_uffo3m.png"
              alt="frankfurt"
              id="frankfurt"
              data-testid="frankfurt-img"
            />
          </div>
          <h3 className="place-name" data-testid="frankfurt-name">
            Frankfurt
          </h3>
          <p className="place-price" data-testid="frankfurt-price">
            Lowest Price $18.00
          </p>
        </div>
        <div className="serving-place" data-testid="serving-place-amsterdam">
          <div data-testid="place-list" className="place-list">
            <img
              data-testid="place-img"
              className="place-img"
              src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676131225/Rectangle_5ams_nonaxp.png"
              alt="amsterdam"
              id="amsterdam"
            />
          </div>
          <h3 data-testid="place-name" className="place-name">
            Amsterdam
          </h3>
          <p data-testid="place-price" className="place-price">
            Lowest Price $17.00
          </p>
        </div>
        <RiArrowDropRightLine data-testid="nxt-btn" className="nxt-btn" />
      </div>
    </div>
  </div>
);

export default ServicingDestiny;
