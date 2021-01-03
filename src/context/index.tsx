import React, { createContext, useState, useEffect } from 'react';
import { getMenusList, getItems } from '../services';

const initialValue = {
  menusList: [],
  items: [],
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
  const [items, setItems] = useState<any>([]);
  const [selectedMenus, setSelectedMenus] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    getMenusList().then((response) => setMenusList(response));
    getItems().then((response) => setItems(response));
  }, []);

  const contextValue = {
    menusList,
    items,
    selectedMenus,
    setSelectedMenus,
    setMenusList,
    searchFilter,
    setSearchFilter,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
