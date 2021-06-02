import getCharacter from '../utils/getCharacter';

const Characters = async () => {
  const characters = await getCharacter();

  const view = `
     <h4> Characters </h4>
    <div class="wrapper">
    <div class="characters-card">
      ${characters.map(character => `
      <a href="#/characters/${character.char_id}/">
        <article class="character-item-info">
            <img src="${character.img}" height="120px" alt="${character.name}">
            <h4> ${character.name}
              <p> More> </p>
            </h4>
        </article>
      </a>
      `).join('')}
    </div>
  </div>
  `;
  return view;
};

export default Characters;