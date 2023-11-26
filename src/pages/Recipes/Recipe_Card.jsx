import React from 'react';
import { Link } from 'react-router-dom';
import "./allrecipes.css";

const Recipe_Card = ({ name, image }) => {
  const urlFriendlyName = encodeURIComponent(name);
  
  return (
    <div className="recipe-card">
      <Link to={`recipe/${urlFriendlyName}`} className='recipe-link'>
        {/* <img src="/public/cakes_img/cake1.png" style={{"width" : "50%"}} alt="" /> */}
       <img src={image} id="cake_image"/>
        <h5 className='recipe-name'>{name}</h5>
      </Link>
    </div>
  );
};

export default Recipe_Card;
