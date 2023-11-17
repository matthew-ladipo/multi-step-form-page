import { useState } from "react";
import Step5 from "../popUp/step5";
import BackDrop from "../popUp/backdrop";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import classes from "../step4/step4.module.css";
import { Link } from "react-router-dom";

const Step4 = () => {


  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [showModal, setShowmodal] = useState(false);

  function confirmChanges() {
    setShowmodal(true);
  }

  function closeBackdrop() {
    setShowmodal(false);
  }
  return (
    <div className={classes.total}>
      <div className={classes.finishing}>
        <div className={classes.title} data-aos="fade-left">
          <h1>Finishing Up</h1>
          <div className={classes.gray}>
            <p>please Check Well To Comfirm Your Options.</p>
          </div>
        </div>

        <div>
          <div className={classes.checkbox} data-aos="fade-up">
            <div className={classes.check1}>
              <span>
                <p>ARCADE(Yearly)</p>
                <Link to="/step2" className={classes.change}>change</Link>
              </span>
              <p className={classes.analysis}>+500$/yr</p>
            </div>

            <span>
              <div className={classes.options}>
                <h4>Large Space</h4>
                <p className={classes.analysis}>+35$/m</p>
              </div>
              <br />
              <div className={classes.options}>
                <h4>Online Service</h4>
                {/* <p className={classes.gray}>(Total)</p> */}
                <p className={classes.analysis}>+35$/m</p>

              </div>
            </span>
           
            <div className={classes.totals}>
              <span>
                <p>Total</p>
                <p className={classes.gray}>Per(Year)</p>
              </span>
              <p className={classes.analysis}>+920$/yr</p>
            </div>
          </div>
        </div>

        <div className={classes.navbtn3}>
          <h4 style={{ marginLeft: 45 }}>
            {" "}
            <Link to="/step3">Go Back</Link>
          </h4>
          <a onClick={confirmChanges}>
            <button>Confirm</button>
          </a>
        </div>
      </div>
      {showModal && <Step5 onCancel={closeBackdrop} />}
      {showModal && <BackDrop onCancel={closeBackdrop} />}
    </div>
  );
};

export default Step4;
