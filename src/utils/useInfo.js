import { useEffect, useState } from 'react';
import getData from './getData';
export const useInfo = (url) => {
  const [api, setApi] = useState({});
  const init = async () => {
    let data = await getData(url);
    setApi(data);
  };
  useEffect(() => {
    init();
  }, []);
  return api;
};
