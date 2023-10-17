import classes from "../step1/step1.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Step1 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.contain}>
      <div className={classes.first}>
        <div className={classes.details}>
          <div className={classes.heading} data-aos="fade-up">
            <h1>Personal info</h1>
              <p style={{ color: 'gray' }}>Please provide your name, email and phone number</p>
          </div>
          <form className={classes.form} data-aos="fade-up">
            <div className={classes.control}>
              <label>Name </label>
              <input
                type="text"
                required
                id="title"
                placeholder="e.g ladipo matthew"
              />
            </div>
            <div className={classes.control}>
              <label>Email Address</label>
              <input
                type="text"
                required
                id="title"
                placeholder="e.g adiolumics@gmail.com"
              />
            </div>
            <div className={classes.control}>
              <label>Phone Number</label>
              <input
                type="text"
                required
                id="title"
                placeholder="e.g +24312345789"
              />
            </div>
          </form>
        </div>
        <div className={classes.actions}>
          <a href="http://localhost:3000/step2-page">
            <button>Next</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Step1;
