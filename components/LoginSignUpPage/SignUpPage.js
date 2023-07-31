import Link from "next/link";
import useInput from "../../Hooks/use-input";
import styles from "../../styles/common.module.css";
import { BsArrowLeft } from "react-icons/bs";
import theme from "../../Assets/Logo.png";
import Image from "next/image";
import FormField from "./FromFeild";
export default function SignUp() {
  let EnteredConfirmPasswordHasError = false;
  let formValid = false;
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
  } = useInput((value) => value.length > 5);

  const {
    value: enteredemail,
    isValid: enteredemailValid,
    haserror: EnteredEamilHasError,
    enteredValueHandler: enteredemailHandler,
    InputBlurHandler: EmailInputBlurHandler,
    resetForm: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredconfirmPassword,
    isValid: confirmPasswordisValid,
    resetForm: resetconfirmPassword,
    enteredValueHandler: enteredconfirmPasswordHandler,
  } = useInput((value) => value.length > 5);
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
  const inputFields = [
    {
      id: "name",
      label: "Your name",
      type: "text",
      value: EnteredName,
      isValid: EnteredNameIsValid,
      hasError: EnteredNameHasError,
      valueChangeHandler: EnteredNameHandler,
      inputBlurHandler: InputNameBlurHandler,
    },
    {
      id: "email",
      label: "Your email",
      value: enteredemail,
      type: "email",
      isValid: enteredemailValid,
      hasError: EnteredEamilHasError,
      valueChangeHandler: enteredemailHandler,
      inputBlurHandler: EmailInputBlurHandler,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      value: enteredpassword,
      isValid: enteredpasswordValid,
      hasError: EnteredPasswordHasError,
      valueChangeHandler: enteredpasswordHandler,
      inputBlurHandler: PasswordInputBlurHandler,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      value: enteredconfirmPassword,
      isValid: confirmPasswordisValid,
      hasError: EnteredConfirmPasswordHasError,
      valueChangeHandler: enteredconfirmPasswordHandler,
      inputBlurHandler: PasswordInputBlurHandler,
    },
  ];

  const formSubmitHandler = (event) => {
    event.preventDefault();

    resetPasswordInput();
    resetNameInput();
    resetEmailInput();
    resetconfirmPassword();
  };

  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <BsArrowLeft
            style={{ margin: "40px 20px 0px 20px", fontSize: "20px" }}
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
        <header className={styles.headeremail}>SignUp with Email</header>
        <div className={styles.description}>
          Welcome back! Sign in using your social account or email to continue
          us
        </div>
      </div>
      <form className={styles.inputBox} onSubmit={formSubmitHandler}>
        {inputFields.map((field) => (
          <FormField key={field.id} {...field} />
        ))}
      </form>
      <div className={styles.signupbox} style={{ margin: "40px 20px" }}>
        {formValid ? (
          <Link className={styles.link} href="/chat">
            Create an account
          </Link>
        ) : (
          <p className={styles.link} style={{ backgroundColor: "#a5a8a6" }}>
            Verify to Proceede
          </p>
        )}
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
