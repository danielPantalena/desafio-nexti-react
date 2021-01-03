import React, { useState, useContext } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Context } from '../../context';
import './style.css';

interface IMenu {
  id: never;
  name: string;
  subMenus: [{ id: number; name: string }];
}

interface IProps {
  menu: IMenu;
}

const Menu: React.FC<IProps> = ({ menu }) => {
  const { selectedMenus, setSelectedMenus } = useContext(Context);

  const [selected, setSelected] = useState(false);

  React.useEffect(() => {
    setSelected(selectedMenus.includes(menu.id))
  }, [selectedMenus])

  const handleSelect = () => {
    const newSelectedMenus = selected
      ? selectedMenus.filter((selectedMenuId) => selectedMenuId !== menu.id)
      : [...selectedMenus, menu.id];

    setSelectedMenus(newSelectedMenus);
    return setSelected(!selected);
  };

  const iconClassName = `icon${selected ? ' selected' : ''}`;
  return (
    <div>
      <p onClick={handleSelect} className="menu">
        <MdKeyboardArrowDown size={20} className={iconClassName} />
        {menu.name}
      </p>
      {selected && (
        <ul>
          {menu.subMenus.map((subMenu) => (
            <li key={subMenu.id} className="sub-menu">
              {subMenu.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
