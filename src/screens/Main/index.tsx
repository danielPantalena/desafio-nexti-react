import React from 'react';
import { Aside, Content } from '../../components';
import { FlexRow } from '../../styled-components';
import './style.css'

interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}
interface IProps {
  userData: IUser;
}

export const Main: React.FC<IProps> = ({ userData }) => {
  return (
    <div className="main-container">
        <Aside userData={userData} />
        <Content />
    </div>
  );
};

export default Main;
