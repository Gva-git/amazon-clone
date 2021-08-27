import React from "react"
import "./Home.css";
import Bg from "./4000603.jpg";
import Product from "../Product-Components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={Bg} alt="Background" />

        <div className="home_row">
          <Product />
        </div>

        <div className="home_row">

        </div>

        <div className="home_row">

        </div>
      </div>
    </div>
  )
}

export default Home
