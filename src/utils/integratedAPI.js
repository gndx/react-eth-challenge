async function integratedAPI() {
  const personalInfo = await fetch('http://localhost:3000/data');
  const data = await personalInfo.json();
  return data;
}

export default integratedAPI;
