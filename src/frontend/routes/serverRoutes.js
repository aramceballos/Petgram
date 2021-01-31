import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Favs from '../pages/Favs';
import User from '../pages/User';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const routes = (isAuth) => [
  {
    exact: true,
    path: '/',
    component: isAuth ? Home : Login,
  },
  {
    exact: true,
    path: '/pet/:categoryId',
    component: isAuth ? Home : Login,
  },
  {
    exact: true,
    path: '/detail/:detailId',
    component: isAuth ? Detail : Login,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/signup',
    component: SignUp,
  },
  {
    exact: true,
    path: '/favs',
    component: isAuth ? Favs : Login,
  },
  {
    exact: true,
    path: '/user',
    component: isAuth ? User : Login,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
