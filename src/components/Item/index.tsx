import React, { useState } from 'react';
import { UserInitials } from '../../components';
import { FlexColumn, FlexRow } from '../../styled-components';
import './style.css';

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
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className="sub-menu-container" onClick={() => setSelected(!selected)}>
      <FlexRow
        onMouseEnter={() => setShowCheckbox(true)}
        onMouseLeave={() => setShowCheckbox(false)}
      >
        <UserInitials
          initials={owner}
          online={false}
          size="large"
          checkbox={showCheckbox}
          selected={selected}
        />
        <FlexColumn>
          <p>{name}</p>
          <p>{subject}</p>
        </FlexColumn>
        {users.map((initials) => (
          <UserInitials initials={initials} online={false} size="small" />
        ))}
      </FlexRow>
    </div>
  );
};

export default Item;
