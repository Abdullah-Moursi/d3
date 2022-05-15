import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import styles from "../styles/SignupForm.module.scss";

const SignupForm = () => {
  const navigate = useNavigate();

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
    fullName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Full name is required"),
    phoneNumber: Yup.string()
      .min(10, "Phone number must be at least 10 numbers")
      .required("Phone number is required"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });
  
  return (
    <Formik
      initialValues={{
        email: "",
        confirmPassword: "",
        password: "",
        fullName: "",
        phoneNumber: "",
        acceptTerms: false,
      }}
      validationSchema={validate}
      onSubmit={() => {
        navigate("/chartBar");
      }}
    >
      {(formik) => (
        <div className={styles.signupForm}>
          <div className={styles.signupForm__contents}>
            <h2 className="my-4 font-weight-bold .display-4">
              Create an account
            </h2>
            <Form>
              <TextField label="Your email address" name="email" type="email" />
              <TextField
                label="Your password"
                name="password"
                type="password"
              />
              <TextField
                label="Confirm your password"
                name="confirmPassword"
                type="password"
              />
              <TextField label="Your full name" name="fullName" type="text" />
              <TextField
                style={{ maxWidth: "45%" }}
                label="Your phone number"
                name="phoneNumber"
                type="number"
              />
              <div className={styles.signupForm__checkBoxContainer}>
                <Field type="checkbox" name="acceptTerms" className="mb-2" />
                <label htmlFor="acceptTerms">
                  I read and agreed to Terms and Conditions
                </label>
              </div>
              <ErrorMessage
                name="acceptTerms"
                component="div"
                className="error"
                style={{ color: "red" }}
              />
              <div>
                <button
                  style={{ backgroundColor: "#33ADFF" }}
                  className="btn mt-3"
                  type="submit"
                >
                  <span
                    style={{
                      padding: "0.5em 3em",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Create account
                  </span>
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignupForm;
