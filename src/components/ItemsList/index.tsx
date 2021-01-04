import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../context';
import { getSubMenuItems } from '../../helperFunctions';
import { Item } from '../../components';
import './style.css';

interface ISubMenuItem {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

const ItemsList = () => {
  const { items, selectedSubMenu } = useContext(Context);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const selectedSubMenuItems = getSubMenuItems(items, selectedSubMenu);

  const handleSelectedItems = (id: string) => {
    const newSelectedItems = selectedItems.includes(id)
      ? selectedItems.filter((itemId) => itemId !== id)
      : [...selectedItems, id];

    setSelectedItems(newSelectedItems);
  };

  useEffect(() => {
    setSelectedItems([]);
  }, [selectedSubMenu]);

  return (
    <div className="items-list-container">
      {selectedSubMenuItems?.map((subMenuItem: ISubMenuItem) => (
        <div key={subMenuItem.id} onClick={() => handleSelectedItems(subMenuItem.id)}>
          <Item
            subMenuItem={subMenuItem}
            selected={selectedItems.includes(subMenuItem.id)}
            someItemSelected={selectedItems.length > 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
