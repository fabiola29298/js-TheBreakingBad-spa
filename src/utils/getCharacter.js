const APIcharacteres = 'https://www.breakingbadapi.com/api/characters/';

const getCharacter = async (id)  => {
  const apiURL = id ? `${API}${id}` : APIcharacteres;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getCharacter;