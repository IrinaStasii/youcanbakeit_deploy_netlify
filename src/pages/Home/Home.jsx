import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

// const Home = (props) => {
//     const { loggedIn, email } = props;
//     const navigate = useNavigate();

//     const onButtonClick = () => {
//         // You'll update this function later
//             // If the user is logged in, log them out
//             if (loggedIn) {
//                 localStorage.removeItem("user")
//                 props.setLoggedIn(false)
//             } else {
//                 navigate("/login");
//                 console.log('user email: ' , email)
//             }

//     }

//     return <div className="mainContainer">
//         <div className={"titleContainer"}>
//             <div>Welcome!</div>
//         </div>
//         <div>
//             Do you want to have acces to comment section and courses page? Please Log in
//         </div>
//         <div className={"buttonContainer"}>
//             <input
//                 className={"inputButton"}
//                 type="button"
//                 onClick={onButtonClick}
//                 value={loggedIn ? "Log out" : "Log in"} />
//             {(loggedIn ? <div>
//                 Your email address is {email}
//             </div> : <div/>)}
//         </div>

//     </div>
// }

const Home = () => {
  return (
    <div className="homePageContent">
      <h1 id="home_welcome">Welcome</h1>
      <p>
        ...to my cozy corner. Let's get to know each other. I'm Irina, a coffee
        lover passionate about baking, creating beautiful designs, food
        photography and crafting delicious treats.
      </p>
       <p>
        In 2017, I decided to access European funds and opened my own
        confectionery laboratory{" "}
        <a id="sweetMiMi" href="https://sweetmimi.ro/">
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
        P.S.
        I'm the creator behind everything you see on this website. From
        crafting the recipes to capturing and enhancing the food photography,
        every element has been meticulously curated by me. Using my expertise in
        Photoshop, I've meticulously edited each image to ensure a captivating
        visual experience.
      </p>
    </div>
  );
};

export default Home;
