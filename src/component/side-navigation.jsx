import classes from "../component/side-nav.module.css";

import { useState } from "react";

const SideContent = () => {
  const [step, setStep] = useState(0);

   function secStep() {
     setStep(1);
   }


  return (
    <div className={classes.side}>
      <div className={classes.sidenav}>
        <section>
          <h3
            style={{
              backgroundColor: step === 0 ? "white" : step == 1,
              color: step === 0 ? "blue" : step == 1,
            }}
          >
            1
          </h3>
          <div className={classes.texts}>
            <h5 className={classes.step1}>STEP1</h5>
            <p>YOUR INFO</p>
          </div>
        </section>
        <section onClick={secStep}>
          <h3 style={{ backgroundColor: step === 1 ? "white" : step == 0 }}>
            2
          </h3>
          <div className={classes.texts}>
            <h5 className={classes.step2}>STEP2</h5>
            <p>SELECT PLANS</p>
          </div>
        </section>
        <section>
          <h3 style={{ backgroundColor: step === 2 ? "white" : step == 0 }}>
            3
          </h3>
          <div className={classes.texts}>
            <h5 className={classes.step3}>STEP3</h5>
            <p>ADD ONS</p>
          </div>
        </section>
        <section>
          <h3 style={{ backgroundColor: step === 4 ? "white" : step == 0 }}>
            4
          </h3>
          <div className={classes.texts}>
            <h5 className={classes.step4}>STEP4</h5>
            <p>SUMMRY</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SideContent;
