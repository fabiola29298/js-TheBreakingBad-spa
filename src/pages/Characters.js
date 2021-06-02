import getCharacter from '../utils/getCharacter';

const Characters = async () => {
  const characters = await getCharacter();

  const view = `
    <div class="Characters">
      ${characters.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.img}" alt="${character.name}">
            <h2> ${character.name} </h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Characters;