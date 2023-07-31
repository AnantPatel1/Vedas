import React, { useState, useContext, Fragment, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import styles from "./Icons.module.css";
import firebase from "../../security/firebase";
import { auth } from "../../security/firebase";
import Link from "next/link";
import { AuthContext } from "@/security/AuthProvider";
import { useRouter } from "next/router";
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

  const handleSignInWithGoogle = () => {
    // Create a Google sign-in provider
    const provider = new firebase.auth.GoogleAuthProvider();

    // Sign in with Google using a popup window

    auth.signInWithPopup(provider).catch((error) => {
      // Handle sign-in errors if needed
      console.error(error);
    });
  };
  const { currentUser } = useContext(AuthContext);
  // Check if the user is logged in
  const isLoggedIn = !!currentUser;
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn === true) router.push("/chat");
  }, [isLoggedIn, router]);
  return (
    <Fragment>
      {" "}
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
              onClick={handleSignInWithGoogle}
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
      {/* {isLoggedIn ? <Link href="/chat">proceede</Link> : null} */}
    </Fragment>
  );
}
