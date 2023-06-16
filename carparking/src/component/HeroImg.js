import "./HeroImgStyles.css"
import React from 'react'
import introimg from "../assets/8.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
     <div className="mask">
     <img className="intro-img" src={introimg} alt=" IntroImg"/> 
     </div>
     <div className="content">
        <p>LET US KNOW WHAT YOU WANT...</p>
          <br></br>
        <div>
        <Link to="/ParkinNow" className= "btn">Park in Now</Link>
        <Link to="/ParkLater" className= "btn">Park Later</Link>
        <Link to="/DriveOut" className= "btn">Drive Out</Link>
        </div> 
      </div>
    </div>
  )
}

export default HeroImg
