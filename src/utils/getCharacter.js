// const API = 'https://www.breakingbadapi.com/api/characters/';
const API = 'https://www.breakingbadapi.com/api/characters?limit=7&offset=0';

const getCharacter = async (id)  => {
  console.log(`id ${id}`);
  let apiURL = '';
  if (id && id != '/' && id !='characters'){

    let itemId = id.split('/')[1] || '';

    console.log(`itemId ${itemId}`);
    console.log(`includes ${id.includes('pag')}`);
    if (id.includes('pag')) {
      if (Number(itemId) === 1) {
        apiURL = API;
      }else{
        apiURL = `https://www.breakingbadapi.com/api/characters?limit=7&offset=${Number(itemId)*7}`;
      }
    }else{
      apiURL = `https://www.breakingbadapi.com/api/characters/${itemId}`;
    }
  }
  else{
    // home
    apiURL = API;
  }


  try {
    console.log(`apiURL ${apiURL}`);
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getCharacter;