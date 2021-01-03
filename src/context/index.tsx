import React, { createContext, useState, useEffect } from 'react';
import { getMenusList } from '../services/getMenusList';

const initialValue = {
  menusList: [],
  selectedMenus: [],
  setSelectedMenus: (menu: any) => menu, // TODO: Type TS
  setMenusList: (menus: any) => menus, // TODO: Type TS
};

export const Context = createContext(initialValue);

interface IProps {
  children: any; // TODO: Type TS
}

const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [menusList, setMenusList] = useState<any>([]); // TODO: Type TS
  const [selectedMenus, setSelectedMenus] = useState([]);

  useEffect(() => {
    getMenusList().then((response) => setMenusList(response));
  }, []);

  const contextValue = { menusList, selectedMenus, setSelectedMenus, setMenusList };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
