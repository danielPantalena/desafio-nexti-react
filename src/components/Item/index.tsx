import React, { useState } from 'react';
import { UserInitials } from '../../components';
import {
  FlexColumn,
  FlexRow,
  FlexRowFlexStart,
  FlexRowFlexEndReverse,
} from '../../styled-components';
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
  const { name, subject, owner, users } = subMenuItem;
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <FlexRow className="sub-menu-container" onClick={() => setSelected(!selected)}>
      <FlexRowFlexStart
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
          <FlexRowFlexStart>
            <p className="item-text owner-name">{name}</p>
          </FlexRowFlexStart>
          <FlexRowFlexStart>
            <p className="item-text subject">{subject}</p>
          </FlexRowFlexStart>
        </FlexColumn>
      </FlexRowFlexStart>
      <FlexRowFlexEndReverse>
        {users.map((initials, index) => (
          <UserInitials initials={initials} online={false} size="small" />
        ))}
      </FlexRowFlexEndReverse>
    </FlexRow>
  );
};

export default Item;
