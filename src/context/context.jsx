import React, { createContext, useEffect, useState } from "react"
import useGetData from "../utils/useGetData";
import data from '../context/defaultData'

const ApiURL = 'https://raw.githubusercontent.com/gtrujilloca/react-eth-challenge/main/data.json';

const UserContext = createContext(data)

export const UserProvider = ({ children }) => {
  const user = useGetData(ApiURL)

  if (!user) return <div>Loading...</div>

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}


export default UserContext