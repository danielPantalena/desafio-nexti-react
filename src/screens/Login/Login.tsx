import React from 'react';
import { Button, Input } from '../../styled-components';

interface IProps {
  setLoggedIn: { (loggedIn: boolean): void };
}

export const Login: React.FC<IProps> = ({ setLoggedIn }) => {
  return (
    <div>
      <Input />
      <Button onClick={() => setLoggedIn(true)}>LogIn</Button>
    </div>
  );
};

export default Login;
