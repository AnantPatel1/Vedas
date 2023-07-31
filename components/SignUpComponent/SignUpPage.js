import React from "react";
import useInput from "../../Hooks/use-input";
import styles from "../../styles/common.module.css";

const SignUpForm = () => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const isPasswordValid = (value) => value.length > 8;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    enteredValueHandler: enteredNameHandler,
    InputBlurHandler: inputNameBlurHandler,
    resetForm: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    enteredValueHandler: enteredEmailHandler,
    InputBlurHandler: inputEmailBlurHandler,
    resetForm: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    enteredValueHandler: enteredPasswordHandler,
    InputBlurHandler: inputPasswordBlurHandler,
    resetForm: resetPasswordInput,
  } = useInput(isPasswordValid);

  const {
    value: enteredConfirmPassword,
    isValid: confirmPasswordIsValid,
    resetForm: resetConfirmPassword,
    enteredValueHandler: enteredConfirmPasswordHandler,
  } = useInput(isPasswordValid);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // Perform the sign-up logic here with the form data
    // console.log("Form submitted!");
    // console.log("Name:", enteredName);
    // console.log("Email:", enteredEmail);
    // console.log("Password:", enteredPassword);
    // console.log("Confirm Password:", enteredConfirmPassword);

    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetConfirmPassword();
  };

  // Add classes for styling the input fields based on validation errors
  const nameInputClass = enteredNameHasError
    ? "name-control-invalid"
    : "form-control";
  const emailInputClass = enteredEmailHasError
    ? "email-control-invalid"
    : "form-control";
  const passwordInputClass = enteredPasswordHasError
    ? "password-control-invalid"
    : "form-control";
  const confirmPasswordInputClass =
    enteredPassword !== enteredConfirmPassword
      ? "confpassword-control-invalid"
      : "form-control";

  return (
    <form className={styles.inputBox} onSubmit={formSubmitHandler}>
      <div className={styles[nameInputClass]}>
        <p style={{ marginBottom: "10px" }}>Your name</p>
        <input
          type="text"
          id="name"
          onChange={enteredNameHandler}
          onBlur={inputNameBlurHandler}
          value={enteredName}
          style={{ height: "20px" }}
          className={styles.inputbtn}
        />
        {enteredNameHasError && (
          <p style={{ color: "red", fontSize: "10px", float: "right" }}>
            Enter a valid name
          </p>
        )}
      </div>
      <div className={styles[emailInputClass]}>
        <p style={{ marginBottom: "10px" }}>Your email</p>
        <input
          type="text"
          id="email"
          onChange={enteredEmailHandler}
          onBlur={inputEmailBlurHandler}
          value={enteredEmail}
          style={{ height: "20px" }}
          className={styles.inputbtn}
        />
        {enteredEmailHasError && (
          <p style={{ color: "red", fontSize: "10px", float: "right" }}>
            Enter a valid email
          </p>
        )}
      </div>
      <div className={styles[passwordInputClass]}>
        <p>Password</p>
        <input
          type="password"
          id="password"
          onChange={enteredPasswordHandler}
          onBlur={inputPasswordBlurHandler}
          value={enteredPassword}
          style={{ height: "20px" }}
          className={styles.inputbtn}
        />
        {enteredPasswordHasError && (
          <p style={{ color: "red", fontSize: "10px", float: "right" }}>
            Password must be at least 8 characters long
          </p>
        )}
      </div>
      <div className={styles[confirmPasswordInputClass]}>
        <p>Confirm Password</p>
        <input
          type="password"
          id="confirmpassword"
          onChange={enteredConfirmPasswordHandler}
          value={enteredConfirmPassword}
          style={{ height: "20px" }}
          className={styles.inputbtn}
        />
        {enteredPassword !== enteredConfirmPassword && (
          <p style={{ color: "red", fontSize: "10px", float: "right" }}>
            Passwords do not match
          </p>
        )}
      </div>
    </form>
  );
};
export default SignUpForm;
