import React, { useContext } from 'react';
import { Context } from '../../context';
import { getSubMenuItems } from '../../helperFunctions';
import { Item } from '../../components';
import './style.css'

interface ISubMenuItem {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

const ItemsList = () => {
  const { items, selectedSubMenu } = useContext(Context);

  const selectedSubMenuItems = getSubMenuItems(items, selectedSubMenu);

  return (
    <div className="items-list-container">
      {selectedSubMenuItems?.map((subMenuItem: ISubMenuItem) => (
        <div key={subMenuItem.id}>
          <Item subMenuItem={subMenuItem} />
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
