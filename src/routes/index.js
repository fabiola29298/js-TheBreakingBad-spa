import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Home from '../pages/Home';
import Characters from '../pages/Characters';
import Episodes from '../pages/Episodes';
import CharacterItem from '../pages/Character-item';
import EpisodeItem from '../pages/Episode-item';
import Error404 from '../pages/Error404';
//utils
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/characters/:id': CharacterItem,
  '/episodes/:id': EpisodeItem,
  '/characters': Characters,
  '/charactersPag/:id': Characters,
  '/episodes': Episodes,
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const footer = null || document.getElementById('footer');

  header.innerHTML = await Header();
  footer.innerHTML = await Footer();
  let hash = getHash(); // obtein the url
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;