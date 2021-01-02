import React, { useState } from 'react';
import { Button, Input, Label, FlexColumn, FlexRow } from '../../styled-components';
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
        <Label htmlFor="user">User</Label>
        <Input id="user" onChange={(event) => setUser(event.target.value)} value={user} />
      </FlexRow>
      <FlexRow>
        <Label htmlFor="password">password</Label>
        <Input
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </FlexRow>
      <FlexRow>
        <Button onClick={handleLogIn} disabled={!user || !password}>LogIn</Button>
      </FlexRow>
      {invalidCredentials && <FlexRow>Invalid Credentials</FlexRow>}
    </FlexColumn>
  );
};

export default Login;
