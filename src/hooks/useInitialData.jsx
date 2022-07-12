import { useEffect, useState } from "react";
import getData from "../utils/getData";

const API = 'http://localhost:3000/data';

function useInitialData() {
  const [appLoading, setAppLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(API).then(data => {
      setAppLoading(false);
      setData(data);
    });
  }, [setAppLoading]);
  return { appLoading, data };
}

export default useInitialData;