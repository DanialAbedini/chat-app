import React from "react";
import firebase from 'firebase/compat/app';
import { auth } from "../fireBase";

import google from "../assets/google.svg";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to Botogram </h2>
        <div
          className={`${styles.button}`}
          onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).catch(err=>console.error("Please Turn On Your Vpn"))}
        >
          <img src={google} alt="google" /> sign in google
        </div>
      </div>
    </div>
  );
};

export default Login;
