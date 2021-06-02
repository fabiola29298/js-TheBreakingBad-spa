import getCharacter from '../utils/getCharacter';
import getHash from '../utils/getHash';
import paginationCharacter from './paginationCharacter';
const Characters = async () => {
  const id = getHash() || '';
  const characters = await getCharacter(id);

  const view = `
     <h4> Characters </h4>
    <div class="wrapper">
     ${await paginationCharacter()}
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