import getEpisode from '../utils/getEpisode';

  const Episodes = async () => {
    const episodes = await getEpisode();
    const view = `
    <h4> Episodes </h4>
    <div class="wrapper">
    <div class="episode-card">
      ${episodes.map(episode => `
      <a href="#/episodes/${episode.episode_id}/">
        <div class="episode-item">
            <div class="column">
              <h5> ${episode.title} </h5>
              <p> Season: ${episode.season} </p>
            </div>
            <div class="column2">
            <p> More> </p>
            </div>
        </div>
      </a>
      `).join('')}
    </div>
    </div>
  `;
    return view;
  };

export default Episodes;