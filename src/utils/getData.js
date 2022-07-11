
export default async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
