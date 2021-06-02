import getHash from '../utils/getHash';
import getEpisode from '../utils/getEpisode';

const EpisodeItem = async () => {
  const id = getHash();
  const episode = await getEpisode(id);
  const view = `
  <div class="episodes-inner">
      <article class="episode-card">
             <h2>${episode[0].title}</h2>
      </article>
      <article class="episode-card">
          <h3>series:<span>${episode[0].series}</span></h3>
          <h3>season:<span>${episode[0].season}</span></h3>
          <h3>episode:<span>${episode[0].episode}</span></h3>
          <h3>air_date:<span>${episode[0].air_date}</span></h3>
          <h3>characters:<span>${episode[0].characters}</span></h3>
      </article>
  </div>
  `;
  return view;
};

export default EpisodeItem;