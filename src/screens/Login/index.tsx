import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, FlexColumn, FlexRow } from '../../styled-components';
import { getUser } from '../../helperFunctions';

interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}
interface IProps {
  handleLogin: { (userData: IUser): void };
}

export const Login: React.FC<IProps> = ({ handleLogin }) => {
  const { t } = useTranslation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleUserLogin = () => {
    const userData = getUser(user, password);
    if (!userData) return setInvalidCredentials(true);
    setInvalidCredentials(false);
    return handleLogin(userData);
  };

  return (
    <FlexColumn>
      <FlexRow>
        <Input
          id="user"
          value={user}
          placeholder={t('User')}
          onChange={(event) => setUser(event.target.value)}
        />
      </FlexRow>
      <FlexRow>
        <Input
          id="password"
          value={password}
          placeholder={t('Password')}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FlexRow>
      <FlexRow>
        <Button onClick={handleUserLogin} disabled={!user || !password}>
          {t('Login')}
        </Button>
      </FlexRow>
      {invalidCredentials && <FlexRow>Invalid Credentials</FlexRow>}
    </FlexColumn>
  );
};

export default Login;
