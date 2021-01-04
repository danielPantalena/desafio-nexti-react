const CORS = process.env.REACT_APP_CORS ?? 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = process.env.REACT_APP_BASE_URL ?? 'desafioreact.s3.amazonaws.com/menu/';

export const getItems = async (): Promise<unknown> => {
  const itemsAPI = CORS + BASE_URL + 'itens.json';
  try {
    const items = await fetch(itemsAPI)
      .then((response) => response.json())
      .then((responseJSON) => responseJSON.items);
    return items;
  } catch (err) {
    console.error(err.message);
  }
};

interface IMenusList {
  menusList: [{ id: number; name: string; subMenus: [{ id: number; name: string }] }];
}

export const getMenusList = async (): Promise<IMenusList | unknown> => {
  const menuApi = CORS + BASE_URL + 'menu.json';
  try {
    const menusList = await fetch(menuApi)
      .then((response) => response.json())
      .then((responseJSON) => responseJSON.menus);
    return menusList;
  } catch (err) {
    console.error(err.message);
  }
};
