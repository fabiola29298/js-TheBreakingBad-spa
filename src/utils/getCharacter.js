const API = 'https://www.breakingbadapi.com/api/characters/';

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