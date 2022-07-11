const fetchData = async (a) => {
  const personalData = await fetch(a);
  const response = await personalData.json();
  return response;
};

export default fetchData;
