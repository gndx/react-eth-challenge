import { createContext, useContext } from 'react';

const AppContext = createContext({});

export const appContext = () => useContext(AppContext);

export default AppContext;
