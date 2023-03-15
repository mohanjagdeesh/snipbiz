import "./BlogDetails.scss";
import { BlogDetailPara1, BlogDetailPara2, BlogDetailPara3, BlogDetailPara4, BlogDetailPara5, BlogDetailPara6 } from "../Constants/BlogDetails";
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
    <div className="blog-main" data-testid="blog-main">
      <div className="blog-heading" data-testid="blog-heading">
        <h1>Blog Details</h1>
      </div>

      <div className={isMobile ? "blog-data-phn" : "blog-data"} data-testid="blog-data">
        <div className="blog-data-left" data-testid="blog-data-left">
          <img
            src={img1}
            alt="blog-container"
          />
          <p id="current-date" data-testid="current-date">
            <CiCalendar className="cal-icon" /> DD MON YYYY
          </p>
          <h3 data-testid="blog-heading-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </h3>
          <p>
            {BlogDetailPara1}
          </p>
          <p>
            {BlogDetailPara2}
          </p>
          <p>
            {BlogDetailPara3}
          </p>
          <p>
            {BlogDetailPara4}
          </p>
          <img
            src={img2}
            alt="blog-container"
            data-testid="blog-image"
          />
          <h4 data-testid="blog-heading-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </h4>
          <p>
            {BlogDetailPara5}
          </p>
          <p>
            {BlogDetailPara6}
          </p>

          <span className="share" data-testid="social-media-icons">
            SHARE
            <BsFacebook data-testid="BsFacebook" />
            <BsTwitter data-testid="BsTwitter" />
            <BsInstagram data-testid="BsInstagram" />
            <BsYoutube data-testid="BsYoutube" />
          </span>
        </div>

        <div className={isMobile ? "blog-data-right-phn": "blog-data-right"} data-testid="blog-data-right">
          <div className="blog-recent" data-testid="blog-recent-section">
            <div className={isMobile ? "blog-section-right-phn" : "blog-section-right"}>
              <h3>Recent Posts</h3>
              <hr />
              <div className="blog-recent-img-data" data-testid="blog-recent-post-1">
                <img
                  src={img3}
                  alt="recent-posts"
                />
                <div>
                  <h6>Contrary to popular belief, Lorem Ipsum is not simply</h6>
                  <p className="current-date">DD MON YYYY</p>
                </div>
              </div>
              <hr />
              <div className="blog-recent-img-data" data-testid="blog-recent-post-2">
                <img
                  src={img3}
                  alt="recent-posts"
                />
                <div>
                  <h6>Contrary to popular belief, Lorem Ipsum is not simply</h6>
                  <p className="current-date">DD MON YYYY</p>
                </div>
              </div>
              <hr />
              <div className="blog-recent-img-data" data-testid="blog-recent-post-3">
                <img
                  src={img3}
                  alt="recent-posts"
                />
                <div>
                  <h6>Contrary to popular belief, Lorem Ipsum is not simply</h6>
                  <p className="current-date">DD MON YYYY</p>
                </div>
              </div>
              <hr />
              <div className="blog-recent-img-data" data-testid="blog-recent-post-4">
                <img
                  src={img3}
                  alt="recent-posts"
                />
                <div>
                  <h6>Contrary to popular belief, Lorem Ipsum is not simply</h6>
                  <p className="current-date">DD MON YYYY</p>
                </div>
              </div>
              <button className="view-more" data-testid="view-more-button"> View More </button>
            </div>
          </div>

          <div className="blog-categories" data-testid="blog-categories">
            <div className="blog-section-right">
              <h3>Categories</h3>
              <hr />
              <ul className="blog-list">
                {blogCategories.map((list, index) => (
                  <li key={index} data-testid={`category-${index}`}>{list}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="blog-archives" data-testid="blog-archives">
            <div className="blog-section-right">
              <h3>Archives</h3>
              <hr />
              <ul className="blog-list">
                {blogArchives.map((list, index) => (
                  <li key={index} data-testid={`archive-${index}`}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default BlogDetails;
