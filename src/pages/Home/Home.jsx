import React from "react";
import "./home.css";

const Home = () => {
  // const loggedIn = sessionStorage.getItem("userLoggedIn");

  return (
    <div className="homePageContent">
       {/* {loggedIn ? <div>You are loggedin</div> : <div>you are not loggedin</div>} */}
      <h1 id="home_welcome">WELCOME</h1>
      <p>
        ...to my cozy corner. Let's get to know each other. I'm Irina, a coffee
        lover passionate about baking, creating beautiful designs, food
        photography and crafting delicious treats.
      </p>
      <p>
        In 2017, I decided to access European funds and opened my own
        confectionery laboratory{" "}
        <a id="sweetMiMi" href="https://sweetmimi.ro/" target="_blank">
          Sweet MiMi Cluj
        </a>
        . I learned how to manage a business from 0 and, at the same time,
        showcased my talent and skill through the daily products I baked. Now,
        I'm trying to become a{" "}
        <span className="home_bold_text">Frontend Developer</span>. Why? Running
        a business can be demanding, and I have decided to pursue a career in
        frontend development to achieve a better work-life balance.{" "}
        <span className="home_bold_text">
          I consider myself a creative person, and I believe that this field
          aligns perfectly with my desire to create something beautiful and
          engaging at the same time.{" "}
        </span>
        It's a perfect fit for me.
      </p>
      <p id="home_bold">
        P.S. I'm the creator behind everything you see on this website. From
        crafting the recipes to capturing and enhancing the food photography,
        every element has been meticulously curated by me. Using my expertise in
        Photoshop, I've meticulously edited each image to ensure a captivating
        visual experience.
      </p>
    </div>
  );
};

export default Home;
