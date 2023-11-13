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

  const next = useNavigate(false);

  function defaultCall(event) {
    event.preventDefault();
    setErrors(Validate(value));
    if (value.name && value.email && value.password) {
      next("/step2");
    } 
    else {
      alert("please input fields");
    }
  }

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
                 style={{  }}
              />

              {error.name && (
                <p style={{ color: "red", fontSize: "10px", fontWeight: 400 }}>{error.name}</p>
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
              <button>Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;
