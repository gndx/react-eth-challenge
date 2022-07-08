// If we try to get data.json (which is out of the 'public' directory scope)
// with fectch(), it will say 'File not found: http://localhost:8080/data.json'
// So we read it with import and if a parameter is passed to getData()
// it's assumed to be an url, not a local file...
import customData from '../../data.json';
function getData(url=null) {
    if(url) {
        return fetch(`${url}`)
            .then(response => response.json())
    }
    var promise = new Promise( (resolve, reject) => {
        resolve(customData);
    });
    return promise;
}
export default getData;
