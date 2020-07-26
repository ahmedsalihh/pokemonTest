import PokeList from './components/PokeList';
import NoMatch from './components/NoMatch';
import PokeDetail from './components/PokeDetail';
import RedirectToList from './components/RedirectToList';

export const routes = [
  {
    exact: true,
    key: 'list',
    path: '/pokemon',
    component: PokeList,
  },
  {
    key: 'detail',
    path: '/pokemon/:id',
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
