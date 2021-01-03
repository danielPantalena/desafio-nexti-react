import React, { useContext } from 'react';
import { Context } from '../../context';
import { Menu } from '../../components';

import './style.css';

const MenusList: React.FC = () => {
  const { menusList } = useContext(Context);

  return (
    <ul>
      {menusList.map((menu: any) => ( // TODO: Type TS
        <div key={menu?.id}> 
          <Menu menu={menu} />
        </div>
      ))}
    </ul>
  );
};

export default MenusList;
