import React from "react"
import "./Home.css";
import Bg from "./bg.jpg";
import Product from "../Product-Components/Product";
import image1 from "../Product-Components/images/alexa.png";
import image2 from "../Product-Components/images/alexa-2.png";
import image3 from "../Product-Components/images/headboom.png";
import image4 from "../Product-Components/images/iphone.png";
import image5 from "../Product-Components/images/mac.png";
import image6 from "../Product-Components/images/xbox.png";
// import image7 from "../Product-Components/images/alexa.png";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={Bg} alt="" />

        <div className="home_row">
          <Product title="Alexa from Amazon Model 1: Certified Refurbished, Grey – Improved smart speaker with Alexa – Like new, backed with 1-year warranty" price={2500} image={image1} rating={5}/>
          <Product title="Amazon's Alexa Model 2: smart speaker brand in India with Alexa (Black)" price={1800} image={image2} rating={3} />
        </div>

        <div className="home_row">
          <Product title="Sony Head Boom: Wireless Extra Bass Headphones with 30 Hours Battery Life, Headset with mic for Phone Calls with Voice Assitant and 1 Year Warranty – (Black)" price={4200} image={image3} rating={4} />
          <Product title="iPhone se: New Apple iPhone 11 (64GB) - (Product) RED" price={60000} image={image4} rating={4}/>
          <Product title="X-Box: NVMe Expansion SSD for Xbox Series X|S (STJR1000400)" price={54000} image={image6} rating={5}/>
        </div>

        <div className="home_row">
          <Product className ="single-product-row" title="Mac Book air: MacBook Air (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 7-core GPU, 8GB RAM, 256GB SSD) - Space White" price={60000} image={image5} rating={5}/>
        </div>
      </div>
    </div>
  )
}

export default Home
