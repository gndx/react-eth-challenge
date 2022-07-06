export function getData(){
  return fetch("http://localhost:3000/data")
    .then(response => response.json())
}