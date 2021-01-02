import React, { useState } from 'react';
import { Button, Input, FlexColumn, FlexRow } from '../../styled-components';
import { validateLogIn } from '../../helperFunctions';

interface IProps {
  setLoggedIn: { (loggedIn: boolean): void };
}

export const Login: React.FC<IProps> = ({ setLoggedIn }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleLogIn = () => {
    const isValidLogIn = validateLogIn(user, password);
    setInvalidCredentials(!isValidLogIn);
    return setLoggedIn(isValidLogIn);
  };

  return (
    <FlexColumn>
      <FlexRow>
        <Input
          id="user"
          value={user}
          placeholder="User"
          onChange={(event) => setUser(event.target.value)}
        />
      </FlexRow>
      <FlexRow>
        <Input
          id="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </FlexRow>
      <FlexRow>
        <Button onClick={handleLogIn} disabled={!user || !password}>
          LogIn
        </Button>
      </FlexRow>
      {invalidCredentials && <FlexRow>Invalid Credentials</FlexRow>}
    </FlexColumn>
  );
};

export default Login;
