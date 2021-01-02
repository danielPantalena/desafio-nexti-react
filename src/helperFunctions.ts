interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}

const mockUser = {
  firstName: 'UserFirstName',
  lastName: 'UserLastName',
  id: 1,
};

export const getUser = (user: string, password: string): IUser | false =>
  user === 'user' && password === '123' && mockUser;
