import React, { useState } from "react";
import "./FormToggle.css";
import axios from 'axios'

const FormToggle = () => {
    const [isRegister, setIsRegister] = useState(true);
  
    const toggleForm = () => {
      setIsRegister(!isRegister);
      const [name, setName] = useState()
      const [email, setEmail] = useState()
      const [password,setPassword] = useState()

      const handleSubmit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
      }
      
    };

  
    return (
      <div className="form-container">
        {isRegister ? (
          <form className="form">
            <h2>Register</h2>
            <label>
              Name
              <input type="text" placeholder="Enter Name" required 
              onChange = {(e) => setName(e.target.value)}/>
            </label>
            <label>
              Email
              <input type="email" placeholder="Enter Email" required
              onChange = {(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Password
              <input type="password" placeholder="Enter Password" required
              onChange = {(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit" className="btn">Register</button>
            <p>
              Already Have an Account?{" "}
              <button type="button" className="toggle-btn" onClick={toggleForm}>
                Login
              </button>
            </p>
          </form>
        ) : (
          <form className="form"
          onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
              Email
              <input type="email" placeholder="Enter Email" required />
            </label>
            <label>
              Password
              <input type="password" placeholder="Enter Password" required />
            </label>
            <button type="submit" className="btn">Login</button>
            <p>
              Don't Have an Account?{" "}
              <button type="button" className="toggle-btn" onClick={toggleForm}>
                Register
              </button>
            </p>
          </form>
        )}
      </div>
    );
  };
  
  export default FormToggle;