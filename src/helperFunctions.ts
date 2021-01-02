interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}

const mockUser = {
  firstName: 'User',
  lastName: 'User',
  id: 1,
};

export const getUser = (user: string, password: string): IUser | false =>
  user === 'user' && password === '123' && mockUser;
