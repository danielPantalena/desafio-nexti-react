import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, FlexColumn, FlexRow } from '../../styled-components';
import { getUser } from '../../helperFunctions';

interface IProps {
  setLoggedIn: { (loggedIn: boolean): void };
}

export const Login: React.FC<IProps> = ({ setLoggedIn }) => {
  const { t } = useTranslation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleLogin = () => {
    const isValidLogin = getUser(user, password);
    setInvalidCredentials(!isValidLogin);
    return setLoggedIn(!!isValidLogin);
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
        <Button onClick={handleLogin} disabled={!user || !password}>
          {t('Login')}
        </Button>
      </FlexRow>
      {invalidCredentials && <FlexRow>Invalid Credentials</FlexRow>}
    </FlexColumn>
  );
};

export default Login;
