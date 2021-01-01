import React from 'react';
import { Button, Input, Label } from '../../styled-components';

interface IProps {
  setLoggedIn: { (loggedIn: boolean): void };
}

export const Login: React.FC<IProps> = ({ setLoggedIn }) => {
  return (
    <div>
      <Label htmlFor="user">User</Label>
      <Input id="user"/>
      <Button onClick={() => setLoggedIn(true)}>LogIn</Button>
    </div>
  );
};

export default Login;
