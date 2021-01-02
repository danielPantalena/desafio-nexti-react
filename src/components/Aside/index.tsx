import React, { useEffect, useState } from 'react';
import { getMenusList } from '../../services/getMenusList';
import { UserInitials, MenusList } from '../';
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

  const [menusList, setTasksList] = useState<any>([]); // TODO: Type TS

  useEffect(() => {
    getMenusList().then((response) => setTasksList(response))
  }, []);

  return (
    <aside className="container">
      <FlexColumn>
        <FlexRow>
          <UserInitials initials={initials} />
          <span className="text-novo">NOVO</span>
        </FlexRow>
        <MenusList menusList={menusList} />
      </FlexColumn>
    </aside>
  );
};

export default Aside;
