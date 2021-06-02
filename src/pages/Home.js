import Characters from '../pages/Characters';
import Episodes from '../pages/Episodes';

const Home = async () => {

  const view = `
  <h4> Home </h4>
  <div class="wrapper">
    <h3>Character</h3>
    <div id="characters">
      ${await Characters()}
    </div>
    <h3>Episodes</h3>
    <div class="Episodes">
      ${await Episodes()}
    </div>
  </div>
  `;

  return view;
};

export default Home;