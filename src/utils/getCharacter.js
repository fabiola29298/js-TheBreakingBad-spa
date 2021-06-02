// const API = 'https://www.breakingbadapi.com/api/characters/';
const API = 'https://www.breakingbadapi.com/api/characters?limit=7&offset=0';

const getCharacter = async (id)  => {
  let apiURL = '';
  if (id && id != '/' && id !='characters'){

    let itemId = id.split('/')[1] || '';
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
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getCharacter;