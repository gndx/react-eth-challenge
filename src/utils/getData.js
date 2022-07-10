const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  // 'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately',
});

export default async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
