import React from 'react';
import "./index.css";

import Homepage from "./routes/Home";
import {Route, Routes} from "react-router-dom"; 
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Homepage />} />
          
    </Routes></>
  
  );
}

export default App;
