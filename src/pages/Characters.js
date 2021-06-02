import getCharacter from '../utils/getCharacter';

const Characters = async () => {
  const characters = await getCharacter();

  const view = `
    <div class="characters-card">
      ${characters.map(character => `
      <a href="#/characters/${character.char_id}/">
        <article class="character-item">
            <img src="${character.img}" height="130px" alt="${character.name}">
            <h4> ${character.name} </h4>
        </article>
      </a>
      `).join('')}
    </div>
  `;
  return view;
};

export default Characters;