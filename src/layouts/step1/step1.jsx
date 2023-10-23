import classes from "../step1/step1.module.css";
import { useState } from "react";
import Validate from "./validation/validate";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const [value, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  }); 

  const handleInput = (event) => {
    setFormValue({ ...value, [event.target.name]: event.target.value });
  };

  const [error, setErrors] = useState({});
  // const [nextState, setNetState] = useState() 

   const next = useNavigate(false);

 
  
    
    

  // };
  function defaultCall(event) {
    event.preventDefault();
    setErrors(Validate(value));
    if (value.name && value.email) {
      next('/step2')
    } else {
      alert('please input fields')
    }
  }

  // function handleClick () {
  //   next('/step2')
  // }

  return (
    <div className={classes.contain}>
      <div className={classes.first}>
        <div className={classes.details}>
          <div className={classes.heading}>
            <h1>Personal info</h1>
            <p style={{ color: "gray" }}>
              Please provide your name, email and phone number
            </p>
          </div>
          <form className={classes.form} onSubmit={defaultCall}>
            <div className={classes.control}>
              <label>Name </label>
              <input
                value={value.name}
                type="text"
                name="name"
                id="title"
                placeholder="e.g matthew"
                onChange={handleInput}
              />

              {error.name && (
                <p style={{ color: "red", fontSize: "10px" }}>{error.name}</p>
              )}
            </div>
            <div className={classes.control}>
              <label>Email Address</label>
              <input
                value={value.email}
                type="text"
                name="email"
                id="title"
                placeholder="e.g adiolumics@gmail.com"
                onChange={handleInput}
              />
              {error.email && (
                <p style={{ color: "red", fontSize: "10px" }}>{error.email}</p>
              )}
            </div>
            <div className={classes.control}>
              <label>Password</label>
              <input
                value={value.password}
                type="password"
                name="password"
                id="title"
                onChange={handleInput}
              />
              {error.password && (
                <p style={{ color: "red", fontSize: "10px" }}>
                  {error.password}
                </p>
              )}
            </div>
            <div className={classes.actions}>
              <button >Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;

/* import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    // Define your form fields here
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    if (formData.username && formData.password) {
      // Validation successful
      // Redirect to another page
      window.location.href = '/another-page'; // You can use your preferred routing method here
    } else {
      // Display validation errors or handle validation failure
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
*/