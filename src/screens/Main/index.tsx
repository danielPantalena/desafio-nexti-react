import React from 'react';
import { Aside, Content } from '../../components';
import { FlexRow } from '../../styled-components';

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
    <div>
      <FlexRow>
        <Aside userData={userData} />
        <Content />
      </FlexRow>
    </div>
  );
};

export default Main;
