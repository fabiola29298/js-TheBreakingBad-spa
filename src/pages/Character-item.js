import getHash from '../utils/getHash';
import getCharacter from '../utils/getCharacter';

const CharacterItem = async () => {
  const id = getHash();
  const character = await getCharacter(id);
  const view = `
  <div class="Characters-inner">
      <article class="Character-card">
             <h2>${character[0].name}</h2>
      </article>
      <article class="Character[0]-card">
          <h3>birthday:<span>${character[0].birthday}</span></h3>
          <h3>occupation:<span>${character[0].occupation}</span></h3>
          <h3>status:<span>${character[0].status}</span></h3>
          <h3>nickname:<span>${character[0].nickname}</span></h3>
          <h3>portrayed:<span>${character[0].portrayed}</span></h3>
      </article>
  </div>
  `;
  return view;
};

export default CharacterItem;