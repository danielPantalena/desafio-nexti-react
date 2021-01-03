import React, { useContext } from 'react';
import { Context } from '../../context';
import { Input, Button, FlexRow } from '../../styled-components';

interface IMenu {
  id: never;
  name: string;
  subMenus: [{ id: number; name: string }];
}

const SearchBar = () => {
  const { selectedMenus, menusList, setMenusList, setSelectedMenus } = useContext(Context);

  const handleArchive = () => {
    const newMenusList = menusList.filter(({ id }: IMenu) => !selectedMenus.includes(id));
    setSelectedMenus([])
    setMenusList(newMenusList)
  };

  return (
    <div>
      <FlexRow>
        <Input />
      </FlexRow>
      <div className="buttons-container">
        <Button>Atribuir</Button>
        <Button onClick={handleArchive}>Arquivar</Button>
        <Button>Agendar</Button>
      </div>
    </div>
  );
};

export default SearchBar;
