import React from 'react'
import "./HeroParkLaterStyles.css"
import introimg from "../assets/Carparkin_Lot.jpg";
import Form from './Form';
const HeroParkLater = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introimg} alt=" IntroImg" />
      </div>
      <div className="content-later">
        <div className='forms'>
          <Form />
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default HeroParkLater

