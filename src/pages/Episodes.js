import getEpisode from '../utils/getEpisode';

  const Episodes = async () => {
    const episodes = await getEpisode();
    console.log(episodes);
    const view = `
    <div class="Episodes">
      ${episodes.map(episode => `
        <article class="episode-item">
          <a href="#/episodes/${episode.episode_id}/">
            <h2> ${episode.title} </h2>
            <h2> ${episode.season} </h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;
    return view;
  };

export default Episodes;