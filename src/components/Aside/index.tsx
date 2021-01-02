import React from 'react';
import { FlexColumn } from '../../styled-components';
import './style.css'

interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}
interface IProps {
  userData: IUser;
}

const Aside: React.FC<IProps> = ({ userData }) => {
  return (
    <aside className="container">
      <FlexColumn>
        <div>{`${userData.firstName} ${userData.lastName}`}</div>
      </FlexColumn>
    </aside>
  );
};

export default Aside;
