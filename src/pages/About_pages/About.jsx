import React from "react";
import "./About.css";
import Gallery from "./Gallery";

const About = () => {
  const galleryImages = [
    {
      img: ".././galleryImg/IMG_5102-1.jpg",
    },
    {
      img: ".././galleryImg/IMG_5407.jpg",
    },
    {
      img: ".././galleryImg/IMG_0028insta.jpg",
    },
    {
      img: ".././galleryImg/IMG_0074.jpg",
    },
    {
      img: ".././galleryImg/CANA (1 1).jpg",
    },
    {
      img: ".././galleryImg/2-IMG_6508.jpg",
    },
    {
      img: ".././galleryImg/IMG_5192-2.jpg",
    },
    {
      img: ".././galleryImg/IMG_5438.jpg",
    },
    {
      img: ".././galleryImg/IMG_5440.jpg",
    },
    {
      img: ".././galleryImg/2-IMG_6559.jpg",
    },
    {
      img: ".././galleryImg/1-IMG_6095.jpg",
    },
    {
      img: ".././galleryImg/IMG_5356.jpg",
    },
    {
      img: ".././galleryImg/IMG_5474.jpg",
    },
    {
      img: ".././galleryImg/IMG_5483.jpg",
    },
    {
      img: ".././galleryImg/2-IMG_6591.jpg",
    },
    {
      img: ".././galleryImg/IMG_5646.jpg",
    },
    {
      img: ".././galleryImg/IMG_5654.jpg",
    },
    {
      img: ".././galleryImg/3-IMG_0055.jpg",
    },
    {
      img: ".././galleryImg/IMG_5701.jpg",
    },
    {
      img: ".././galleryImg/1-IMG_6131.jpg",
    },
    {
      img: ".././galleryImg/IMG_5772.jpg",
    },
    {
      img: ".././galleryImg/3-102IMG_7584.jpg",
    },
    {
      img: ".././galleryImg/2-IMG_6609.jpg",
    },
    {
      img: ".././galleryImg/IMG_5795.jpg",
    },
    {
      img: ".././galleryImg/IMG_5823.jpg",
    },
    {
      img: ".././galleryImg/IMG_6266.jpg",
    },
    {
      img: ".././galleryImg/IMG_6298.jpg",
    },
    {
      img: ".././galleryImg/IMG_6345.jpg",
    },
    {
      img: ".././galleryImg/IMG_6366.jpg",
    },
    {
      img: ".././galleryImg/IMG_7163-2.jpg",
    },
    {
      img: ".././galleryImg/3-IMG_7130.jpg",
    },
    {
      img: ".././galleryImg/IMG_7172-2.jpg",
    },
    {
      img: ".././galleryImg/IMG_7240.jpg",
    },
    {
      img: ".././galleryImg/IMG_7365.jpg",
    },
    {
      img: ".././galleryImg/IMG_7401.jpg",
    },
    {
      img: ".././galleryImg/IMG_7423.jpg",
    },
    {
      img: ".././galleryImg/IMG_7438p.jpg",
    },
    {
      img: ".././galleryImg/IMG_8401.jpg",
    },
    {
      img: ".././galleryImg/IMG_8412.jpg",
    },
    {
      img: ".././galleryImg/IMG_8428.jpg",
    },
    {
      img: ".././galleryImg/IMG_8470.jpg",
    },
    {
      img: ".././galleryImg/IMG_8505.jpg",
    },
    {
      img: ".././galleryImg/IMG_8977.jpg",
    },
    {
      img: ".././galleryImg/IMG_8986.jpg",
    },
    {
      img: ".././galleryImg/IMG_5430.jpg",
    },
    {
      img: ".././galleryImg/IMG_8989.jpg",
    },
    {
      img: ".././galleryImg/IMG_9976-2.jpg",
    },
    {
      img: ".././galleryImg/IMG_9986.jpg",
    },
    {
      img: ".././galleryImg/insta-1.jpg",
    },
    {
      img: ".././galleryImg/instaIMG_7085-2.jpg",
    },
    {
      img: ".././galleryImg/IMG_2639.jpg",
    },
    {
      img: ".././galleryImg/IMG_6545.jpg",
    },
  ];

  return (
    <div className="aboutContent">
      <div className="aboutDiv">
          <p id="aboutHeader">ABOUT</p>
          <p>
            Welcome to my cozy corner. Let's get to know each other. I'm Irina,
            a coffee lover passionate about baking, creating beautiful designs,
            food photography and crafting delicious treats.
            <br />
            <br />
            My adventure began in 2016 when I discovered my passion for baking.
            Prior to venturing into my own business, I had worked in the field,
            but I quickly realized my desire to have my own enterprise. At that
            time, while pursuing my master's degree in Business Administration,
            I decided to access European funds and opened my own confectionery
            laboratory in 2017. I started from scratch, learning new recipes,
            experimenting daily, and constantly seeking out new ones. I learned
            how to manage a business from 0 and, at the same time, showcased my
            talent and skill through the daily products I baked.
          </p>
          <div className="aboutMeImg">
            <img src="../IMG_7656.jpg" alt="no_image" />
            <img src="../IMG_7729.jpg" alt="no_image" />
          </div>
          <img src="" alt="" />
          <p>
            Now, I'm trying to become a{" "}
            <span id="frontend">Frontend Developer</span>. Why? Running a
            business can be demanding, and I have decided to pursue a career in
            frontend development to achieve a better work-life balance.
          </p>
          <p>
            Why specifically frontend development? Well, while working on my
            company's website, I gradually discovered a growing passion for
            coding. I found immense satisfaction in directly crafting and seeing
            how lines of code can impact and transform the content of a web
            page. I consider myself a creative person, and I believe that this
            field aligns perfectly with my desire to create something beautiful
            and engaging at the same time. It's a perfect fit for me.
          </p>
          <p>
            Additionally, over the years, my husband and I have taken a
            significant portion of product photos together. As a result, I've
            learned some editing skills along the way. Below, you can view a
            selection of products and photos that{" "}
            <span className="boldtext">
              I've both captured and fully edited.
            </span>{" "}
          </p>
        
      </div>
      <Gallery galleryImages={galleryImages} />
      <br />
      <br />
      <div id="footerDiv">
        <p className="boldtext">I love to hear from you!</p>
        <p id="footerText">
          I have created this website to share with you the experience I have
          accumulated so far. You will find recipes from beginner to advanced
          levels. Some recipes require a longer and more complex preparation
          process, specific utensils, and a lot of patience to make, but I'm
          sure that with a little courage, you will succeed. You Can Bake It!
          <br />
          <br />
          If you have a question about a recipe, please ask it on that post, as
          others may have the same question. As always, you can also reach me on{" "}
          <a href="https://www.instagram.com/irina_stasii/">
            Instagram
          </a> or <a href="https://www.facebook.com/youcanbakeit">Facebook</a> .
        </p>
        <br />
        <p>Thanks for stopping by!</p>
        <p>Irina</p>
      </div>
    </div>
  );
};

export default About;
