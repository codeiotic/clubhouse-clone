import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../style/PhoneConfirmation.module.css";

const PhoneConfirmation = () => {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <h1>Enter Your Phone Number</h1>
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy.</span> Thanks
      </p>
    </div>
  );
};

export default PhoneConfirmation;
