import classes from "../step3/step3.module.css"
import Aos from "aos";
import "aos/dist/aos.css";


import { useEffect } from "react";

const Step3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
      <div className={classes.adds}>
        <div className={classes.mainadds}>
        <div className={classes.title} data-aos="fade-left">
          <h1>Pick Add-Ons</h1>
          <div className={classes.gray}>
            <p>please provide your name,email and password.</p>
          </div>
        </div>
        <div>
          <div className={classes.checkbox} data-aos="fade-right">
            <input type="checkbox" />
            <span>
              <h4>Online Service</h4>
              <p className={classes.gray}>Access to online game</p>
            </span>
            <h5 className={classes.analysis}>+10$/m</h5>
          </div>

          <div className={classes.checkbox} data-aos="fade-right">
            <input type="checkbox" />
            <span>
              <h4>Large Space</h4>
              <p className={classes.gray}>Extract 1TB of Cloud space</p>
            </span>
            <h5 className={classes.analysis}>+25$/m</h5>
          </div>

          <div className={classes.checkbox} data-aos="fade-right">
            <input type="checkbox" />
            <span>
              <h4>Customizable Profile</h4>
              <p className={classes.gray}>custom theme on your Profile</p>
            </span>
            <h5 className={classes.analysis}>+50$/m</h5>
          </div>
          <div className={classes.navbtn3}>
            <h4>
              {" "}
              <a href="http://localhost:3000/step2">Go Back</a>{" "}
            </h4>
            <a href="http://localhost:3000/step4">
            <button>
            Next
            </button>
            </a>
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default Step3;
