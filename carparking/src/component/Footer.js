import React from 'react'
import "./FooterStyles.css"
import Location from './Location'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className='left'>
                    <div className='contactUs'>
                        <h2>Contact Us</h2>
                        <div className='call'>
                            <p><h7>Call us at</h7></p>
                            <h4><FontAwesomeIcon icon={faPhone} beatFade className='call-icon' />
                                +91 223456789</h4>
                        </div>
                        <div className='Email'>
                            <p><h7>Mail us at</h7></p>
                            <h4><FontAwesomeIcon icon={faEnvelope} beat className='mail-icon' />
                                asssuu@gmail.com</h4>
                        </div>

                    </div>

                </div>
                <div className='right'>
                    <div className='location'><h2>Location</h2></div>
                    <div className='maps'><Location /> </div>              
                </div>
            </div>

        </div>
    )
}

export default Footer;

