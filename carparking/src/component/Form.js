import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./FormStyles.css"
function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Enter your name:</h3>
      <label>
      <input className="box"
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <h3>Enter your Phone No:</h3>
      <label>
        <input className="box"
          type="text" 
          name="phone_no" 
          value={inputs.phone_no || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <h3>Enter your Email </h3>
      <label>
      <input className="box"
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <h3>Enter your Vehicle No:</h3>
      <label>
      <input className="box"
        type="text" 
        name="veh_no" 
        value={inputs.veh_no || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      
      <button className="btn">Submit</button>
    </form>
  )
}

export default Form;