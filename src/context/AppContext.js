import { createContext, useContext } from 'react';

export const useAppContext = () => useContext(AppContext)

const AppContext = createContext({});

export default AppContext;