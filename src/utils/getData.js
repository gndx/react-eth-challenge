import getEnvironmentVar from './getEnvironmentVar';

// If we try to get data.json (which is out of the 'public' directory scope)
// with fectch(), it will say 'File not found: http://localhost:8080/data.json'
// So we read it with import and if a parameter is passed to getData()
// it's assumed to be an url, not a local file...

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
}

function prepareErrorResponse(errorMsg) {
    const errorResponse = {
        error: true,
        errorObj: errorMsg,
        data: {},
    };
    // console.log('There was a problem with the API!', errorResponse);
    return errorResponse;
}

function prepareDataElement(response) {
    const apiResponse = {
        error: false,
        errorObj: '',
        data: typeof response['data'] === 'undefined' ? response : response.data,
    };
    return apiResponse;
}

function parseJSON(response) {
    return response.json();
}

function getData(urlOriginal = null) {
    const debugFlag = getEnvironmentVar('REACT_APP_DEBUG', '0');
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
    if (debugFlag === '1') {
        console.log('BE URL', url);
    }
    if (url) {
        // If the URL were specified, call the API with fetch to get the data
        return fetch(`${url}`)
            // .then((response) => response.json())
            // .then((response) => (
            //     typeof response['data'] === 'undefined' ? { data: response } : response
            .then(checkStatus) // check the response of our APIs
            .then(parseJSON) // parse it to Json
            .then(prepareDataElement) // verify and eventually insert the data element
            .catch(prepareErrorResponse); // fetch error handling
    }
    // If no URL al all, get a empty object
    return promise;
}

export default getData;
