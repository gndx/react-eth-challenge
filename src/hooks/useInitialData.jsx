import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const API = 'https://raw.githubusercontent.com/Oriplus/react-eth-challenge/main/data.json';

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
      setAppData(res.data);
    });
  }, [setAppLoading]);
  return [appData, appLoading];
}

export default useInitialData;
