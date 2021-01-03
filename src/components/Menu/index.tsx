import React, { useState, useContext, useEffect } from 'react';
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
  const { selectedMenus, setSelectedMenus, searchFilter } = useContext(Context);
  const [selected, setSelected] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    setSelected(selectedMenus.includes(menu.id));
  }, [selectedMenus]);

  const handleFilter = (filter: string) => {
    if (!filter) {
      setShowMenu(true);
      return setSelected(false);
    }
    const isMenuFiltered = menu.subMenus.some((subMenu) =>
      subMenu.name.toLowerCase().includes(filter.toLowerCase())
    );
    setShowMenu(isMenuFiltered);
    setSelected(isMenuFiltered);
  };

  useEffect(() => {
    handleFilter(searchFilter);
  }, [searchFilter]);

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
      {showMenu && (
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
      )}
    </div>
  );
};

export default Menu;
