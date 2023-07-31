import React, { useContext, useEffect } from "react";
import styles from "./ChatHeader.module.css";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import bot from "../../Assets/aryaai.svg";
import Link from "next/link";
import { AuthContext } from "../../security/AuthProvider";
import { auth } from "@/security/firebase";
import { useRouter } from "next/router";
export default function ChatHeader() {
  const { currentUser } = useContext(AuthContext);
  const logout = () => {
    auth.signOut().catch((error) => {
      console.error(error);
    });
    console.log("logged out");
    // router.push("/Login");
  };
  const isLoggedout = !!currentUser;
  const router = useRouter();
  // useEffect(() => {
  // }, [isLoggedout, router]);
  return (
    <div className={styles.header}>
      <div className={styles.box1}>
        <div style={{ width: "10%" }}>
          <Link href="/">
            {" "}
            <BsArrowLeft onClick={logout} />
          </Link>
        </div>
        <div className={styles.innerbox}>
          <Image
            src={bot}
            width={40}
            height={40}
            alt="logo"
            className={styles.logoImage}
          />
          <div className={styles.ellipse}></div>
          <div className={styles.description}>
            <p>Arya</p>
            <span>Vedic AI bot</span>
          </div>
        </div>
      </div>
      <div className={styles.box2}>
        <p>A/क</p>
      </div>
    </div>
  );
}
