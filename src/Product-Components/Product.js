import React from "react";
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';
// import image1 from "./images/alexa.png";
// import image2 from "./alexa-2";
// import image3 from "./headboom"
// import image4 from "./iphone"
// import image5 from "./mac"
// import image6 from "./xbox"


function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">

      <div className="product_info">
        <p className="">{title}</p>
        <p className="product_price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating).fill().map((_, i) => (
            <p><StarIcon /></p>
          ))}
        </div>
      </div>

      <div className="product_rating">
        <img className="product-img" src={image} alt=""/>
        <button className="add-btn">Add to cart</button>
      </div>

    </div>
  )
}

export default Product
