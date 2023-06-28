import React, { Component } from 'react'
import"./Hero2Styles.css"
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Parkin_Table from './Parkin_Table';
class Hero2 extends Component {
  render(){
    return (
        
      <div className='hero-img1'>
          <div className='heading1'>
            <FontAwesomeIcon icon={faCar} className='icon'/>
            <div className='heading-title'><h1>{this.props.heading}</h1></div>  
            <Parkin_Table/>         
          </div>
        
      </div>
    );
  }
  
}

export default Hero2