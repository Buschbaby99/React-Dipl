import React, { useState, useEffect } from 'react';
import ManagerNav from "./ManagerNavbar";
import AdminNav from "./AdminNavbar";
import UserNav from "./UserNavbar";

const LoggedIn = (props) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const currentUser = props.auth.user.role;
    //console.log(currentUser);
    setUser(currentUser);
  }, []);

  if (props.auth.user.role == 1) {
    return <AdminNav myUser={props.auth.user.name}></AdminNav>;
  } else if (props.auth.user.role == 2) {
    return <ManagerNav myUser={props.auth.user.name}></ManagerNav>;
  } else {
    return <UserNav myUser={props.auth.user.name}></UserNav>;
  }
};

export default LoggedIn;
