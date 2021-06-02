import getHash from '../utils/getHash';
import getCharacter from '../utils/getCharacter';

const CharacterItem = async () => {
  const id = getHash();
  const character = await getCharacter(id);
  const view = `
  <div class="characters-inner">
      <h4> Character </h4>
      <div class="wrapper">
        <article class="character-info">
           <h3>${character[0].name}</h3>
           <img src="${character[0].img}" height="320px" alt="${character.name}">
        </article>
        <article class="character-info">
            <h5>Birthday: <span>${character[0].birthday}</span></h5>
            <h5>Occupation: <span>${character[0].occupation}</span></h5>
            <h5>Status: <span>${character[0].status}</span></h5>
            <h5>Nickname: <span>${character[0].nickname}</span></h5>
            <h5>Portrayed: <span>${character[0].portrayed}</span></h5>
        </article>
      </div>
  </div>
  `;
  return view;
};

export default CharacterItem;