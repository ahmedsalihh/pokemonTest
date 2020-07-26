import PokeList from './views/PokeList';
import NoMatch from './views/NoMatch';
import PokeDetail from './views/PokeDetail';
import RedirectToList from './views/RedirectToList';

export const routes = [
  {
    exact: true,
    key: 'list',
    path: '/pokemon',
    component: PokeList,
  },
  {
    key: 'detail',
    path: '/pokemon/:name',
    component: PokeDetail,
  },
  {
    key: 'redirect',
    path: '/',
    component: RedirectToList,
  },
  {
    key: 'nomatch',
    component: NoMatch,
  },
];
