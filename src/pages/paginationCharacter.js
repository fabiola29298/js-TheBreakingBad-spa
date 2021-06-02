
const paginationCharacter = async () => {
  let view = `<div class="pagination">`;
  for(let i=1; i<=12; i++){
    view += `<a href="#/characters-pag/${i}"> ${i} </a> `
  }
  view +=`</div>`;
  return view;
};

export default paginationCharacter;