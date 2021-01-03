import React, { createContext, useState, useEffect } from 'react';
import { getMenusList } from '../services/getMenusList';

const initialValue = { menusList: [] }

export const Context = createContext(initialValue);

interface IProps {
  children: unknown;
}

const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [menusList, setTasksList] = useState<any>([]); // TODO: Type TS

  useEffect(() => {
    getMenusList().then((response) => setTasksList(response));
  }, []);

  const contextValue = { menusList };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
