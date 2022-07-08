export const getData = async (URL) => {
  const response = await fetch(URL);
  const res = await response.json();
  return res;
};
