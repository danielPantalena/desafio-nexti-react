import React, { createContext, useState, useEffect } from 'react';
import { getMenusList } from '../services/getMenusList';

const initialValue = {
  menusList: [],
  selectedMenus: [],
  setSelectedMenus: (menu: any) => menu,
};

export const Context = createContext(initialValue);

interface IProps {
  children: unknown;
}

const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [menusList, setMenusList] = useState<any>([]); // TODO: Type TS
  const [selectedMenus, setSelectedMenus] = useState([]);

  useEffect(() => {
    getMenusList().then((response) => setMenusList(response));
  }, []);

  const contextValue = { menusList, selectedMenus, setSelectedMenus };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
