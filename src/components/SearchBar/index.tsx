import React from 'react';
import { Input, Button, FlexRow } from '../../styled-components';

const SearchBar = () => {
  return (
    <div>
      <FlexRow>
        <Input />
      </FlexRow>
      <div className="buttons-container">
        <Button>Atribuir</Button>
        <Button>Arquivar</Button>
        <Button>Agendar</Button>
      </div>
    </div>
  );
};

export default SearchBar;
