import React from 'react';
import { UserInitials } from '../../components';
import { FlexColumn, FlexRow } from '../../styled-components';

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
  const { id, name, subject, owner, users } = subMenuItem;

  return (
    <FlexRow>
      <UserInitials initials={owner} online={false} size="large" />
      <FlexColumn>
        <p>{name}</p>
        <p>{subject}</p>
      </FlexColumn>
      {users.map((initials) => (
        <UserInitials initials={initials} online={false} size="small" />
      ))}
    </FlexRow>
  );
};

export default Item;
