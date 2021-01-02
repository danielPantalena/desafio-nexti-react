export const getMenusList = async () => {
  console.log('getTask');
  const CORS = 'https://cors-anywhere.herokuapp.com/';
  const tasksListApi = 'desafioreact.s3.amazonaws.com/menu/menu.json';
  try {
    const menusList = await fetch(CORS + tasksListApi).then((response) => response.json());
    return menusList;
  } catch (err) {
    console.error(err.message);
  }
};
