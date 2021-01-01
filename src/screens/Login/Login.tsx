import React from 'react';
import { Button, Input, Label, FlexColumn, FlexRow } from '../../styled-components';

interface IProps {
  setLoggedIn: { (loggedIn: boolean): void };
}

export const Login: React.FC<IProps> = ({ setLoggedIn }) => {
  return (
    <FlexColumn>
      <FlexRow>
        <Label htmlFor="user">User</Label>
        <Input id="user" />
      </FlexRow>
      <FlexRow>
        <Label htmlFor="password">password</Label>
        <Input id="password" />
      </FlexRow>
      <FlexRow>
        <Button onClick={() => setLoggedIn(true)}>LogIn</Button>
      </FlexRow>
    </FlexColumn>
  );
};

export default Login;
