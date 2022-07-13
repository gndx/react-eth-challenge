import data from '../../data.json';

const getData = async (url) => {
  try {
    const req = await fetch(url);
    const resp = await req.json();
    return resp;
  } catch (error) {
    return Promise.resolve(data.data);
  }
};
export default getData;
