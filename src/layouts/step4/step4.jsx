import { useState } from "react";
import Step5 from "../popUp/step5";
import BackDrop from "../popUp/backdrop";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import classes from '../step4/step4.module.css';
import svg1 from '../../image/bg-sidebar-desktop.svg'

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
      <div className={classes.title} data-aos="fade-left">
          <h1>Finishing Up</h1>
          <div className={classes.gray}>
            <p>please Check Well To Comfirm Your Options.</p>
          </div>
        </div>
        <div>
          <label className={classes.checkbox} data-aos="fade-up">
            <span>
              <h3>ARCADE(Yearly)</h3>
            </span>
            <h5 className={classes.analysis}>+500$/yr</h5>
          </label>

          <label className={classes.checkbox} data-aos="fade-up">
            <span>
              <h4>Large Space</h4>
              <h4>Online Service</h4>
              <p className={classes.gray}>(Total)</p>
            </span>
            <h5 className={classes.analysis}>+35$/m</h5>
          </label>

          <label className={classes.checkbox} data-aos="fade-up">
            <span>
              <h3>Total</h3>
              <p className={classes.gray}>Per(Year)</p>
            </span>
            <h5 className={classes.analysis}>+920$/yr</h5>
          </label>
        </div>

        <div className={classes.navbtn3}>
          <h4 style={{ marginLeft: 45 }}>
            {" "}
            <a href="http://localhost:3000/step3-page">Go Back</a>{" "}
          </h4>
          <a onClick={confirmChanges}>
          <button >
          Confirm
          </button>
          </a>
        </div>

        {showModal && <Step5 onCancel={closeBackdrop} />}
        {showModal && <BackDrop onCancel={closeBackdrop} />}
      </div>
    
  );
};

export default Step4;


