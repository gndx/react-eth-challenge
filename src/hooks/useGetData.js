import { useEffect, useState } from 'react';
import getData from '../utils/getData';

export const useGetData = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData(url).then((res) => {
      setData(res.data);
      setLoading(false);
    })
    .catch(e => {setError('ocurrio un error, intentelo mas tarde')})
  },[]);

  return {data,loading,error}
};
