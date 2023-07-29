import React from "react";
import styles from "./HomePage.module.css";
import Image from "next/image";
import Arya from "../Assets/arya.png";
import Icons from "./Icons";
import Option from "./Option";
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
      <Icons />
      <Option />
      <div className={styles.signupbox}>
        <Link className={styles.link} href="/login">
          Sign Up with Mail
        </Link>
        <p>
          Existing account?<span> Log in</span>
        </p>
      </div>
    </div>
  );
}
