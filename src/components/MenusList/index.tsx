import React from 'react';
import { Menu } from '../../components';

interface IMenu {
  id: number;
  name: string;
  subMenus: [{ id: number; name: string }];
}

interface IProps {
  menusList: [IMenu];
}

const MenusList: React.FC<IProps> = ({ menusList }) => {
  return (
    <ul>
      {menusList.map((menu) => (
        <Menu menu={menu} />
      ))}
    </ul>
  );
};

export default MenusList;
