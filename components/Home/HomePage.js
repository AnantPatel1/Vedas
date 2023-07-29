import React from "react";
import styles from "./HomePage.module.css";
import Image from "next/image";
import Arya from "../../Assets/arya.png";
import Icons from "../Reusable/Icons";
import Option from "../Reusable/Option";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.AiImage} src={Arya} alt="Arya" />
        <figcaption className={styles.aiDescription}>
          Arya, Vedic AI Guide
        </figcaption>
      </div>
      <div className={styles.containerDescription}>
        <p className={styles.discover}>
          Discover the timeless wisdom of <span>the Vedas.</span>
        </p>
        <p className={styles.Signup}>
          Sign up and{" "}
          <span>journey through ancient knowledge with Arya 🌟</span>
        </p>
      </div>
      <Icons borderColor="white" Facolor="white" ApColor="white" />
      <Option
        dcolor="rgba(255, 255, 255, 0.478)"
        pcolor="rgba(255, 255, 255, 0.478)"
      />
      <div className={styles.signupbox}>
        <Link className={styles.link} href="/SignUp">
          Sign Up with Mail
        </Link>
        <p>
          Existing account?
          <Link
            href="/Login"
            style={{
              color: "#FBBC04",
              textDecoration: "none",
              marginLeft: "2px",
            }}
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
