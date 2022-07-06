import React, { createContext, useEffect, useState } from 'react'
import getData from './utils/getData'
const AppContext = createContext()
const defaultData=import ('./utils/default-data.json');

const AppProvider = ({ children }) => {
  const [data, setData] = useState({data: {}})

  useEffect(()=>{
    const fetchData=async ()=>{
      setData(await getData('http://localhost:3000/data'))
    } 
    fetchData()
},[])

  const value = {
    data
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }