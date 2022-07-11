const getData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const res = await response.json();
    return res;
  } else {
    throw new Error("Fetching " + url + " responded with " + response.status + " status.");
  }
};

export default getData;