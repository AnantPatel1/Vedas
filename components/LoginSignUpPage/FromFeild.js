import React from "react";
import styles from "../../styles/common.module.css";
const FormField = ({
  id,
  label,
  value,
  hasError,
  valueChangeHandler,
  inputBlurHandler,
  type = "text",
}) => {
  const inputClass = hasError
    ? `${styles[`${id}-control-invalid`]}`
    : styles["form-control"];

  return (
    <div className={inputClass}>
      <p style={{ marginBottom: "10px" }}>{label}</p>
      <input
        type={type}
        id={id}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        value={value}
        style={{ height: "20px" }}
        className={styles.inputbtn}
      />
      {hasError && (
        <p style={{ color: "red", fontSize: "10px", float: "right" }}>
          {label === "Your name" ? "Enter valid name" : "Enter valid email"}
        </p>
      )}
    </div>
  );
};

export default FormField;
