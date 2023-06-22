
import React from "react"; 
import "./index.css";
import Home from "./routes/Home";
import Help from "./routes/Help";
import MyBookings from "./routes/MyBookings";
import DriveOut from "./routes/DriveOut";
import{ Route, Routes} from "react-router-dom"
//import { useState, useEffect } from 'react';
function App() {

  return (
    
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/help" element={<Help />}/>
      <Route path="/myBookings" element={<MyBookings />}/>
      <Route path="/DriveOut" element={<DriveOut />}/>
    </Routes>
    </>

   

  );

  
}




export default App;
