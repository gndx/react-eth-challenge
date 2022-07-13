import { useEffect, useState } from 'react';
import getData from '../utils/getData';

function useUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getData().then(({ data }) => {
      setLoading(false);
      setUser(data);
    });
  }, [setLoading]);
  return [user, loading];
}

export default useUser;
