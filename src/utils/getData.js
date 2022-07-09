// If we try to get data.json (which is out of the 'public' directory scope)
// with fectch(), it will say 'File not found: http://localhost:8080/data.json'
// So we read it with import and if a parameter is passed to getData()
// it's assumed to be an url, not a local file...

export function getEnvironmentVar(envVarName) {
    if (typeof process !== 'undefined' && typeof process.env[envVarName] !== 'undefined') {
        return process.env[envVarName];
    }
    if (typeof window[envVarName] !== 'undefined') {
        return window[envVarName];
    }
    return null;
}

function getData(urlOriginal = null) {
    // Promise to be returned in case of no URL al all
    const promise = new Promise((resolve, reject) => {
        const customData = {};
        resolve(customData);
    });
    let url = urlOriginal;
    if (!url) {
        // If no URL were specified, try to get the API URL from an environment variable
        url = getEnvironmentVar('REACT_APP_API_URL');
    }
    if (!url) {
        // If no URL were specified, try with the default value... it should be the DEV environment
        // so 'npm run server' must be running
        url = 'http://localhost:3000/data';
    }
    if (url) {
        // If the URL were specified, call the API with fetch to get the data
        return fetch(`${url}`)
            .then((response) => response.json())
            .then((response) => ({ data: response }));
    }
    // If no URL al all, get a empty object
    return promise;
}

export default getData;
