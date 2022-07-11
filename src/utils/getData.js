const getData = async (apiUrl) => {
  let response = await fetch(apiUrl);
  let json = await response.json();
  return json;
};
export default getData;
