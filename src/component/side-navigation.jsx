import { useLocation } from "react-router-dom";
import classes from "../component/side-nav.module.css";

const SideContent = (props) => {
  // const [step, setStep] = useState(0);
  const { pathname } = useLocation();
  console.log({ pathname });

  return (
    <div className={classes.side}>
      <div className={classes.sidenav}>
        <section>
          <h3
            style={{
              backgroundColor: pathname === "/" ? "white" : "",
              color: pathname === "/" ? "blue" : "",
            }}
          >
            1
          </h3>
          <div className={classes.texts}>
            <h6 className={classes.step1}>STEP1</h6>
            <p>YOUR INFO</p>
          </div>
        </section>
        <section>
          <h3
            style={{
              backgroundColor: pathname.includes(2) ? "white" : "",
              color: pathname.includes(2) ? "blue" : "",
            }}
          >
            2
          </h3>
          <div className={classes.texts}>
            <h6 className={classes.step2}>STEP2</h6>
            <p>SELECT PLANS</p>
          </div>
        </section>
        <section>
          <h3
            style={{
              backgroundColor: pathname.includes(3) ? "white" : "",
              color: pathname.includes(3) ? "blue" : "",
            }}
          >
            3
          </h3>
          <div className={classes.texts}>
            <h6 className={classes.step3}>STEP3</h6>
            <p>ADD ONS</p>
          </div>
        </section>
        <section>
          <h3
            style={{
              backgroundColor: pathname.includes(4) ? "white" : "",
              color: pathname.includes(4) ? "blue" : "",
            }}
          >
            4
          </h3>
          <div className={classes.texts}>
            <h6 className={classes.step4}>STEP4</h6>
            <p>SUMMRY</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SideContent;
