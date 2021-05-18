import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../style/PhoneConfirmation.module.css";
import PhoneInput from "react-phone-number-input";

const PhoneConfirmation = () => {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h1>Enter Your Phone Number</h1>
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={(data) => setValue(data)}
      />
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy.</span> Thanks
      </p>
      <Link
        to="/code_confirmed"
        exact
        className="primaryBtn d-flex align-items-center"
        style={{ marginTop: "1.5em" }}
      >
        Next
        <img src="/images/nextArrowIcon.svg" alt="->" className="ml-1" />
      </Link>
    </div>
  );
};

export default PhoneConfirmation;
