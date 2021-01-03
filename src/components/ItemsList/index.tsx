import React, { useContext } from 'react';
import { Context } from '../../context';
import { getSubMenuItems } from '../../helperFunctions';

const ItemsList = () => {
  const { items, selectedSubMenu } = useContext(Context);

  const selectedSubMenuItems = getSubMenuItems(items, selectedSubMenu);

  return (
    <div>
      {selectedSubMenuItems?.map((item: any) => (
        <div>{item?.subject}</div>
      ))}
    </div>
  );
};

export default ItemsList;
