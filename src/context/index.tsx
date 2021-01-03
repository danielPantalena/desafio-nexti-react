import React, { createContext, useState, useEffect } from 'react';
import { getMenusList } from '../services/getMenusList';

const initialValue = {
  menusList: [],
  selectedMenus: [],
  setSelectedMenus: (menu: any) => menu, // TODO: Type TS
  setMenusList: (menus: any) => menus, 
  setSearchFilter: (filter: any) => filter, 
  searchFilter: '',
};

export const Context = createContext(initialValue);

interface IProps {
  children: any; // TODO: Type TS
}

const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [menusList, setMenusList] = useState<any>([]); // TODO: Type TS
  const [selectedMenus, setSelectedMenus] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    getMenusList().then((response) => setMenusList(response));
  }, []);

  const contextValue = {
    menusList,
    selectedMenus,
    setSelectedMenus,
    setMenusList,
    searchFilter,
    setSearchFilter,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
