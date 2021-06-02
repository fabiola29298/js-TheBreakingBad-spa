import Header from '../pages/Header';
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
  '/episodes': Episodes,
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;