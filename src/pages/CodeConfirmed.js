import { Link } from "react-router-dom";
import style from "../style/PhoneConfirmation.module.css";

const CodeConfirmed = () => {
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/get_username" className={style.backBtn}>
        <img src="/images/arrow.png" alt="<-" />
      </Link>
      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
        <p className="mt-2">
          Didn't receive it? <span>Tap to resend.</span>
        </p>
      </div>
      <Link
        exact
        to="allow_notification"
        className="primaryBtn flex align-items-center"
        style={{ marginTop: "1.5em" }}
      >
        Next <img src="/images/nextArrowIcon.svg" alt="->" className="ml-1" />
      </Link>
    </div>
  );
};

export default CodeConfirmed;
