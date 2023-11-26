import React, { useState } from "react";
import KitDetails from "./KitDetails";
import { Container, Row, Col } from "react-bootstrap";
import "./kit.css";
import Basket from "./Basket";

function Kit() {
  const products = [
    {
      id: 1,
      name: "Red Velvet Cookies with Ruby Chocolate Chips and Raspberry Hot Chocolate 🍪☕",
      price: 1,
      image: "/kit_img/IMG_9108.jpg",
      christmas: false,
      available: true,
      premium: true,
      boxContents: "0.8 kg cookies and 2 servings of Hot Chocolate.🍪☕",
      observations:
        "Upon request, the raspberry-flavored hot chocolate can be replaced with classic hot chocolate or vanilla-flavored hot chocolate. A mixer, few eggs and butter is needed to make this kit.",
      description:
        "A special kit for someone special, whether it's a gift🎁 or if you're baking together with a loved one. The dark red chocolate chip cookies contain drops of Ruby chocolate, which is the most unusual chocolate discovered in the last 80 years. Named Ruby after its deep pink hue, without any added flavors or colorants.🍫 The raspberry-flavored hot chocolate complements this exceptional kit both in appearance and taste.",
    },
    {
      id: 2,
      name: "Red Velvet Cookies with Ruby Chocolate Chips and Raspberry Hot Chocolate 🍪☕",
      price: 1,
      image: "/kit_img/IMG_9114.jpg",
      christmas: false,
      available: true,
      premium: false,
      boxContents: "0.8 kg cookies and 2 servings of Hot Chocolate.🍪☕",
      observations:
      "A mixer, few eggs and butter is needed to make the cookies and milk for Hot Chocolate.",
      description:
        "A special kit for someone special, whether it's a gift🎁 or if you're baking together with a loved one. The dark red chocolate chip cookies contain drops of Ruby chocolate, which is the most unusual chocolate discovered in the last 80 years. Named Ruby after its deep pink hue, without any added flavors or colorants.🍫 The raspberry-flavored hot chocolate complements this exceptional kit both in appearance and taste.",
    },
    {
      id: 3,
      name: "Coffee Cookies and Vanilla Hot Chocolate 🍪☕",
      price: 1,
      image: "/kit_img/IMG_9123.jpg",
      christmas: false,
      available: false,
      premium: false,
      boxContents: "0.8 kg cookies and 2 servings of Hot Chocolate.🍪☕",
      observations:
      "A mixer, few eggs and butter is needed to make the cookies and milk for Hot Chocolate.",
      description:
        "Do you like brownie-textured cookies, rich in chocolate flavor, and with a coffee aroma? ☕🍫 Then this kit is for you! If you want to create a gift kit for a cookie and coffee lover, this is the kit I recommend. 🎁 I promise that the cookies you'll get will impress with their texture, taste, and appearance. They are soft, chocolatey (not overly sweet), not very sweet, and have a subtle coffee flavor. 🤤",
    },
    {
      id: 4,
      name: "Coconut Cookies and Raspberry Hot Chocolate 🍪☕",
      price: 1,
      image: "/kit_img/IMG_9134.jpg",
      christmas: false,
      available: true,
      premium: false,
      boxContents: "0.8 kg cookies and 2 servings of Hot Chocolate.🍪☕",
      observations:
        "Few eggs and butter is needed to make the cookies and milk for Hot Chocolate.",
      description:
        "A special kit for someone special💌, whether it's a gift🎁 or you'll bake together with a loved one.🥰 Cookies with a delicate coconut flavor 🥥 and pink chocolate glaze 🍫 - Ruby, which is the most unusual chocolate discovered in the last 80 years. Named 'Ruby' after its deep pink hue, without added flavors or colorants.🥰 Raspberry-flavored hot chocolate complements this exceptional kit in terms of both appearance and taste.",
    },
    {
      id: 5,
      name: "Chocolate Chips Cookies and mug - SĂRBĂTORI LINIȘTITE 🍪☕",
      price: 1,
      image: "/kit_img/Christmas/ch_chips_mug1.jpg",
      christmas: true,
      available: false,
      premium: true,
      boxContents: "1 kg cookies and a special mug from my very special friend, Irina from Urban Tale.🍪☕",
      observations:
        "Few eggs and butter is needed to make this kit.",
      description:
        "Who doesn't love chocolate chips? We'd probably eat them in anything: pastries, muffins, cakes, but especially in cookies. 🤤 I recommend this kit for classic cookie lovers, without too many flavors or being too complicated to make.",
    },
    {
      id: 6,
      name: "Chocolate Chips Cookies and mug - LET'S MAKE BUNUL SIMȚ COOL AGAIN 🍪☕",
      price: 1,
      image: "/kit_img/Christmas/ch_chips_mug2.jpg",
      christmas: true,
      available: true,
      premium: true,
      boxContents: "1 kg cookies and a special mug from my very special friend, Irina from Urban Tale. 🍪☕",
      observations:
      "Few eggs and butter is needed to make this kit.",
      description:
        "Who doesn't love chocolate chips? We'd probably eat them in anything: pastries, muffins, cakes, but especially in cookies. 🤤 I recommend this kit for classic cookie lovers, without too many flavors or being too complicated to make.",
    },
    {
      id: 7,
      name: "Hot Chocolate and mug - SĂRBĂTORI LINIȘTITE ☕",
      price: 1,
      image: "/kit_img/Christmas/hot_chocolate1.jpg",
      christmas: true,
      available: false,
      premium: true,
      boxContents: "2 servings of Hot Chocolate and a mug from my very special friend, Irina from Urban Tale. ☕",
      observations:
      "You need milk to make this kit.",
      description:
      "Hot chocolate on a cold day or night? What a delight! Make it for yourself or someone dear to you.",
    },
    {
      id: 8,
      name: "Hot Chocolate and mug - LET'S MAKE BUNUL SIMȚ COOL AGAIN ☕",
      price: 1,
      image: "/kit_img/Christmas/hot_chocolate2.jpg",
      christmas: true,
      available: false,
      premium: true,
      boxContents: "2 servings of Hot Chocolate and a mug from my very special friend, Irina from Urban Tale. ☕",
      observations:
      "You need milk to make this kit.",
      description:
      "Hot chocolate on a cold day or night? What a delight! Make it for yourself or someone dear to you.",
    },
    {
      id: 9,
      name: "Chocolate Crickles Cookies and 2 servings of Hot Chocolate 🍪☕",
      price: 1,
      image: "/kit_img/Christmas/IMG_8160_1x1_3.jpg",
      christmas: true,
      available: true,
      premium: false,
      boxContents: "1 kg cookies and and 2 servings of Hot Chocolate.🍪☕",
      observations:
      "A mixer, few eggs and butter is needed to make the cookies and milk for Hot Chocolate.",
      description:
       "These cookies boast a rich, fudgy interior that's as soft as a cloud, with a satisfyingly chewy exterior adorned in a mesmerizing, crackled pattern. Coated in a delicate dusting of powdered sugar, they glisten like freshly fallen snow.",
    },
    {
      id: 10,
      name: "White Chocolate Cookies and 2 servings of Hot Chocolate 🍪☕",
      price: 1,
      image: "/kit_img/IMG_8139_1x1_3.jpg",
      christmas: false,
      available: true,
      premium: false,
      boxContents: "1 kg cookies and and 2 servings of Hot Chocolate.🍪☕",
      observations:
      "Few eggs and butter is needed to make the cookies and milk for Hot Chocolate.",
      description:
       "If you are not a fan of classic chocolate chips, maybe you should try white ones. I recommend this kit for classic cookie lovers, without too many flavors or being too complicated to make.",
    },

  ];


  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const productIndex = basket.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // If the product is already in the basket, update its quantity
      const updatedBasket = [...basket];
      updatedBasket[productIndex].quantity += 1;
      setBasket(updatedBasket);
    } else {
      // If the product is not in the basket, add it with quantity 1
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  const delefeFromBasket = (index) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);
  };

  return (
   <div id="kit_page_leftside">
      <div id="kitDescriprion">
        <img id="kitImageBig" src="./kit_img/IMG_8551.jpg" alt="Kit Box" />
        <div id="description">
          During the pandemic, I created these cookies making kits. The idea
          came to me as a result of realizing that many people would like to
          bake cookies but struggle to follow a recipe from start to finish.{" "}
          <span className="kitAdvantage">
            These kits will help you to bake delicious cookies.
          </span>{" "}
          In the box you have all the ingredients you need, pre-measured and
          ready to go. Just mix and bake, and you'll have freshly baked cookies
          in no time!
          <br />
          <br />
          <p className="kitAdvantage">Why should i buy it?</p>
          <p>
            - Perfect gift for someone dear who appreciates fresh and
            high-quality pastry products but at the same time loves to bake.
          </p>{" "}
          <p>
            - You can create a pleasant memory with children by turning this
            baking process into a joyful and unforgettable one.
          </p>
          <p>
            - Good idea to give them as Christmas presents for employees. <br />
            <span id="italicDescription">*Special offers for companies!</span>
          </p>{" "}
          <p>
            - Make it for yourself!
          </p>
        </div>
      </div>
      <h4 id="notAvailableKit">
            For the moment, these kits are not available. If you are interested and would like to know when will they be available, please <span> <a href="./contact">contact</a></span> us.{" "}
          </h4>
      <Container>
        <Row>
          {products.map((product) => (
            <Col lg={6} md={8} sm={12} key={product.id}>
              <KitDetails
                key={product.id}
                product={product}
                onAddToBasket={addToBasket}
              />
            </Col>
          ))}
        </Row>
        <Basket basket={basket} onDeleteFromBasket={delefeFromBasket} />
      </Container>
      </div>
  );
}

export default Kit;
