import React from "react"; 
import "./index.css";
import Home from "./routes/Home";
import Help from "./routes/Help";
import MyBookings from "./routes/MyBookings";
import{ Route, Routes} from "react-router-dom"
//import { useState, useEffect } from 'react';



function App() {
  //const [date, setDate] = useState(new Date());
  
  /*useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])*/

  return (
    
    
    
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/help" element={<Help />}/>
      <Route path="/myBookings" element={<MyBookings />}/>

      
    </Routes>
    </>

   
  );

  
}




export default App;
