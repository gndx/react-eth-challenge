import React, { useState, useEffect, createContext } from "react";
import getData from "../utils/getData";

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {

  const [userData, setUserData] = useState();
  const [waitingUser, setWaitingUser] = useState(true);

  useEffect(() => {

    const getUserData = async () => {

      try {
        getData('http://localhost:3000/data').then((response) => {

          if (response.ok) {
            console.log('Everything OK');
            response.json().then((data) => {
              setUserData(data);
            });
          } else {
            console.log('Error fetching data');
          }
        });

      } catch (error) {
        console.error("Error while geting data...", error);
      }

      setWaitingUser(false);
    }

    getUserData();
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        waitingUser
      }}
    >
      {children}
    </UserDataContext.Provider >
  );

}

export {
  UserDataProvider
}

export default UserDataContext;