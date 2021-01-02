import React, { useState } from 'react';

interface IMenu {
  id: number;
  name: string;
  subMenus: [{ id: number; name: string }];
}

interface IProps {
  menu: IMenu;
}

const Menu: React.FC<IProps> = ({ menu }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <p onClick={() => setSelected(!selected)}>{menu.name}</p>
      {selected && (
        <ul>
          {menu.subMenus.map((subMenu) => (
            <p>{subMenu.name}</p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
