import React, { useState, useEffect } from "react";
import ManagerNav from "./ManagerNavbar";
import AdminNav from "./AdminNavbar";
import UserNav from "./UserNavbar";
import Welcome from "./WelcomeNavbar";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // API-Anfrage an den Server, um Benutzerinformationen abzurufen
    fetch("/api/user")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then(data => setUser(data))
      .catch(error => {
        console.error(error);
        console.log("lmclmsclmsac")
      });
  }, []);


  if (!user) {
    return null;
  }

  if (user.role == 1) {
    return <AdminNav myUser={user.name}></AdminNav>;
  } else if (user.role == 2) {
    return <ManagerNav myUser={user.name}></ManagerNav>;
  } else {
    return <UserNav myUser={user.name}></UserNav>;
  }
};

export default Dashboard;
