interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}

interface IMenu {
  id: number;
  name: string;
  subMenus: { id: number; name: string }[];
}

interface ISubMenuItem {
  id: string;
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

export const removeSelectedSubMenu = (menus: IMenu[], selectedSubMenu: number): IMenu[] => {
  if (selectedSubMenu === 0) return menus;
  const newMenus = menus
    .map((menu) => ({
      ...menu,
      subMenus: menu.subMenus.filter(({ id }) => id !== selectedSubMenu),
    }))
    .filter((menu) => menu.subMenus.length > 0);
  return newMenus ?? menus;
};
