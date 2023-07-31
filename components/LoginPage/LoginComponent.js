// LoginComponent - React Component for Login Page

import Link from "next/link";
import useInput from "../../Hooks/use-input";
import styles from "../../styles/common.module.css";
import { BsArrowLeft } from "react-icons/bs";
import Icons from "../Reusable/Icons";
import Option from "../Reusable/Option";
import FormField from "./FromFeild"; // Assuming there's a typo here and the component name is "FormField".

export default function LoginComponent() {
  // State and Input Handlers for email and password inputs
  const {
    value: enteredpassword,
    isValid: enteredpasswordValid,
    enteredValueHandler: enteredpasswordHandler,
    InputBlurHandler: PasswordInputBlurHandler,
    resetForm: resetNameInput,
  } = useInput((value) => value.length > 5);

  const {
    value: enteredemail,
    isValid: enteredemailValid,
    enteredValueHandler: enteredemailHandler,
    InputBlurHandler: EmailInputBlurHandler,
    resetForm: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  // Check if both email and password inputs are valid to enable form submission
  let formValid = false;
  if (enteredpasswordValid && enteredemailValid) {
    formValid = true;
  }

  // Input fields configuration for email and password
  const inputFields = [
    {
      id: "email",
      label: "Your email",
      value: enteredemail,
      type: "email",
      isValid: enteredemailValid,
      valueChangeHandler: enteredemailHandler,
      inputBlurHandler: EmailInputBlurHandler,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      value: enteredpassword,
      isValid: enteredpasswordValid,
      valueChangeHandler: enteredpasswordHandler,
      inputBlurHandler: PasswordInputBlurHandler,
    },
  ];

  // Form submit handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Check if the form is valid before proceeding
    if (!enterednameValid || !enteredemailValid) {
      return;
    }

    // Reset input fields after successful form submission
    resetNameInput();
    resetEmailInput();
  };

  // JSX rendering for the Login component
  return (
    <div className={styles.container}>
      {/* Back button to navigate to home page */}
      <div>
        <Link href="/">
          <BsArrowLeft style={{ margin: "40px 20px", fontSize: "20px" }} />
        </Link>
      </div>
      {/* Login container */}
      <div className={styles.loginContainer}>
        <header className={styles.header}>Log in to Mokx</header>
        <div className={styles.description}>
          Welcome back! Sign in using your social account or email to continue
          us
        </div>
        <div>
          {/* Icons component */}
          <Icons borderColor="black" Facolor="blue" ApColor="black" />
        </div>
      </div>
      {/* Option component */}
      <div style={{ width: "100%" }}>
        <Option dcolor="#69235b" pcolor="#69235b99" />
      </div>
      {/* Login form */}
      <form className={styles.inputBox} onSubmit={formSubmitHandler}>
        {inputFields.map((field) => (
          <FormField key={field.id} {...field} />
        ))}
      </form>
      {/* Signup and Forgot Password links */}
      <div className={styles.signupbox}>
        {formValid ? (
          <Link disabled={!formValid} className={styles.link} href="/SignUp">
            Login
          </Link>
        ) : (
          <p className={`${styles.formInvalid} ${styles.link}`}>Login</p>
        )}
        <p>
          <Link
            href="/"
            style={{
              color: "#FFC746",
              textDecoration: "none",
              marginLeft: "2px",
            }}
          >
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
}
