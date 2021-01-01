import React from 'react';
import { Button } from '../../styled-components/Button';

interface IProps {
  setLoggedIn: { (loggedIn: boolean): void };
}

export const Login: React.FC<IProps> = ({ setLoggedIn }) => {
  return (
    <div>
      <Button onClick={() => setLoggedIn(true)}>LogIn</Button>
    </div>
  );
};

export default Login;
