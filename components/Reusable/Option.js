import React from "react";
import styles from "./Option.module.css";
export default function Option({ dcolor, pcolor }) {
  return (
    <div className={styles.divider}>
      <div className={styles.line} style={{ backgroundColor: pcolor }}></div>
      <div className={styles.text} style={{ color: dcolor }}>
        OR
      </div>
      <div className={styles.line} style={{ backgroundColor: pcolor }}></div>
    </div>
  );
}
