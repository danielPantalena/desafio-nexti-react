import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const initials = userData.firstName.charAt(0) + userData.lastName.charAt(0);

  return (
    <aside className="container">
      <FlexColumn>
        <FlexRow className="initials-row">
          <UserInitials initials={initials} online size="large" />
          <span className="text-novo">{t('New').toUpperCase()}</span>
        </FlexRow>
        <MenusList />
      </FlexColumn>
    </aside>
  );
};

export default Aside;
