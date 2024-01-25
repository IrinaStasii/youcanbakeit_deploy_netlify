import React from "react";
import "./Aside.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="asideContainer">
      <aside className="widget-wrap">
        <p id="aboutIrina">ABOUT IRINA STASII</p>
        <img id="imageIrina" src="./me.jpg" alt="" />
        <p id="welcome_short_description">
          Welcome to my cozy corner. Let's get to know each other. I'm Irina, a
          coffee lover passionate about baking, creating beautiful designs, food
          photography and crafting delicious treats.{" "}
          <Link to={"/about"} id="readMore" target="_blank">
            Read more...{" "}
          </Link>
        </p>

        {/* Instagram post links */}
        <h6 id="insta_text">You Can Bake It! on INSTAGRAM</h6>
        <div className="insta_links">
          <a id="insta_photo1" href="https://www.instagram.com/p/CLrUZpOpMvZ/">
            link
          </a>
          <a id="insta_photo2" href="https://www.instagram.com/p/CI8VAwxJ0_s/">
            link
          </a>
          <a id="insta_photo3" href="https://www.instagram.com/p/CLWiJwjpx2I/">
            link
          </a>
          <a
            id="insta_photo4"
            href="https://www.instagram.com/p/CMmYMrdpZx0/?img_index=1"
          >
            link
          </a>
          <a
            id="insta_photo5"
            href="https://www.instagram.com/p/CLCdtnrJedb/?img_index=1"
          >
            link
          </a>
          <a id="insta_photo6" href="https://www.instagram.com/p/CI0hv-_pdh3/">
            link
          </a>
          <a id="insta_photo7" href="https://www.instagram.com/p/CMCUv0YnlUn/">
            link
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
