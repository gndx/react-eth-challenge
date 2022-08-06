import React, { useState, createContext, useContext, useEffect } from 'react';
import getData from '../utils/getData'

const Context = createContext();

export const DataContext = ({children}) => {
    const [data, setData] = useState({});
    const api = 'https://raw.githubusercontent.com/sxshita/react-eth-challenge/main/data.json';

    useEffect(() => {
        getData(api).then(data => {
            setData(data);
        })
    },[]);
    
  return (
    <Context.Provider value={{data}}>
        {children}
    </Context.Provider>
  );
};

export const useDataContext = () => {
    return useContext(Context);
};