import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const API = ' https://oriana-cv-oriplus.vercel.app/data';

/**
 * Get data from API for context
 * @returns [appData, appLoading]
 */
function useInitialData() {
  const [appLoading, setAppLoading] = useState(true);
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    getData(API).then((res) => {
      setAppLoading(false);
      setAppData(res);
    });
  }, [setAppLoading]);
  return [appData, appLoading];
}

export default useInitialData;
