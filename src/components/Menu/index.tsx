import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './style.css';

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

  const iconClassName = `icon${selected ? ' selected' : ''}`;
  return (
    <div>
      <p onClick={() => setSelected(!selected)}>
        <MdKeyboardArrowDown size={20} className={iconClassName} />
        {menu.name}
      </p>
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
