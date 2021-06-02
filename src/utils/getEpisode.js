const APIepisodes = 'https://www.breakingbadapi.com/api/episodes/';

const getEpisode = async (id) => {
  const apiURL = id ? `https://www.breakingbadapi.com/api/${id}` : APIepisodes;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};
export default getEpisode;