import React, { useState, useEffect } from 'react';
import { UserInitials } from '../../components';
import {
  FlexColumn,
  FlexRow,
  FlexRowFlexStart,
  FlexRowFlexEndReverse,
} from '../../styled-components';
import './style.css';

interface ISubMenuItem {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

interface IProps {
  subMenuItem: ISubMenuItem;
  selected: boolean;
  someItemSelected: boolean;
}

const Item: React.FC<IProps> = ({ subMenuItem, selected, someItemSelected }) => {
  const { name, subject, owner, users } = subMenuItem;
  const [showCheckbox, setShowCheckbox] = useState(false);

  const className = `sub-menu-container${selected ? ' selected' : ''}`;

  useEffect(() => {
    setShowCheckbox(someItemSelected);
  }, [someItemSelected]);

  return (
    <FlexRow
      className={className}
      onMouseEnter={() => setShowCheckbox(true)}
      onMouseLeave={() => setShowCheckbox(someItemSelected)}
    >
      <FlexRowFlexStart>
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
          <div key={initials + index}>
            <UserInitials initials={initials} online={false} size="small" />
          </div>
        ))}
      </FlexRowFlexEndReverse>
    </FlexRow>
  );
};

export default Item;
