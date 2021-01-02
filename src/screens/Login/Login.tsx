import React, { useState } from 'react';
import { Button, Input, Label, FlexColumn, FlexRow } from '../../styled-components';
import { validateLogIn } from '../../helperFunctions';

interface IProps {
  setLoggedIn: { (loggedIn: boolean): void };
}

export const Login: React.FC<IProps> = ({ setLoggedIn }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => setLoggedIn(validateLogIn(user, password));

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
        <Button onClick={handleLogIn}>LogIn</Button>
      </FlexRow>
    </FlexColumn>
  );
};

export default Login;
