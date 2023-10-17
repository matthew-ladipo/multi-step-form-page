import classes from "./step5.module.css";
import img1 from '../../image/icon-thank-you.svg';


const Step5 = (props) => {
  function closeBackdrop() {
    props.onCancel();
  }
  
  return (
    <div >
     
      <div className={classes.final}>
        <div className={classes.pop}>
      <img src={img1} alt="svg5" className={classes.img1} />
      </div>
        <div className={classes.content}>
          <h1>Thank You</h1>
          <p>
            Thanks for comfirming your subscribtin! We hope you have fun using
            our plaform If you ever need support, please feel free to email us
            at adiolumics@gmail.com
          </p>
        </div>
        <br />
        <button onClick={closeBackdrop}><a href="http://localhost:3000">Ok</a></button>
      </div>
    </div>
  );
};

export default Step5;
