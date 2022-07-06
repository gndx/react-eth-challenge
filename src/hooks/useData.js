import React, { createContext, useState, useContext } from "react";
import { getData } from "../utils/getData";

const DataContext = createContext()

export function ProviderData({ children }){
  const data = useProviderData()
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export const useData = () => {
  return useContext(DataContext)
}

function useProviderData(){
  const [data, setData] = useState(async () => {
    getData()
      .then(res => setData(res))
  })
  return {
    data
  }
}