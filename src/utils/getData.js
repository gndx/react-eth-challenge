const getData = async (url = 'https://raw.githubusercontent.com/Juamez/react-eth-challenge/main/data.json') => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
  } catch (e) {
    throw new Error('Failed Call');
  }
};

export default getData;
