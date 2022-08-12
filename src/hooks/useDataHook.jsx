import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const API = "https://raw.githubusercontent.com/sass3r/react-eth-challenge/main/data.json";

const useDataHook = () => {
  const [cvData, setCvData] = useState([]);

  useEffect(() => {
    getData(API)
      .then((res) => {
        setCvData(res.data);
      });
  },[setCvData]);
  return cvData
}

export default useDataHook;
