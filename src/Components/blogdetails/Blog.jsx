import "./Blog.css";
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

const Blog = () => {
  return (
    <div className="blog-main" data-testid="blog-main">
      <div className="blog-heading" data-testid="blog-heading">
        <h1>Blog Details</h1>
      </div>

      <div className="blog-data" data-testid="blog-data">
        <div className="blog-data-left" data-testid="blog-data-left">
          <img
            src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676454678/Rectangle_619_rbg7oq.png"
            alt="blog-container"
          />
          <p id="current-date" data-testid="current-date">
            <CiCalendar className="cal-icon" /> DD MON YYYY
          </p>
          <h3 data-testid="blog-heading-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </h3>
          <p data-testid="blog-paragraph">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
          <p data-testid="blog-paragraph">
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
          <p data-testid="blog-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p data-testid="blog-paragraph">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <img
            src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676454678/Rectangle_620_ikthya.png"
            alt="blog-container"
            data-testid="blog-image"
          />
          <h4 data-testid="blog-heading-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </h4>
          <p data-testid="blog-paragraph">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
          <p data-testid="lorem-ipsum-text">
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
            et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
            comes from a line in section 1.10.32.
          </p>

          <span className="share" data-testid="social-media-icons">
            SHARE
            <BsFacebook data-testid="BsFacebook" />
            <BsTwitter data-testid="BsTwitter" />
            <BsInstagram data-testid="BsInstagram" />
            <BsYoutube data-testid="BsYoutube" />
          </span>
        </div>

        <div className="blog-data-right" data-testid="blog-data-right">
          <div className="blog-recent" data-testid="blog-recent-section">
            <div className="blog-section-right">
              <h3>Recent Posts</h3>
              <hr />
              <div className="blog-recent-img-data" data-testid="blog-recent-post-1">
                <img
                  src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676454677/Rectangle_628_q0oxcs.png"
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
                  src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676454677/Rectangle_628_q0oxcs.png"
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
                  src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676454677/Rectangle_628_q0oxcs.png"
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
                  src="https://res.cloudinary.com/dgkb0snud/image/upload/v1676454677/Rectangle_628_q0oxcs.png"
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
<<<<<<< HEAD
<<<<<<< HEAD
                {blogCategories.map((list, index) => (
                  <li key={index} data-testid={`category-${index}`}>{list}</li>
=======
                {blogCategories.map((list) => (
                  <li key={list}>{list}</li>
>>>>>>> f0c234a (Added test cases)
=======
                {blogCategories.map((list, index) => (
                  <li key={index} data-testid={`category-${index}`}>{list}</li>
>>>>>>> e82a320 (Added more test cases)
                ))}
              </ul>
            </div>
          </div>

          <div className="blog-archives" data-testid="blog-archives">
            <div className="blog-section-right">
              <h3>Archives</h3>
              <hr />
              <ul className="blog-list">
<<<<<<< HEAD
<<<<<<< HEAD
                {blogArchives.map((list, index) => (
                  <li key={index} data-testid={`archive-${index}`}>{list}</li>
=======
                {blogArchives.map((list) => (
                  <li key={list}>{list}</li>
>>>>>>> f0c234a (Added test cases)
=======
                {blogArchives.map((list, index) => (
                  <li key={index} data-testid={`archive-${index}`}>{list}</li>
>>>>>>> e82a320 (Added more test cases)
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
