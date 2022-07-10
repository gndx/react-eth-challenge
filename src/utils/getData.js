
const getData = async(url = '')  => {
  try {
    if (!url) return new Error('must have url')
    const response = await fetch(url)
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export default getData;