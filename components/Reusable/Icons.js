import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import styles from "./Icons.module.css";

export default function Icons({ borderColor, Facolor, ApColor }) {
  const [hoveredIcons, setHoveredIcons] = useState({
    facebook: false,
    google: false,
    apple: false,
  });

  const handleIconHover = (iconName, isHovered) => {
    setHoveredIcons((prevHoveredIcons) => ({
      ...prevHoveredIcons,
      [iconName]: isHovered,
    }));
  };

  const contentStyle = {
    borderColor: borderColor,
  };

  return (
    <div className={styles.Connections}>
      <div className={styles.icons}>
        <div
          style={{
            ...contentStyle,
            borderColor: hoveredIcons.facebook ? "#FF0000" : borderColor,
          }}
          onMouseEnter={() => handleIconHover("facebook", true)}
          onMouseLeave={() => handleIconHover("facebook", false)}
        >
          <FaFacebook
            style={{
              fontSize: "30px",
              color: hoveredIcons.facebook ? "#FF0000" : Facolor,
              cursor: "pointer",
            }}
          />
        </div>
        <div
          style={{
            ...contentStyle,
            borderColor: hoveredIcons.google ? "#00FF00" : borderColor,
          }}
          onMouseEnter={() => handleIconHover("google", true)}
          onMouseLeave={() => handleIconHover("google", false)}
        >
          <FcGoogle
            style={{
              fontSize: "30px",
              color: hoveredIcons.google ? null : "black",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          style={{
            ...contentStyle,
            borderColor: hoveredIcons.apple ? "#FFA500" : borderColor,
          }}
          onMouseEnter={() => handleIconHover("apple", true)}
          onMouseLeave={() => handleIconHover("apple", false)}
        >
          <FaApple
            style={{
              fontSize: "30px",
              color: hoveredIcons.apple ? "#FFA500" : ApColor,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}
