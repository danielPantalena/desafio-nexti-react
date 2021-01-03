
const getItems = async (): Promise<unknown> => {
  const CORS = 'https://cors-anywhere.herokuapp.com/';
  const itemsAPI = 'desafioreact.s3.amazonaws.com/menu/itens.json';
  try {
    const items = await fetch(CORS + itemsAPI)
      .then((response) => response.json())
      .then((responseJSON) => responseJSON.items);
    return items;
  } catch (err) {
    console.error(err.message);
  }
};

export default getItems;
