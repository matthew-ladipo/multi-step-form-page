import classes from "../step3/step3.module.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


import { useEffect } from "react";

const Step3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
      <div className={classes.adds}>
        <div className={classes.mainadds}>
        <div className={classes.title} >
          <h1>Pick Add-Ons</h1>
          <div className={classes.gray}>
            <p>please provide your name,email and password.</p>
          </div>
        </div>
        <div className={classes.select}>
          <label className={classes.checkbox} >
            <input type="checkbox" />
            <div className={classes.span}>
              <h5>Online Service</h5>
              <p className={classes.gray}>Access to online game</p>
            </div >
            <h5 className={classes.analysis}>+10$/m</h5>
          </label>

          <label className={classes.checkbox} >
            <input type="checkbox" />
            <div className={classes.span}>
              <h5>Large Space</h5>
              <p className={classes.gray}>Extract 1TB of Cloud space</p>
            </div >
            <h5 className={classes.analysis}>+25$/m</h5>
          </label>

          <label className={classes.checkbox} >
            <input type="checkbox" />
            <div className={classes.span}>
              <h5>Customizable Profile</h5>
              <p className={classes.gray}>custom theme on your Profile</p>
            </div >
            <h5 className={classes.analysis}>+50$/m</h5>
          </label>
          <div className={classes.navbtn3}>
            <h5>
              {" "}
              <Link to='/step2'><a>Go Back</a></Link>
            </h5>

            <Link to='/step4'><button>
            Next
            </button></Link>
           
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default Step3;
