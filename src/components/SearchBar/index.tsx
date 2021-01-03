import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context';
import { Input, Button, FlexRowFlexStart, FlexColumn } from '../../styled-components';
import { removeSelectedSubMenu } from '../../helperFunctions';
import styled from 'styled-components';
import './style.css'

interface IMenu {
  id: never;
  name: string;
  subMenus: [{ id: number; name: string }];
}

const ButtonSearchBar = styled(Button)`
  flex-grow: 0;
  min-width: 100px;
  min-height: 40px;
`;

const SearchBar = () => {

  const { t } = useTranslation();
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
    <div className="search-bar-container">
      <FlexColumn>
        <Input onChange={(event) => setSearchFilter(event.target.value)} value={searchFilter} />
        <FlexRowFlexStart>
          <ButtonSearchBar>{t('Attribute')}</ButtonSearchBar>
          <ButtonSearchBar onClick={handleArchive} disabled={selectedSubMenu === 0}>
          {t('Archive')}
          </ButtonSearchBar>
          <ButtonSearchBar>{t('Schedule')}</ButtonSearchBar>
        </FlexRowFlexStart>
      </FlexColumn>
    </div>
  );
};

export default SearchBar;
