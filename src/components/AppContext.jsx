import React from "react";
import getData from "../utils/getData";

const AppContext = React.createContext({});

const AppProvider = (props) => {

    const [data, setData] = React.useState({})

    React.useEffect(() => {
      getData("http://localhost:3000/data").then(res => setData(res))
    }, [])

    return (
        <AppContext.Provider value={ {data} }>
             {props.children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};