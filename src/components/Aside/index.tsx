import React from 'react';
import { UserInitials } from '../';
import { FlexColumn, FlexRow } from '../../styled-components';
import './style.css';

interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}
interface IProps {
  userData: IUser;
}

const Aside: React.FC<IProps> = ({ userData }) => {
  const initials = userData.firstName.charAt(0) + userData.lastName.charAt(0);
  return (
    <aside className="container">
      <FlexColumn>
        <FlexRow>
          <UserInitials initials={initials} />
          <span className="text-novo">NOVO</span>
        </FlexRow>
      </FlexColumn>
    </aside>
  );
};

export default Aside;
