import React from 'react';

interface ISubMenuItem {
  id: number;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

interface IProps {
  subMenuItem: ISubMenuItem;
}

const Item: React.FC<IProps> = ({ subMenuItem }) => {
  return <div>{subMenuItem?.subject}</div>;
};

export default Item;
