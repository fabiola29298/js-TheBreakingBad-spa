// const API = 'https://www.breakingbadapi.com/api/characters/';
const API = 'https://www.breakingbadapi.com/api/characters?limit=10&offset=10';

const getCharacter = async (id)  => {
  const apiURL = id ? `https://www.breakingbadapi.com/api/${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getCharacter;