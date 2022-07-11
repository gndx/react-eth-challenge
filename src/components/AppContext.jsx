import React from "react";
import getData from "../utils/getData";

const AppContext = React.createContext();

const AppProvider = (props) => {

    const [data, setData] = React.useState({})

    React.useEffect(() => {
      getData("https://raw.githubusercontent.com/LeanderGS/react-eth-challenge/main/data.json").then(res => setData(res.data))
    }, [])

    return (
        <AppContext.Provider value={{ data }}>
             {props.children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};