import { createContext, useContext } from 'react';

const Context = createContext({});

export const appContext = () => useContext(Context);

export default Context;
