
const getData = async (URL) => {
	try{			
		const response = await fetch(URL)			
		const data = await response.json()		
		return data
	
	} catch(e) {
		return 'error'
	}	
}

export default getData