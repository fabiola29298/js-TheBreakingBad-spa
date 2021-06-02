import getHash from '../utils/getHash';
import getEpisode from '../utils/getEpisode';

const EpisodeItem = async () => {
  const id = getHash();
  const episode = await getEpisode(id);
  const view = `
  <div class="characters-inner">
      <h4> Episode </h4>
      <div class="wrapper">
      <article class="character-info">
             <h3>${episode[0].title}</h3>
      </article>
      <article class="character-info">
          <h5>Series: <span>${episode[0].series}</span></h5>
          <h5>Season: <span>${episode[0].season}</span></h5>
          <h5>Episode: <span>${episode[0].episode}</span></h5>
          <h5>Air_date: <span>${episode[0].air_date}</span></h5>
          <h5>Characters: <span>${episode[0].characters}</span></h5>
      </article>
    </div>
  </div>
  `;
  return view;
};

export default EpisodeItem;