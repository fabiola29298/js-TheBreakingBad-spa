
const paginationCharacter = async () => {
  let view = `
  <div class="pagination">
  <p class="paragraph">Pages</p>
  <div class="pagination-content"> `;
  for(let i=1; i<=7; i++){
    view += `<a href="#/characters-pag/${i}"> ${i} </a> `
  }
  view +=`</div></div>`;
  return view;
};

export default paginationCharacter;