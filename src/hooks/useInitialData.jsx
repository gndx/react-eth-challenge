import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const API = ' http://localhost:3000/data';

function useInitialData() {
  const [appLoading, setAppLoading] = useState(true);
  const [appData, setAppData] = useState([])

  useEffect(() => {
    getData(API).then((res) => {
      setAppLoading(false);
      setAppData(res)
      console.log(res);
    });
  }, [setAppLoading]);
  console.log('fetch',appLoading)
  return [appData, appLoading];
}

export default useInitialData;