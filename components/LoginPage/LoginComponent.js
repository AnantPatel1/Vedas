import Link from "next/link";
import useInput from "../../Hooks/use-input";
import styles from "../../styles/common.module.css";
import { BsArrowLeft } from "react-icons/bs";
import Icons from "../Reusable/Icons";
import Option from "../Reusable/Option";
export default function LoginComponent() {
  const {
    value: enteredpassword,
    isValid: enterednameValid,
    enteredValueHandler: enteredpasswordHandler,
    InputBlurHandler: PasswordInputBlurHandler,
    resetForm: resetNameInput,
  } = useInput((value) => value.length > 8);

  const {
    value: enteredemail,
    isValid: enteredemailValid,
    enteredValueHandler: enteredemailHandler,
    InputBlurHandler: EmailInputBlurHandler,
    resetForm: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  let formValid = false;

  if (enterednameValid && enteredemailValid) {
    formValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enterednameValid || !enteredemailValid) {
      return;
    }
    console.log(enteredname);

    resetNameInput();

    resetEmailInput();
    // NameInputRef.current.value = "";
    // this useRef() method to empty the input box is not ideal as you cannot directly manipulate the DOM
  };
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <BsArrowLeft style={{ margin: "40px 20px", fontSize: "20px" }} />
        </Link>
      </div>
      <div className={styles.loginContainer}>
        <header className={styles.header}>Log in to Mokx</header>
        <div className={styles.description}>
          Welcome back! Sign in using your social account or email to continue
          us
        </div>
        <div>
          <Icons borderColor="black" Facolor="blue" ApColor="black" />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <Option dcolor="#69235b" pcolor="#69235b99" />
      </div>
      <form className={styles.inputBox} onSubmit={formSubmitHandler}>
        <div className={styles["form-control"]}>
          <p>Your email</p>
          <input
            type="text"
            id="name"
            onChange={enteredemailHandler}
            onBlur={EmailInputBlurHandler}
            value={enteredemail}
            className={styles.inputbtn}
          />
        </div>
        <div className={styles["form-control"]}>
          <p>Passward</p>

          <input
            type="email"
            id="email"
            onChange={enteredpasswordHandler}
            onBlur={PasswordInputBlurHandler}
            value={enteredpassword}
            className={styles.inputbtn}
          />
        </div>
      </form>
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
