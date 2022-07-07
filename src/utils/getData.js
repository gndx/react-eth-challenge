const getData = async (url) => {
  try {
    const req = await fetch(url);
    const resp = await req.json();
    return resp;
  } catch (error) {
    return new Promise((res, _) => res(error));
  }
};
export default getData;
