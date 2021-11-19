import React from "react";
import { auth } from "../fireBase";
import { useHistory } from "react-router-dom";
//! components
import Navbar from "./Navbar";
import styles from "./Chats.module.css";

const Chats = () => {
  const history = useHistory();
  const logoutHnadler = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <Navbar  logoutHnadler={logoutHnadler}/>
    </div>
  );
};

export default Chats;
