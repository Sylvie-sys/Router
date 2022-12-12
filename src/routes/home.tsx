import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import SideNav from "../components/sid-nav";
import "./home.css";
import rafiki from "../img/rafiki.jpg"

const Home = () => {
   
    return <div>
       <Header/>
       <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img className="img" src={rafiki} />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home</h1>
            <p>
             <h2>Welcome to our page  it's okay to share your view</h2>

            </p>
          </div>
        </div>
      </div>
    </div>
    
</div>

}
export default Home;