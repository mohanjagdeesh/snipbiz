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
    <div className="blog-main">
      <div className="blog-heading">
        <h1>Blog Details</h1>
      </div>
      <div className={isMobile ? "blog-data-phn" : "blog-data"}>
        <div className="blog-data-left">
          <img
            src={img1}
            alt="blog-container"
          />
          <p id="current-date">
            <CiCalendar className="cal-icon" /> DD MON YYYY
          </p>
          <h3>
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
          />
          <h4>
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </h4>
          <p>
            {BlogDetailPara5}
          </p>
          <p>
            {BlogDetailPara6}
          </p>
          <span className="share">
            SHARE
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsYoutube />
          </span>
        </div>

        <div className={isMobile ? "blog-data-right-phn": "blog-data-right"}>
          <div className="blog-recent">
            <div className={isMobile ? "blog-section-right-phn" : "blog-section-right"}>
              <h3>Recent Posts</h3>
              <hr />
              <div className="blog-recent-img-data">
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
              <div className="blog-recent-img-data">
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
              <div className="blog-recent-img-data">
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
              <div className="blog-recent-img-data">
                <img
                  src={img3}
                  alt="recent-posts"
                />
                <div>
                  <h6>Contrary to popular belief, Lorem Ipsum is not simply</h6>
                  <p className="current-date">DD MON YYYY</p>
                </div>
              </div>
              <button className="view-more"> View More </button>
            </div>
          </div>

          <div className="blog-categories">
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

          <div className="blog-archives">
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
  )
};
export default BlogDetails;
