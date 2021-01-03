import React, { useContext } from 'react';
import { Context } from '../../context';
import { Input, Button, FlexRow } from '../../styled-components';
import { removeSelectedSubMenu } from '../../helperFunctions';

interface IMenu {
  id: never;
  name: string;
  subMenus: [{ id: number; name: string }];
}

const SearchBar = () => {
  const {
    selectedSubMenu,
    menusList,
    setMenusList,
    searchFilter,
    setSearchFilter,
    setSelectedSubMenu,
  } = useContext(Context);

  const handleArchive = () => {
    const newMenusList = removeSelectedSubMenu(menusList, selectedSubMenu);
    setMenusList(newMenusList);
    return setSelectedSubMenu(0);
  };

  return (
    <div>
      <FlexRow>
        <Input onChange={(event) => setSearchFilter(event.target.value)} value={searchFilter} />
      </FlexRow>
      <div className="buttons-container">
        <Button>Atribuir</Button>
        <Button onClick={handleArchive} disabled={selectedSubMenu === 0}>
          Arquivar
        </Button>
        <Button>Agendar</Button>
      </div>
    </div>
  );
};

export default SearchBar;
