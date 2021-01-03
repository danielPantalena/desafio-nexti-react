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
  const { selectedSubMenu, searchFilter, setSelectedSubMenu, menusList } = useContext(Context);
  const [selected, setSelected] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [listLength, setListLength] = useState(0);

  const handleSubMenuSelection = (id: number) => {
    if (selectedSubMenu === id) return setSelectedSubMenu(0);
    return setSelectedSubMenu(id);
  };

  const handleFilter = (filter: string) => {
    if (!filter) {
      setShowMenu(true);
      setSelectedSubMenu(0)
      return setSelected(false);
    }

    const id = menu.subMenus.find(({ name }) => name.toLowerCase() === filter.toLowerCase())?.id ?? 0;

    if (id) setSelectedSubMenu(id)

    const isMenuFiltered = menu.subMenus.some((subMenu) =>
      subMenu.name.toLowerCase().includes(filter.toLowerCase())
    );
    setShowMenu(isMenuFiltered);
    setSelected(isMenuFiltered);
  };

  useEffect(() => {
    handleFilter(searchFilter);
  }, [searchFilter]);

  useEffect(() => {
    if (listLength > menusList.length) {
      setSelected(false);
    }
    setListLength(menusList.length);
  }, [menusList]);

  const iconClassName = `icon${selected ? ' selected' : ''}`;

  return (
    <div>
      {showMenu && (
        <div>
          <p onClick={() => setSelected(!selected)} className="menu">
            <MdKeyboardArrowDown size={20} className={iconClassName} />
            {menu.name}
          </p>
          {selected && (
            <ul>
              {menu.subMenus.map((subMenu) => (
                <li
                  key={subMenu.id}
                  onClick={() => handleSubMenuSelection(subMenu.id)}
                  className={`sub-menu${selectedSubMenu === subMenu.id ? ' selected' : ''}`}
                >
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
