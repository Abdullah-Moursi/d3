import React from "react";
import styles from "../styles/SignupSidebar.module.scss";
import bg from "../assets/images/bg.png";

const SignupSideBar = () => {
  return (
    <div className={styles.signupSideBar}>
      <div style={{ maxHeight: "66%" }}>
        <img src={bg} alt="bg" className={styles.signupSideBar__image} />
      </div>
      <div className={styles.signupSideBar__description}>
        <h1>Choose a date range</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur <br />  Accusamus
          voluptate sapiente voluptatum.
        </p>
      </div>
    </div>
  );
};

export default SignupSideBar;
