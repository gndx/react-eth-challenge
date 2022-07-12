import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export default function Provider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error at fetching data: The status is ${res.status}`);
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      })
      .finally(() => setLoading(false));

  }, []);

  return (
    <Context.Provider value={{ data, loading, error }}>
      {children}
    </Context.Provider>
  );
}
