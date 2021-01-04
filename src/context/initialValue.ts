export const initialValue = {
  menusList: [
    {
      id: 0,
      name: '',
      subMenus: [
        {
          id: 0,
          name: '',
        },
        {
          id: 0,
          name: '',
        },
      ],
    },
  ],
  items: [
    {
      id: 0,
      subMenuItems: [
        {
          id: '0',
          name: '',
          subject: '',
          owner: '',
          users: [''],
        },
      ],
    },
  ],
  searchFilter: '',
  selectedSubMenu: 0, // TODO: Type TS
  setMenusList: (menus: any) => menus,
  setSearchFilter: (filter: any) => filter,
  setSelectedSubMenu: (id: any) => id,
};
