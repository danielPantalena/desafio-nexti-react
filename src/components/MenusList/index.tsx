import React, { useContext } from 'react';
import { Context } from '../../context';
import { Menu } from '../../components';

import './style.css';

const MenusList: React.FC = () => {
  const { menusList } = useContext(Context);

  return (
    <ul>
      {menusList.map((menu) => (
        <Menu menu={menu} />
      ))}
    </ul>
  );
};

export default MenusList;
