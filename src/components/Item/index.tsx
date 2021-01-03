import React, { useState } from 'react';
import { UserInitials } from '../../components';
import { FlexColumn, FlexRow, FlexRowFlexEndReverse } from '../../styled-components';
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
        <FlexRowFlexEndReverse>
          {users.map((initials, index) => (
              <UserInitials initials={initials} online={false} size="small" />
          ))}
        </FlexRowFlexEndReverse>
      </FlexRow>
    </div>
  );
};

export default Item;
