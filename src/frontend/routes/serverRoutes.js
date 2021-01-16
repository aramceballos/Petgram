import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Favs from '../pages/Favs';
import User from '../pages/User';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/pet/:categoryId',
    component: Home,
  },
  {
    exact: true,
    path: '/detail/:detailId',
    component: Detail,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/favs',
    component: Favs,
  },
  {
    exact: true,
    path: '/user',
    component: User,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
