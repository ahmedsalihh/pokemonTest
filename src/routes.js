import PokeList from './components/PokeList';
import NoMatch from './components/NoMatch';
import PokeDetail from './components/PokeDetail';

export const routes = [
  {
    key: 'detail',
    path: '/pokemon/:name',
    component: PokeDetail,
  },
  {
    key: 'list',
    path: '/pokemon',
    component: PokeList,
  },
  {
    key: 'nomatch',
    component: NoMatch,
  },
];
