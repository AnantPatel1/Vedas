import Link from "next/link";
import useInput from "../../Hooks/use-input";
import styles from "../common.module.css";
import { BsArrowLeft } from "react-icons/bs";
import theme from "../../Assets/MOkx.png";
import Image from "next/image";
export default function SignUp() {
  let EnteredConfirmPasswordHasError = false;
  const {
    value: EnteredName,
    isValid: EnteredNameIsValid,
    haserror: EnteredNameHasError,
    enteredValueHandler: EnteredNameHandler,
    InputBlurHandler: InputNameBlurHandler,
    resetForm: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredpassword,
    isValid: enteredpasswordValid,
    haserror: EnteredPasswordHasError,
    enteredValueHandler: enteredpasswordHandler,
    InputBlurHandler: PasswordInputBlurHandler,
    resetForm: resetPasswordInput,
  } = useInput((value) => value.length > 8);

  const {
    value: enteredemail,
    isValid: enteredemailValid,
    haserror: EnteredEamilHasError,
    enteredValueHandler: enteredemailHandler,
    InputBlurHandler: EmailInputBlurHandler,
    resetForm: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  let formValid = false;
  const {
    value: enteredconfirmPassword,
    isValid: confirmPasswordisValid,
    resetForm: resetconfirmPassword,
    enteredValueHandler: enteredconfirmPasswordHandler,
  } = useInput((value) => value.length > 8);
  if (enteredconfirmPassword != enteredconfirmPassword) {
    EnteredConfirmPasswordHasError = true;
  }
  if (enteredconfirmPassword === enteredconfirmPassword) {
    EnteredConfirmPasswordHasError = false;
  }

  if (
    EnteredNameIsValid &&
    enteredemailValid &&
    enteredpasswordValid &&
    confirmPasswordisValid
  ) {
    formValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enterednameValid || !enteredemailValid) {
      return;
    }
    console.log(enteredname);

    resetPasswordInput();
    resetNameInput();
    resetEmailInput();
    resetconfirmPassword();
    // NameInputRef.current.value = "";
    // this useRef() method to empty the input box is not ideal as you cannot directly manipulate the DOM
  };
  const NameInputClass = EnteredNameHasError
    ? "name-control-invalid"
    : "form-control";
  const EmailInputClass = EnteredEamilHasError
    ? "email-control-invalid"
    : "form-control";
  const PasswordInputClass = EnteredPasswordHasError
    ? "password-control-invalid"
    : "form-control";
  const ConfirmPasswordInputClass = EnteredConfirmPasswordHasError
    ? "confpasssword-control-invalid"
    : "form-control";
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <BsArrowLeft
            style={{ margin: "40px 20px -20px 20px", fontSize: "20px" }}
          />
        </Link>
      </div>
      <div className={styles.themeContainer}>
        <Image
          className={styles.theme}
          src={theme}
          alt="Theme"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.loginContainer}>
        <header className={styles.header} style={{ marginBottom: "0px" }}>
          SignUp with Email
        </header>
        <div className={styles.description} style={{ marginBottom: "0" }}>
          Welcome back! Sign in using your social account or email to continue
          us
        </div>
      </div>
      <form className={styles.inputBox} onSubmit={formSubmitHandler}>
        <div className={`${styles[NameInputClass]}`}>
          <p style={{ marginBottom: "10px" }}>Your name</p>
          <input
            type="text"
            id="name"
            onChange={EnteredNameHandler}
            onBlur={InputNameBlurHandler}
            value={EnteredName}
            style={{ height: "20px" }}
            className={styles.inputbtn}
          />
          {EnteredNameHasError && (
            <p style={{ color: "red", fontSize: "10px", float: "right" }}>
              Enter the valid name
            </p>
          )}
        </div>
        <div className={`${styles[EmailInputClass]}`}>
          <p style={{ marginBottom: "10px" }}>Your email</p>
          <input
            type="text"
            id="email"
            onChange={enteredemailHandler}
            onBlur={EmailInputBlurHandler}
            value={enteredemail}
            style={{ height: "20px" }}
            className={styles.inputbtn}
          />
          {EnteredEamilHasError && (
            <p style={{ color: "red", fontSize: "10px", float: "right" }}>
              Enter valid email
            </p>
          )}
        </div>
        <div className={`${styles[PasswordInputClass]}`}>
          <p>Password</p>
          <input
            type="password"
            id="password"
            onChange={enteredpasswordHandler}
            onBlur={EmailInputBlurHandler}
            value={enteredpassword}
            style={{ height: "20px" }}
            className={styles.inputbtn}
          />
          {EnteredPasswordHasError && (
            <p style={{ color: "red", fontSize: "10px", float: "right" }}>
              Enter valid Password
            </p>
          )}
        </div>
        <div className={`${styles[ConfirmPasswordInputClass]}`}>
          <p>Confirm Passward</p>
          <input
            type="password"
            id="confirmpassword"
            onChange={enteredconfirmPasswordHandler}
            onBlur={PasswordInputBlurHandler}
            value={enteredconfirmPassword}
            style={{ height: "20px" }}
            className={styles.inputbtn}
          />
          {EnteredConfirmPasswordHasError && (
            <p style={{ color: "red", fontSize: "10px", float: "right" }}>
              Enter valid Password
            </p>
          )}
        </div>
      </form>
      <div className={styles.signupbox} style={{ margin: "20px" }}>
        <Link disabled={!formValid} className={styles.link} href="/SignUp">
          Create an account
        </Link>
        <p>
          <Link
            href="/Login"
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
