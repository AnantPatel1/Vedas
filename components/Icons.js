import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import styles from "./Icons.module.css";
export default function Icons() {
  return (
    <div className={styles.Connections}>
      <div className={styles.icons}>
        <div>
          <FaFacebook style={{ fontSize: "30px", color: "white" }} />
        </div>
        <div>
          <FcGoogle style={{ fontSize: "30px" }} />
        </div>
        <div>
          <FaApple style={{ fontSize: "30px", color: "white" }} />
        </div>
      </div>
    </div>
  );
}
