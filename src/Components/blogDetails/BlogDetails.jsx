import "./BlogDetails.scss";
import {
  BlogDetailPara1,
  BlogDetailPara2,
  BlogDetailPara3,
  BlogDetailPara4,
  BlogDetailPara5,
  BlogDetailPara6,
} from "../Constants/BlogDetails";
import img1 from "./store.png";
import img2 from "./shipping.png";
import img3 from "./fedex.png";

import { useGlobalStore } from "../../store/useGlobalStore";

import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";

const blogCategories = [
  "Logistics",
  "Shipping",
  "Business",
  "Discounts",
  "Global Growth",
  "Warehouses",
  "Orders",
];
const blogArchives = ["2023", "2022", "2021", "2020", "2019", "2018", "2017"];

const BlogDetails = () => {
  const isMobile = useGlobalStore((state) => state.isMobile);
  return (
    <div className="blog-main">
      <div className={isMobile ? "blog-heading-phn" :"blog-heading"} data-testid="blog-heading">
        <h1 data-testid="blog-title">Blog Details</h1>
      </div>

      <div className={isMobile ? "blog-data-phn" : "blog-data"} data-testid="blog-data">
        <div className="blog-data-left">
          <img src={img1} alt="blog-container" data-testid="blog-image1" />
          <p id="current-date" data-testid="blog-date">
            <CiCalendar className="cal-icon" /> DD MON YYYY
          </p>
          <h3 data-testid="blog-heading1">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </h3>
          <p data-testid="blog-paragraph1">{BlogDetailPara1}</p>
          <p data-testid="blog-paragraph2">{BlogDetailPara2}</p>
          <p data-testid="blog-paragraph3">{BlogDetailPara3}</p>
          <p data-testid="blog-paragraph4">{BlogDetailPara4}</p>
          <img src={img2} alt="blog-container" data-testid="blog-image2" />
          <h4 data-testid="blog-heading2">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </h4>
          <p data-testid="blog-paragraph5">{BlogDetailPara5}</p>
          <p data-testid="blog-paragraph6">{BlogDetailPara6}</p>
          <span className="share" data-testid="blog-share">
            SHARE
            <BsFacebook data-testid="blog-facebook-icon" />
            <BsTwitter data-testid="blog-twitter-icon" />
            <BsInstagram data-testid="blog-instagram-icon" />
            <BsYoutube data-testid="blog-youtube-icon" />
          </span>
        </div>
      


        
        
        <div
          className={isMobile ? "blog-data-right-phn" : "blog-data-right"}
          data-testid="blog-data-right"
        >
          <div className="blog-recent">
            <div
              className={
                isMobile ? "blog-section-right-phn" : "blog-section-right"
              }
            >
              <h3>Recent Posts</h3>
              <hr />
              <div
                className="blog-recent-img-data"
                data-testid="blog-recent-img-data"
              >
                <img src={img3} alt="recent-posts" />
                <div>
                  <h6 data-testid="recent-post-title">
                    Contrary to popular belief, Lorem Ipsum is not simply
                  </h6>
                  <p className="current-date">DD MON YYYY</p>
                </div>
              </div>
              <hr />
              <div className="blog-recent-img-data">
                <img src={img3} alt="recent-posts" />
                <div>
                  <h6 data-testid="recent-post-title">
                    Contrary to popular belief, Lorem Ipsum is not simply
                  </h6>
                  <p className="current-date">DD MON YYYY</p>
                </div>
              </div>
              <hr />
              <div className="blog-recent-img-data">
                <img src={img3} alt="recent-posts" />
                <div>
                  <h6 data-testid="recent-post-title">
                    Contrary to popular belief, Lorem Ipsum is not simply
                  </h6>
                  <p className="current-date">DD MON YYYY</p>
                </div>
              </div>
              <hr />
              <div className="blog-recent-img-data">
                <img src={img3} alt="recent-posts" />
                <div>
                  <h6 data-testid="recent-post-title">
                    Contrary to popular belief, Lorem Ipsum is not simply
                  </h6>
                  <p className="current-date">DD MON YYYY</p>
                </div>
              </div>
              <button className="view-more" data-testid="view-more-button">
                {" "}
                View More{" "}
              </button>
            </div>
          </div>

          <div className="blog-categories" data-testid="blog-categories">
            <div className="blog-section-right">
              <h3>Categories</h3>
              <hr />
              <ul className="blog-list">
                {blogCategories.map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="blog-archives" data-testid="blog-archives">
            <div className="blog-section-right">
              <h3>Archives</h3>
              <hr />
              <ul className="blog-list">
                {blogArchives.map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>


      </div>
  );
};
export default BlogDetails;
