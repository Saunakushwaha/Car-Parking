import "./NavbarStyles.css"
import React, { useState, useEffect}  from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const [date, setDate] = useState(new Date());
  
   useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/">
        <h1>ParkEaze</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            
            <li>
                <Link to="/myBookings">My Bookings</Link>
            </li>
            <li>
                <Link to="/help">Help</Link>
            </li>
            <li>
            <p className='clock'>
              {date.toLocaleTimeString()}
            </p>
            </li>
         </ul>
         <div className="hamburger" onClick={handleClick}>
            {click ?(
            <FaTimes size={20} style={{ color:"#fff"}}/> 
            ) :(
            <FaBars size={20} style={{ color:"#fff"}}/> )}
         </div>
    </div>
  )
}

export default Navbar