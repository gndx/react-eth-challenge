export default ((url) => {
  const response = fetch(url).then((res) => res.json());
  return response;
});
