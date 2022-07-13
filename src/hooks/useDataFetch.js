import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const useDataFetch = () => {
  const [isLoading, setLoading] = useState(false);
  const [dataFetch, setDataFetch] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true);
          const res = await getData();
          setDataFetch(res);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }

      }

    )();
  }, []);

  return { dataFetch, isLoading, error };
};

export default useDataFetch;
