import React, { createContext, useState, useEffect } from 'react';
import { getMenusList, getItems } from '../services';
import { initialValue } from './initialValue';

export const Context = createContext(initialValue);

interface IProps {
  children: any; // TODO: Type TS
}

const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [menusList, setMenusList] = useState<any>([]); // TODO: Type TS
  const [items, setItems] = useState<any>([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedSubMenu, setSelectedSubMenu] = useState(0);

  useEffect(() => {
    getMenusList().then((response) => setMenusList(response ?? initialValue.menusList));
    getItems().then((response) => setItems(response ?? initialValue.items));
  }, []);

  const contextValue = {
    menusList,
    items,
    setMenusList,
    searchFilter,
    setSearchFilter,
    selectedSubMenu,
    setSelectedSubMenu,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
