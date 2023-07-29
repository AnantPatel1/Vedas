import React, { Fragment } from "react";
import Theme from "../Assets/MOKx.png";
import styles from "./LandingPage.module.css";
import Image from "next/image";
import Link from "next/link";
export default function LoadingPage() {
  return (
    <Fragment>
      <div className={styles.ThemePage}>
        <div className={styles.container1}>
          <Image src={Theme} width={172} height={172} alt="This is theme" />
        </div>
        <div className={styles.container2}>
          <Link className={styles.link} href="">
            Back to Vedas🕉️
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
