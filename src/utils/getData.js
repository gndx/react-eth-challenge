export default async function getData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
