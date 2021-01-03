interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}

interface ISubMenuItem {
  id: number;
  name: string;
  subject: string;
  owner: string;
  users: string[];
}

interface IItem {
  id: number;
  subMenuItems: ISubMenuItem[];
}

const mockUser = {
  firstName: 'UserFirstName',
  lastName: 'UserLastName',
  id: 1,
};

export const getUser = (user: string, password: string): IUser | false =>
  user === 'user' && password === '123' && mockUser;

export const getSubMenuItems = (items: IItem[], selectedId: number): ISubMenuItem[] | null => {
  return items.find(({ id }) => selectedId === id)?.subMenuItems ?? null;
};
