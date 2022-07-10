export const getData = async () => 
{
  try 
  {
    const data = await fetch('http://localhost:3000/data')
    const formattedData = data.json()

    return formattedData
  } 
  catch (error) {console.error(error)}

}