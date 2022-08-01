import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const useGetData = (API) => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await getData(API);
      setData(response.data);
    })();
  }, []);

  return data;
};

export default useGetData;
