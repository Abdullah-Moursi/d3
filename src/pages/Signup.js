import React from "react";
import { SignupForm, SignupSideBar } from "../components";
import styles from "../styles/Signup.module.scss";

const Signup = () => {
  return (
    <div className={styles.signupPage}>
      <SignupSideBar />
      <SignupForm />
    </div>
  );
};

export default Signup;
