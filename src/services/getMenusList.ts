interface IMenusList {
  menusList: [{ id: number; name: string; subMenus: [{ id: number; name: string }] }];
}

export const getMenusList = async (): Promise<IMenusList | unknown> => {
  console.log('getTask');
  const CORS = 'https://cors-anywhere.herokuapp.com/';
  const tasksListApi = 'desafioreact.s3.amazonaws.com/menu/menu.json';
  try {
    const menusList = await fetch(CORS + tasksListApi)
      .then((response) => response.json())
      .then((responseJSON) => responseJSON.menus);
    return menusList;
  } catch (err) {
    console.error(err.message);
  }
};