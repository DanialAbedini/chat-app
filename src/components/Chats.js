import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { auth } from "../fireBase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
//! components
import Navbar from "./Navbar";

//!context
import { authContext } from "../contexts/AuthContextProvider";

//!styles
import styles from "./Chats.module.css";
const Chats = () => {
  const [loading, setLodaing] = useState(true);
  const user = useContext(authContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "fff4375c-17ba-4a72-98a0-0797649ef169",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => setLodaing(false))
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) =>
          formdata.append("avatar", avatar, avatar.name)
        );
        axios
          .post("https://api.chatengine.io/users/", formdata, {
            headers: {
              "private-key": "5909dbf7-918e-4c47-a61e-b979164ba554",
            },
          })
          .then(() => setLodaing(false))
          .catch((err) => console.log(err));
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = fetch(url);
    const data = await response.blob();
    return new File([data], "userphoto.jpg", { type: "image/jpeg" });
  };


  const logoutHnadler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading) return "Loading ...";
  return (
    <div className={styles.container}>
      <Navbar logoutHnadler={logoutHnadler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="fff4375c-17ba-4a72-98a0-0797649ef169"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
