import React, { createContext, useState, useContext } from 'react';
import getData from '../utils/getData';

const DataContext = createContext();

function useProviderData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(async () => {
    const data = await getData('http://localhost:3000/data');
    await setData(data);
    setLoading(false);
  });
  return {
    data,
    loading,
    setLoading,
  };
}

export function ProviderData({ children }) {
  const data = useProviderData();
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export const useData = () => {
  return useContext(DataContext);
};

