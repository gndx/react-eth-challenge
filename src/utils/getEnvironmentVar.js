function getEnvironmentVar(varName, defaultValue = null) {
    try {
        // To handle this app run by node `react-scripts build && server.js`
        if (process.env[varName] !== 'undefined') {
            return process.env[varName];
        }
    } catch (e) {
        // To handle this app run by `webpack-dev-server --open --mode development`
        if (typeof process !== 'undefined') {
            return new Error(e);
        }
    }
    // If there's no environment variable, try read it from the DOM
    if (typeof window[varName] !== 'undefined') {
        return window[varName];
    }
    // "No way Jose"... so returs the default value
    return defaultValue;
}

export default getEnvironmentVar;
