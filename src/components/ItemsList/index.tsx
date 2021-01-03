import React, { useContext } from 'react';
import { Context } from '../../context';
import { getSubMenuItems } from '../../helperFunctions';
import { Item } from '../../components';

interface ISubMenuItem {
  id: number;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

const ItemsList = () => {
  const { items, selectedSubMenu } = useContext(Context);

  const selectedSubMenuItems = getSubMenuItems(items, selectedSubMenu);

  return (
    <div>
      {selectedSubMenuItems?.map((subMenuItem: ISubMenuItem) => (
        <Item subMenuItem={subMenuItem} />
      ))}
    </div>
  );
};

export default ItemsList;
