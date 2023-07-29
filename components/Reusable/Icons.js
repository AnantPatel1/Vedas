import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import styles from "./Icons.module.css";
export default function Icons({ borderColor, Facolor, ApColor }) {
  const contentStyle = {
    borderColor: borderColor,
  };
  return (
    <div className={styles.Connections}>
      <div className={styles.icons}>
        <div style={contentStyle}>
          <FaFacebook style={{ fontSize: "30px", color: Facolor }} />
        </div>
        <div style={contentStyle}>
          <FcGoogle style={{ fontSize: "30px" }} />
        </div>
        <div style={contentStyle}>
          <FaApple style={{ fontSize: "30px", color: ApColor }} />
        </div>
      </div>
    </div>
  );
}
