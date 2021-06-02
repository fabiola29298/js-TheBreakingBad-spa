import Characters from '../pages/Characters';
import Episodes from '../pages/Episodes';

const Home = async () => {

  const view = `
    <h4>Home</h4>
    <div id="characters">
      ${await Characters()}
    </div>
    <div class="Episodes">
      ${await Episodes()}
    </div>
  `;

  return view;
};

export default Home;