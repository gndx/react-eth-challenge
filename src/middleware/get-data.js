'use strict';

export async function getData() {
  let url = 'http://localhost:3000/data';
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
