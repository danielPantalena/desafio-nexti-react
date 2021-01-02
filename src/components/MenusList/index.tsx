import React from 'react';

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
      {menusList?.map((menu) => (
        <ul>
          {menu?.subMenus.map((subMenu) => (
            <li key={subMenu.id}>{subMenu.name}</li>
          ))}
        </ul>
      ))}
    </ul>
  );
};

export default MenusList;
