import { useEffect, useState } from "react";
import getData from "./getData";


const useGetData = (API) => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
        const data = await getData(API);
        setData(data);
    })();
  }, []);

  return data;
};

export default useGetData;